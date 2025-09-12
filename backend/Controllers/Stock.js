//stock api
import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 86400 });
import dotenv from 'dotenv';
dotenv.config();
import { restClient } from '@polygon.io/client-js';
import { User } from '../Models/User.js';

const rest = restClient(process.env.POLY_API_KEY, 'https://api.polygon.io');


// controller to give all thse stocks on dashboard
export const AllStocksSummary = async (req, res) => {
    try {
        const cacheKey = 'stocks-2025-08-28';
        let cachedData = cache.get(cacheKey);
        if (cachedData) {
            return res.status(200).json(cachedData);
        }
        const responseAll = await rest.getGroupedStocksAggregates("2025-08-28");
        if (!responseAll) return res.status(404).json({ message: "Must Be Some Date Issue " })
        let stockToSee = ["PLTR", "GEV", "TPR", "VST", "AXON", "UAL", "JBL", "AVGO", "DASH", "NRG", "AAPL", "MSFT", "NVDA", "GOOGL", "AMZN", "META", "TSLA", "NFLX", "ORCL", "RCL", "CCL", "CRWD", "COIN", "AMD", "ANET", "WDC", "BRKB", "DIS", "JPM", "V", "MA", "JNJ", "PG", "KO", "PFE", "XOM", "CVX", "HD", "WMT", "UNH", "BAC", "INTC", "CRM", "ADBE", "PYPL", "UBER", "CEG", "APH", "HWM", "MU"]

        const response = responseAll.results.filter(stock => stockToSee.includes(stock.T));
        cache.set(cacheKey, response);
        if (response) return res.status(200).json(response)
    }
    catch (e) {
        console.error('ERROR AT ALLSTOCKSSUMMARY:', e);
        res.status(500).json({ message: e.message });
    }
}

// A simple function to introduce a delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// A wrapper function to handle retries with exponential backoff
async function fetchWithBackoff(fetchFunction, maxRetries = 5, retryDelay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fetchFunction();
        } catch (error) {
            // Check for a 429 status code
            if (error.response && error.response.status === 429) {
                console.warn(`Rate limit hit. Retrying in ${retryDelay}ms... (Attempt ${i + 1} of ${maxRetries})`);
                await sleep(retryDelay);
                // Double the delay for the next attempt
                retryDelay *= 2;
            } else {
                // If it's a different error, re-throw it
                throw error;
            }
        }
    }
    // If all retries fail, throw an error
    throw new Error('All retry attempts failed due to rate limiting.');
}

// controller to give all the information of a particular stock on dashboard
export const particularDetailStock = async (req, res) => {
    try {
        let { stockName } = req.body;
        const cacheKey = `particular-${stockName}2025-08-28`;
        let cachedData = cache.get(cacheKey);
        const cacheKey2 = `particular-${stockName}-des2025-08-28`;
        let cachedData2 = cache.get(cacheKey2);
        const cacheKey3 = `particular-${stockName}-dividend`;
        let cachedData3 = cache.get(cacheKey3);
        const cacheKey4 = `particular-${stockName}-financial`;
        let cachedData4 = cache.get(cacheKey4);
        if (cachedData && cachedData2) return res.status(200).json({ data1: cachedData, data2: cachedData2, dividends: cachedData3, financial: cachedData4 })


        const [response, response2, response3, financiall] = await Promise.all([
            fetchWithBackoff(() => rest.getStocksOpenClose(stockName, "2025-08-28", { adjusted: true })),
            fetchWithBackoff(() => rest.getTicker(stockName)),
            fetchWithBackoff(() => rest.listDividends(stockName)),
            fetchWithBackoff(() => rest.listFinancials(stockName))
        ]);
        cache.set(cacheKey, response);
        cache.set(cacheKey2, response2);
        cache.set(cacheKey3, response3);
        cache.set(cacheKey4, financiall);

        return res.status(200).json({ data1: response, data2: response2, dividends: response3, financial: financiall });

    }
    catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

// controller to give all inform of month of a stock chart creation on dashboard
export const chartMonth = async (req, res) => {
    try {
        let { stockName } = req.body;
        const cacheKey = `particular-${stockName}`;
        let cachedData = cache.get(cacheKey);
        if (cachedData) return res.status(200).json(cachedData)
        const response = await rest.getStocksAggregates(stockName, 1, "day", "2024-08-01", "2024-08-29");
        cache.set(cacheKey, response);
        return res.status(200).json(response);


    }
    catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}


export const particularStock = async (req, res) => {
    try {
        let { stockName } = req.body;
        const cacheKey = `particular-${stockName}2025-08-28`;
        let cachedData = cache.get(cacheKey);
        if (cachedData) return res.status(200).json(cachedData);
        const response = await rest.getStocksOpenClose(stockName, "2025-08-28", { adjusted: true });
        cache.set(cacheKey, response);
        return res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

// symbol: {
//     type: String,
//     required: true,
//     uppercase: true, 
//   },
//   quantity: {
//     type: Number,
//     required: true,
//     min: 0,
//   },
//   avgBuyPrice: {
//     type: Number,
//     required: true,
//   },
//   totalInvested: {
//     type: Number,
//     required: true,
//   },

// buying stocks and sell
export const buyingStock = async (req, res) => {
    try {
        let { symbol, quantity, totalCost } = req.body;
        quantity = parseInt(quantity);
        totalCost = parseFloat(totalCost)
        let buyer = await User.findById(req.user);
        if (!buyer) return res.status(400).json({ message: "User Does not exist" });
        if (buyer.balance < totalCost) return res.status(400).json({ message: "Insufficient Balance" });
        let price = totalCost / quantity;
        let haveStock = buyer.stocks.find(stock => stock.symbol === symbol);
        if (haveStock) {
            const totalInvested = haveStock.totalInvested + totalCost;
            const newQuantity = haveStock.quantity + quantity;
            const avgBuyPrice = totalInvested / newQuantity;
            haveStock.totalInvested = totalInvested;
            haveStock.quantity = newQuantity;
            haveStock.avgBuyPrice = avgBuyPrice;
        }
        else {
            let newStock = {
                symbol: symbol,
                quantity: quantity,
                avgBuyPrice: price,
                totalInvested: totalCost
            }

            buyer.stocks.push(newStock)

        }
        buyer.balance -= totalCost;
        let succesfull = await buyer.save();
        if (!succesfull) {
            return res.status(400).json({ message: "Error Occured in Updating User Stocks" });
        }
        return res.status(200).json({ message: "Successfully Stock Bought" })

    }
    catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}
  

export const userPortfolio = async (req, res) => {
    try {
        console.log("this is",req.user);
        let user = await User.findById(req.user);
        if (!user) return res.status(404).json({ message: "User Not Found" });
        const responseAll = await rest.getGroupedStocksAggregates("2025-08-28");
        let allStocks = user.stocks;
        let totalInvestment = user.stocks.reduce((sum, stock) => { sum + stock.totalInvested }, 0)
        let stockNames = allStocks.map(stocks => stocks.T)
        let currentValueStocks = responseAll.results.filter(stock => stockNames.includes(stock.T)).reduce((sum, cur) => sum + cur, 0)
        let change=currentValueStocks-totalInvestment;
        let profitPerc=(change/totalInvestment)*100||0;
        let name=user.username;
        console.log({
            stocks: allStocks, balance: user.balance,
            totalInvested: totalInvestment,
            currentValue: currentValueStocks,
            totalProfit:profitPerc,
            change:change,
            name:name,

        })
        res.status(200).json({
            stocks: allStocks, balance: user.balance,
            totalInvested: totalInvestment,
            currentValue: currentValueStocks,
            totalProfit:profitPerc,
            change:change,
            name:name,

        })


    }
    catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}

export const holdings=async(req,res)=>{
   try{
      let user=await User.findById(req.user);
      if(!user) return res.status(404).json({message:"User Not Found"});
      let allStocks=user.stocks;
      const responseAll = await rest.getGroupedStocksAggregates("2025-08-28");
        if (!responseAll) return res.status(404).json({ message: "Must Be Some Date Issue " })
        let stockToSee = allStocks.map((stocks)=>{stocks.symbol})
        const response = responseAll.results.filter(stock => stockToSee.includes(stock.T));
        
        let holdingsData=[];
        for(let i=0;i<stockToSee.length;i++){
             holdingsData.push({
                symbol:allStocks[i].symbol,
                avgPrice:allStocks[i].avgBuyPrice,
                quantity:allStocks[i].quantity,
                currValue:response[i].c*quantity,
                change:currValue-avgPrice*quantity,
                isProfit: change>0? true:false

             })
        } 
        res.status(200).json(holdingsData)

        
   }
   catch(error){
    res.status(500).json({ message: error.message });
    console.log(error.message);
   }
}
//stock api
import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 86400 });
import dotenv from 'dotenv';
dotenv.config();
import { restClient } from '@polygon.io/client-js';

const rest = restClient(process.env.POLY_API_KEY,'https://api.polygon.io');


// controller to give all thse stocks on dashboard
export const AllStocksSummary=async(req,res)=>{
    try {
        const cacheKey = 'stocks-2025-08-28';
        let cachedData = cache.get(cacheKey);
        if (cachedData) {
            return res.status(200).json(cachedData);
        }
            const responseAll = await rest.getGroupedStocksAggregates("2025-08-28");
            if(!responseAll) return res.status(404).json({message:"Must Be Some Date Issue "})
           let stockToSee= ["PLTR", "GEV", "TPR", "VST", "AXON", "UAL", "JBL", "AVGO", "DASH", "NRG", "AAPL", "MSFT", "NVDA", "GOOGL", "AMZN", "META", "TSLA", "NFLX", "ORCL", "RCL", "CCL", "CRWD", "COIN", "AMD", "ANET", "WDC", "BRKB", "DIS", "JPM", "V", "MA", "JNJ", "PG", "KO", "PFE", "XOM", "CVX", "HD", "WMT", "UNH", "BAC", "INTC", "CRM", "ADBE", "PYPL", "UBER", "CEG", "APH", "HWM", "MU"]
        
            const response= responseAll.results.filter(stock => stockToSee.includes(stock.T));
            cache.set(cacheKey, response);
            if(response) return res.status(200).json(response)
          }
     catch (e) {
     console.error('ERROR AT ALLSTOCKSSUMMARY:', e);
     res.status(500).json({message:e.message});
     }
}

// controller to give all the information of a particular stock on dashboard
export const particularStock=async(req,res)=>{
    try{
        let {stockName}=req.body;
        const cacheKey = `particular-${stockName}2025-08-28`;
        let cachedData=cache.get(cacheKey);
        const cacheKey2 = `particular-${stockName}-des2025-08-28`;
        let cachedData2=cache.get(cacheKey2);
        if(cachedData && cachedData2) return res.status(200).json({data1:cachedData,data2:cachedData2})
        
        const response = await rest.getStocksOpenClose(stockName, "2025-08-28", {
            adjusted: true
        });
        const response2 = await rest.getTicker(stockName);
        cache.set(cacheKey,response);
        cache.set(cacheKey2,response2);
        return res.status(200).json({data1:response,data2:response2});

    }
    catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

// controller to give all inform of month of a stock chart creation on dashboard
export const chartMonth =async (req, res) => {
    try {
        let {stockName}=req.body;
        const cacheKey = `particular-${stockName}`;
        let cachedData=cache.get(cacheKey);
        if(cachedData) return res.status(200).json(cachedData)
      const response = await rest.getStocksAggregates(stockName, 1, "day", "2024-08-01", "2024-08-29");
      cache.set(cacheKey,response);
        return res.status(200).json(response);

   
  }
  catch(error){
    res.status(500).json({message:error.message});
    console.log(error.message);
  }
}

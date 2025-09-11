
import { createContext, useContext, useState } from 'react';
import { portfolio } from './USERAPIS/StockApi';

const TradingContext = createContext();

export const TradingProvider =  ({ children }) => {
  
    const [tradingData, setTradingData] = useState({
        name:"",
        balance: 0,
        stocks: [],
        totalInvestment: 0,
        currentValue: 0,
        totalProfit: 0,
        loading: false,
        error: "",
        change,

    });

    const loadPortfolio = async () => {

        try {
            setTradingData(prev => ({ ...prev, loading: true }))
            let res = await portfolio();
            if (res.status == 200) {
                setTradingData({
                    name:res.name,
                    balance: res.balance,
                    stocks: res.stocks,
                    totalInvestment: res.totalInvested,
                    currentValue: res.currentValue,
                    totalProfit:res.totalProfit,
                    change:res.change,
                    loading:false,
                    error:""
                })

            }

        }
        catch (error) {
            console.log(error);
            setTradingData(prev => ({
                ...prev, error: error.message, loading: false
            }))
        }
    }
    useEffect(() => {
        loadPortfolio()


    })

    return (
        <TradingContext.Provider value={{
            tradingData,
            setTradingData,
            loadPortfolio
        }}>
            {children}
        </TradingContext.Provider>
    );
};

export const useTrading = () => useContext(TradingContext);

import { createContext, useContext, useState } from 'react';

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
    const [tradingData, setTradingData] = useState({
        balance: 100000,
        stocks: [],           
        totalInvestment: 0,   
        currentValue: 0,      
        totalProfit: 0        
    });

    // Function to calculate portfolio values
    const calculatePortfolio = async () => {
        let totalInvestment = 0;
        let currentValue = 0;
        
        // Loop through user's stocks
        for (let stock of tradingData.stocks) {
            totalInvestment += stock.totalInvested;
            
            // Get current price from Polygon API
            
            currentValue += stock.quantity * currentPrice;
        }
        
        const totalProfit = currentValue - totalInvestment;
        
        // Update the notebook
        setTradingData(prev => ({
            ...prev,
            totalInvestment,
            currentValue,
            totalProfit
        }));
    };

    return (
        <TradingContext.Provider value={{ 
            tradingData, 
            setTradingData,
            calculatePortfolio 
        }}>
            {children}
        </TradingContext.Provider>
    );
};

export const useTrading = () => useContext(TradingContext);
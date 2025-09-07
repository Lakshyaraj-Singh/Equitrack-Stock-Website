
import { createContext, useContext, useState } from 'react';
import { portfolio } from './USERAPIS/StockApi';

const TradingContext = createContext();

export const TradingProvider = async({ children }) => {
    let userData=await portfolio();
    const [tradingData, setTradingData] = useState({
        balance:0,
        stocks: [],           
        totalInvestment: 0,   
        currentValue: 0,      
        totalProfit: 0        
    });

    // Function to calculate portfolio values
    let totalInvestment = 0;
    let currentValue = 0;
    const calculatePortfolio = async () => {
        
       
        for (let stock of tradingData.stocks) {
            totalInvestment += stock.totalInvested;
            
          
            
            currentValue += stock.quantity * currentPrice;
        }
        
        const totalProfit = currentValue - totalInvestment;
        
        // Update the notebook
        
            return{totalInvestment,
            currentValue,
            totalProfit}
        


    };

    useEffect(() => {
      const loadingPortfolio=()=>{
        
      }
    
      
    })
    

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
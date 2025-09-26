
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { portfolio } from './USERAPIS/StockApi';

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
   let [isLoading,setIsLoading]=useState(false)
   const hasLoadedRef = useRef(false);
   // FIXED: Use useRef instead of plain variable to persist across re-renders
   // This prevents duplicate API calls when component re-renders
   const portfolioInFlightRef = useRef(null);
  
   useEffect(() => {
     // GUARD: Prevent StrictMode double-calls in development
     if (hasLoadedRef.current) return; 
     hasLoadedRef.current = true;
     loadPortfolio();
   }, []);
    const [tradingData, setTradingData] = useState({
        name:"",
        balance: 0,
        stocks: [],
        totalInvestment: 0,
        currentValue: 0,
        totalProfit: 0,
        loading: false,
        error: "",
        change:""

    });

    const loadPortfolio = async () => {
        try { 
            // Set loading states for UI feedback
            setTradingData(prev => ({ ...prev, loading: true }));
            setIsLoading(true);
            
            // DEDUPLICATION: Only make API call if none is in progress
            // This prevents multiple concurrent requests to the same endpoint
            if (!portfolioInFlightRef.current) {
                portfolioInFlightRef.current = portfolio();
            }
            
            const res = await portfolioInFlightRef.current;
            
            // SUCCESS: Update state with portfolio data
            if (res?.status === 200) {
                setTradingData({
                    name: res.data.name,
                    balance: res.data.balance,
                    stocks: res.data.stocks,
                    totalInvestment: res.data.totalInvested,
                    currentValue: res.data.currentValue,
                    totalProfit: res.data.totalProfit,
                    change: res.data.change,
                    loading: false,
                    error: ""
                });
            } else {
                // ERROR HANDLING: Set error state for failed requests
                setTradingData(prev => ({ 
                    ...prev, 
                    loading: false, 
                    error: res?.data?.message || "Error fetching portfolio" 
                }));
            }
        } catch (error) {
            // CATCH: Handle network/parsing errors
            console.log(error);
            setTradingData(prev => ({
                ...prev, error: error.message, loading: false
            }));
        } finally {
            // CLEANUP: Always reset in-flight ref and loading state
            // This ensures proper cleanup even if errors occur
            portfolioInFlightRef.current = null;
            setIsLoading(false);
        }
    }

  
  
    

    return (
        <TradingContext.Provider value={{
            tradingData,
            setTradingData,
            loadPortfolio,
            setIsLoading,
            isLoading
        }}>
            {children}
        </TradingContext.Provider>
    );
};

export const useTrading = () => useContext(TradingContext);
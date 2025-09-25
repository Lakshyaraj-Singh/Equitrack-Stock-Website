import { useEffect, useState } from "react"
import { stockDetail, StockGraph } from "../../../USERAPIS/StockApi"
import Highcharts from 'highcharts/highstock';
import 'highcharts/modules/hollowcandlestick';
import { useTrading } from "../../../ContextApi";
import { LoginLoading } from "../../../Loading";


export const StockBox = ({ stock, oncloseModal }) => {
  let [WantChart,setWantChart]=useState(false)
  let [Graph,setGraph]=useState(null)
   let {setIsLoading,isLoading}=useTrading();
  let [stockD, setStock] = useState(null)
  let [chartData, setChartData] = useState([])
  console.log(stock)
  useEffect(() => {
    const fetchData = async () => {

      try {
        setIsLoading(true)
        const res = await stockDetail(stock);
        setStock(res.data);
        
          setGraph(res.data?.data1?.symbol)
        
        setIsLoading(false)}
      
    
      catch (error) {
        console.log(error)
       setIsLoading(false)}
    }
    
  
    fetchData();

 }, [stock]);


  useEffect(() => {
    if (chartData.length > 0) {
      setTimeout(() => {
        Highcharts.StockChart('stock-chart-container', {
          rangeSelector: {
            buttons: [{
              type: 'day',
              count: 1,
              text: '1D'
            }, {
              type: 'day',
              count: 7,
              text: '7D'
            }, {
              type: 'month',
              count: 1,
              text: '1M'
            }, {
              type: 'month',
              count: 3,
              text: '3M'
            }, {
              type: 'year',
              count: 1,
              text: '1Y'
            }, {
              type: 'all',
              text: 'All'
            }],
            selected: 2 
          },
        
         
          navigator: {
            enabled: true
          },
        
        
          scrollbar: {
            enabled: true
          },
          title: {
            text: `${stock} Stock Chart`,
            style: {
              fontSize: '16px'
            }
          },

          xAxis: {
            type: 'datetime'
          },

          yAxis: {
            title: {
              text: 'Price ($)'
            }
          },

          plotOptions: {
            hollowcandlestick: {
              color: '#ff4444',      // Red for bearish
              upColor: '#00aa44',    // Green for bullish
              lineColor: '#333333'
            }
          },

          series: [{
            type: 'hollowcandlestick',
            name: `${stock} Price`,
            data: chartData,
            tooltip: {
              valueDecimals: 2
            }
          }],

          chart: {
            height: 300
          },

          credits: {
            enabled: false
          }
        });
      }, 100);
    }
  }, [chartData, stock]);

  const seeChart=async()=>{
    setWantChart(true)
    let resGraph=await StockGraph(Graph)
    let chartJsonData= resGraph.data;
 
 
 console.log("dddddd",chartJsonData.results)
 if (chartJsonData.results) {
 const transformedData = chartJsonData.results.map(item => [
 
   item.t,    // timestamp 
   item.o,    // open 
   item.h,    // high 
   item.l,    
   item.c 
 ]);
 console.log(transformedData)
 setChartData(transformedData);

  }}
  let dividendYield = 0;
  let peRatio = "N/A";

  // 1. Calculate Dividend Yield
  if (stockD?.dividends?.results && stockD.dividends.results.length > 0) {
    const latestDividend = stockD.dividends.results[0].cash_amount; // 0.165
    const frequency = stockD.dividends.results[0].frequency; // 4 (quarterly)
    const annualDividend = latestDividend * frequency; // 0.165 * 4 = 0.66
    const currentPrice = stockD?.data1?.close; // 111.94

    if (currentPrice && annualDividend > 0) {
      dividendYield = ((annualDividend / currentPrice) * 100).toFixed(2);
      // (0.66 / 111.94) * 100 = 0.59%
    }
  }

  // 2. Calculate P/E Ratio
  if (stockD?.financial?.results && stockD.financial.results.length > 0) {
    const financialData = stockD.financial.results[0];
    const eps = financialData?.financials?.income_statement?.basic_earnings_per_share?.value;
    const currentPrice = stockD?.data1?.close;

    if (eps && currentPrice && eps > 0) {
      peRatio = (currentPrice / eps).toFixed(2);
    }
  }
  let stockDetails = stockD?.data2;
  let change = (stockD?.data1?.close - stockD?.data1?.open).toFixed(2);
  if (change) { let percentageChange = ((change / stockD?.data1?.open) * 100).toFixed(2); }
  let percentageChange = ((change / stockD?.data1?.open) * 100).toFixed(2);
  return (<>
  {isLoading&& <LoginLoading message={` Fetching Stock Details!!`}/>}
  
    <div className="w-screen overflow-auto h-screen absolute z-10 place-content-center place-items-center backdrop-blur-xs inset-0">
      <div className="bg-white w-[70%] flex flex-col p-3 mb-20 shadow-2xl shadow-black rounded ">
        <i onClick={oncloseModal} class="fa-solid fa-xmark self-end cursor-pointer"></i>
        <div className="flex justify-between  rounded-2xl  bg-blue-50 p-3 text-sm">
          <div>
            <img className="w-15 " src={`https://img.logo.dev/${stockDetails?.results.name.split(' ')[0]}.com?token=pk_fz4v-CQ2S2eNsQe1uWZjPg`} alt="" />
            <h1 className="font-bold text-xl ">{stockDetails?.results.ticker} </h1>
            <p className="">{stockDetails?.results.name}</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">${stockD?.data1?.close}</h1>
            {change > 0 ? <p >{change}$ <span className="text-green-500">+{percentageChange}%</span></p> : <p >{change}$ <span className="text-red-500">{percentageChange}%</span></p>}
          </div>
        </div>
        <p className="text-xs text-gray-500 text-justify  mt-5">{stockDetails?.results?.description.split('.').slice(0, 2).join('.') + '.'}</p>
        <div>
          <h1>Key Metrics</h1>
          <div className="gridkey grid grid-cols-3 space-y-2.5 mt-2  place-items-center  ">

            <div className="gap-3 w-30  place-items-center ">
              <p className="text-gray-500 text-xs   font-semibold">$ Market Cap</p>
              <p className="text-md font-bold">{(Number(stockDetails?.results?.market_cap) / 1000000000).toFixed(2)}B</p>
            </div>
            <div className="gap-3 w-30 place-items-center ">
              <p className="text-gray-500 text-xs  font-semibold">P/E Ratio</p>
              <p className="text-md font-bold">{peRatio}</p>
            </div>
            <div className="gap-3 w-30 place-items-center ">
              <p className="text-gray-500 text-xs  font-semibold">Diviend yield</p>
              <p className="text-md font-bold">{dividendYield}%</p>
            </div>
            <div className="gap-3 w-30 place-items-center ">
              <p className="text-gray-500 text-xs  font-semibold">Today High</p>
              <p className="text-md font-bold">${stockD?.data1?.high}</p>
            </div>
            <div className="gap-3 w-30 place-items-center ">
              <p className="text-gray-500 text-xs  font-semibold">Today Low</p>
              <p className="text-md font-bold">${stockD?.data1?.low}</p>
            </div>
            <div className="gap-3 w-30 place-items-center ">
              <p className="text-gray-500 text-xs  font-semibold">Avg Volume</p>
              <p className="text-md font-bold">{(stockD?.data1?.volume / 1000000).toFixed(1)}M</p>
            </div>

          </div>
        </div>
        <button className="btn" onClick={()=>seeChart()}>See History of Stock</button>
        {WantChart&&
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Price Chart </h2>
          <div
            id="stock-chart-container"
            className="w-full border rounded-lg"
            style={{ height: '300px' }}
          >
            {chartData.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Loading chart...</p>
              </div>
            )}
          </div>
        </div>}
      </div>
    </div>
    </>)
}
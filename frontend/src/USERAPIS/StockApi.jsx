// STOCK API

import axios from'axios';

const api=axios.create({
    baseURL:"http://localhost:3000/api/stk"
})
// get("/allStocks",stock.AllStocksSummary)
// post("/paricularStock",stock.particularStock)
// post("/StockSnapshot",stock.chartMonth)

export const dashBoardAllStock=async()=>{
    try{
       let res=await api.get(`/allStocks`);
       return res;
    }
    catch(error){
        return error.response
    }
}

export const stockDetail=async(Name)=>{
    const Data={stockName:Name}
    try{
       let res=await api.post("/particularStockDetail",Data);
       return res;
    }
    catch(error){
        return error.response;
    }
}

export const stockActions=async(Name)=>{
    const Data={stockName:Name}
    try{
       let res=await api.post("/particularStock",Data);
       return res;
    }
    catch(error){
        return error.response;
    }
}
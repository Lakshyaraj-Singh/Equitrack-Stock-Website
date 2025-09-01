import { dashBoardAllStock } from "../StockApi"

export const Getwatchlist=async()=>{
    let res=await dashBoardAllStock();
    return res;
}

// Object
// config
// : 
// {transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
// datan
// : 
// Array(49)
// 0
// : 
// T
// : 
// "META"
// c
// : 
// 751.11
// h
// : 
// 753.0548
// l
// : 
// 740.795
// n
// : 
// 187441
// o
// : 
// 744
// t
// : 
// 1756411200000
// v
// : 
// 7467955
// vw
// : 
// 750.0599
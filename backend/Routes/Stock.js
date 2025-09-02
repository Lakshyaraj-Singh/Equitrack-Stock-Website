import { Router } from "express";
const router=Router({mergeParams:true});
import * as stock from "../Controllers/Stock.js"
router.get("/allStocks",stock.AllStocksSummary)
router.post("/particularStock",stock.particularStock)
router.post("/StockSnapshot",stock.chartMonth)

export default router;
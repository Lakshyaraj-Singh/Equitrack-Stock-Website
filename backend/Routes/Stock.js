import { Router } from "express";
const router=Router({mergeParams:true});
import * as stock from "../Controllers/Stock.js"
router.get("/allStocks",stock.AllStocksSummary)
router.post("/particularStockDetail",stock.particularDetailStock)
router.post("/StockSnapshot",stock.chartMonth)
router.post("/particularStock",stock.particularStock)


//Stock Actions
router.post("/buyStock",)
export default router;
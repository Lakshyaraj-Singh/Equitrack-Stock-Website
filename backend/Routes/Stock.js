import { Router } from "express";
const router=Router({mergeParams:true});
import * as stock from "../Controllers/Stock.js"
router.get("/allStocks",stock.AllStocksSummary)
router.post("/paricularStock",stock.particularStock)
router.post("/StockSnapshot",stock.chartMonth)

export default router;
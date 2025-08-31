import { Router } from "express";
const router=Router({mergeParams:true});
import * as stock from "../Controllers/Stock.js"
router.get("/allStocks",stock.AllStocksSummary)
router.post("/paricularStock",stock.particularStock)
// .route("/StockSnapshot",stock)

export default router;
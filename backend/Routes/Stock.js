import { Router } from "express";
const router=Router({mergeParams:true});
import * as stock from "../Controllers/Stock.js"
router.get("/allStocks",stock.AllStocksSummary)
// .route("/paricularStock",stock)
// .route("/StockSnapshot",stock)

export default router;
import { Router } from "express";
const router=Router({mergeParams:true});
import * as stock from "../Controllers/Stock.js"
import { Auth } from "../Auth.js";

router.get("/allStocks",stock.AllStocksSummary)
router.post("/particularStockDetail",stock.particularDetailStock)
router.post("/StockSnapshot",stock.chartMonth)
router.post("/particularStock",stock.particularStock)


//Stock Actions
router.post("/buyStock",Auth,stock.buyingStock);
router.post("/sellStock",Auth,stock.sellingStock);
router.get("/holdings",Auth,stock.holdings);
router.get("/portfolio",Auth,stock.userPortfolio);

export default router;
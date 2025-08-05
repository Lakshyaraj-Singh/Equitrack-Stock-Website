import { Router } from "express";
import * as usercontroller from "../Controllers/User.js";
const router=Router({mergeParams:true});

router.post("/register",usercontroller.registerUser)
//router.put("/update/:id")
//router.get("/user/:id")
router.post("/login",usercontroller.loginUser)



export default router;
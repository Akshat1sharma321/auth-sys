import { Router } from "express";
import { getMe, register } from "../controller/auth.controller.js";

const authRouter  = Router() ; 

/*
POST : /api/auth/register
*/

console.log("In auth "); 

authRouter.post("/register", register) ; 

authRouter.post("/getMe" , getMe)

export default authRouter ; 
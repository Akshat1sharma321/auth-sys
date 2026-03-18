import { Router } from "express";
import { register } from "../controller/auth.controller.js";

const authRouter  = Router() ; 

/*
POST : /api/auth/register
*/

console.log("In auth "); 

authRouter.post("/register", register) ; 

export default authRouter ; 
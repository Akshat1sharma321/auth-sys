import mongoose from "mongoose";
import config from "./config.js";

const mongoConnect = async ()=>{
    await mongoose.connect(config.MONGO_URI) ; 
    console.log("Connected to DB") ; 
}

export default mongoConnect ; 
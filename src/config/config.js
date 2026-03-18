import dotenv from "dotenv" ; 

dotenv.config() ; 
if(!process.env.MONGO_URI){
    throw new Error("Uri is not provided")
    
} ; 

if(!process.env.JWT_SECRET){
    throw new Error("Jwt secret is not provided ")
}

const config = {
    MONGO_URI : process.env.MONGO_URI ,
    JWT_SECRET : process.env.JWT_SECRET
}

export default config ; 
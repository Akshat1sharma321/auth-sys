import app from "./src/app.js";
import mongoConnect from "./src/config/database.js";

mongoConnect() ;

app.listen(3000 , ()=>{
    console.log("App is listening at PORT 3000") ; 
})

export default app ; 

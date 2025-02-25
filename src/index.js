import connectDB from "./db/dbConnect.js";
import dotenv from "dotenv"
import app from "./app.js";
dotenv.config({
    path: "./.env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })

    app.on("error", (error)=>{
        console.log("ERROR: ", error);
        throw error
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed!", error);
    throw error
})
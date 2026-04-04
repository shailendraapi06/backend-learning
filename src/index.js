import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() =>{
    application.listen(process.env.PORT || {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch ((err) => {
    console.log("MONGO db connected failed !!! ",err);
})















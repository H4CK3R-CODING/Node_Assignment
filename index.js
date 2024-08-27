import express from "express";
import  dotenv from "dotenv";
import listSchools from "./controllers/listSchools.js";
import addSchool from "./controllers/addSchool.js";
// import { init } from "./db/init.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// init()

app.get("/",(req,res)=>{
    res.status(200).json({
        msg: "API Working"
    });
})

app.get("/listSchools", listSchools)

app.post("/addSchool", addSchool)

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})
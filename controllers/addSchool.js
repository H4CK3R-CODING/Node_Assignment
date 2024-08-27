import { connection } from "../db/connectDB.js";
import validateSchool from "../zod/validateSchool.js";

const addSchool = (req,res)=>{
    try {
        const {name, address,latitude,longitude} = req.body;
        const {success} = validateSchool.safeParse(req.body)
        if(success){
            let q = `INSERT INTO schools (name, address, latitude, longitude) VALUES ?`;
            let data = [
                [name, address , latitude, longitude]
            ];
            connection.query(q,[data],(error)=>{
                if(error){
                    throw error
                }
            })
            res.status(200).json({
                msg : "Successfully Added"
            })
        }
        else{
            res.status(401).json({
                msg: "Inputs are not correct!"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Error Occur!"
        })
    }
}

export default addSchool

import { connection } from "../db/connectDB.js";
import geoValidate from "../zod/geoValidate.js";

const listSchools = (req,res) =>{
        try {
            const {user_lat, user_lng} = req.body;
            const {success} = geoValidate.safeParse(req.body);
            if(success){
                let q4 = `SELECT id, name, latitude, longitude, (6371 * acos(cos(radians(${user_lat})) * cos(radians(latitude)) * cos(radians(longitude) - radians(${user_lng})) + sin(radians(${user_lat})) * sin(radians(latitude)))) AS distance FROM schools ORDER BY distance ASC;`;
                connection.query(q4,(error,result)=>{
                    if(error){
                        throw error
                    }
                    res.status(200).json(result)
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

export default listSchools

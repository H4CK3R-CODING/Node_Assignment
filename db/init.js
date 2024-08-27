import mysql from "mysql2";

export const init = ()=>{

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      })
    
    let q = `CREATE DATABASE if not exists defaultdb; `;
    connection.query(q,(error)=>{
        if(error){
            throw error
        }
    })
    let q1 = `USE defaultdb; `;
    connection.query(q1,(error)=>{
        if(error){
            throw error
        }
    })
    let q2 = `CREATE TABLE if not exists schools (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,name VARCHAR(50),address VARCHAR(100),latitude DOUBLE,longitude DOUBLE);`;
    connection.query(q2,(error)=>{
        if(error){
            throw error
        }
    })
    let q3 = `INSERT INTO schools (name, address, latitude, longitude) VALUES ?`;
    let data = [
        ["govt", "kailash" , 42342, 2323]
    ];
    connection.query(q3,[data],(error)=>{
        if(error){
            throw error
        }
    })
    let q4 = `SELECT * FROM schools;`;
    connection.query(q4,(error,result)=>{
        if(error){
            throw error
        }
        console.log(result)
    })
  };

const mysql = require("mysql");

const db = mysql.createConnection({
    database : "ecommerce-mailer",
    user : "root",
    password : "",
    host : "localhost"
})

db.connect((err)=>{
    if(err)
    {
    console.log("error in connecting database" , err)
    }else{
        console.log("connected database successfully")
    }
})

module.exports = { db }
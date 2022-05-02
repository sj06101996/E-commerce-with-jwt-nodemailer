// const = (req , res )=>{
//     return res.status().json({})
// }

const db = require("../config/db")

const = (req , res )=>{
    let queryString = "";
    db.query( queryString , (err , data  )=>{
        return res.status().json({})
    })

}

// const = (req , res )=>{
//     return res.status().json({})
// }

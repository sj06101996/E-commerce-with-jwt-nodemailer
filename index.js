//used to log any information
const winston = require("winston");
const express = require("express");
//used to log api calls
var morgan = require('morgan');
const app = express()


app.use(morgan('combined'));

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });





app.get("/user",(req , res )=>{
    return res.status(200).json({msg : "it is working"})
})
app.listen(3000,( err )=>{
    logger.info("server is runiing on port number 3000")
})
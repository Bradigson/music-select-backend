const express = require("express");
const musicSelectControllers = require("../controllers/music.select.controller");

const routers = express.Router();

routers
.get("/server",(req, res)=>{
    res.status(200).send({
        message:"Server on!"
    })
})
.post("/sendEmail",musicSelectControllers.SendMusiclistToEmail);


module.exports = routers;
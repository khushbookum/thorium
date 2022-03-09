const userModel = require("../models/userModel")
const userController=require("../controllers/userController")
const jwt = require("jsonwebtoken");

const verifyToken = async function(req,res,next){
    const token = req.body.token || req.query.token || req.header["x-auth-token"];
    if(!token){
        return res.send({status:"error",msg:"a token is require for authentidcation"});

    }
    next();
};
module.exports.verifyToken=verifyToken;
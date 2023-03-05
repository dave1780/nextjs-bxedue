const express =require("express");
const Router= express.Router();
const homePage = Router.get("/",(req,res,next)=>{
  res.end("you are on home page")
  next();
});

const aboutPage= Router.get("/about",(req,res,next)=>{
  res.end("you are on about page")
  next();
})
module.exports = Router;;
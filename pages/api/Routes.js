const express =require("express");
const Router= express.Router();
Router.get("/",(req,res,next)=>{
  res.end("you are on home page")
  next();
});

const homePage= Router.get("/about",(req,res)=>{
  res.end("you are on about page")
})
module.exports = homePage;
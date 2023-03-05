const mongoose= require("mongoose")
const userList = require("./User.Schema")

const newUser = new userList({
  UserName: req.body.UserName,
  Email: req.body.Email,
  Password: req.body.Password,
  Confirm_Password:req.body.Cpassword
}).save();

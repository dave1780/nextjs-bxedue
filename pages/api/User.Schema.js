const mongoose= require("mongoose")
const userSchema= new mongoose.Schema({
  userName:{type:String , required: true},
  email:{type:String, required: true},
  password :{type : String, required:true},
  confirm_Password:{type:String,required:true}
})

const userList = new mongoose.Model("userLists",userSchema)
module.exports= userList;
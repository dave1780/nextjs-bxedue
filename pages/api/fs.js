const fs= require("fs")
fs.writeFile("../../Data.json",[{name:"dave"}],()=>{
  console.log("we have write the data")
})
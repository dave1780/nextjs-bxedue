const fs= require("fs")
const userData={
  name: "dave537",
  number: 2
}
const user = JSON.stringify([userData])
fs.writeFile("../../Data.json",(user),()=>{
  console.log("we have write the data")
})
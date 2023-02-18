// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
import {MongoClient,ServerApiVersion} from "mongodb"
const uri = "mongo+srv://Dave150:dave90@cluster1.xu4paq5.mongodb.net/?retrywrites=true&w=majority";
const client = new MongoClient(uri,{
  usNewUrlParser:true,
  useUnifiedTopology:true
});
client.connect(err =>{
  const collection = client.db("test").collection("devices");
  client.close();
})
client.once('open',()=>{
  console.log("connected o mongodb")
})
export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  fs.readFile("../../Blogs.json",(error,data )=>{
    console.log("read is on")
  })
  res.status(200).json({name:"dave parker"})
};
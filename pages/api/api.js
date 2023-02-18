// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  fs.readFile("../../Blogs.json",(error,data )=>{
    console.log(data)
  })
  res.status(200).json({name:"dave parker"})
};
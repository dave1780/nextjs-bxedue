// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery",false);
const uri = process.env.uri;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log(' error occured');
  });

// Open Chrome DevTools to step through the debugger!

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});
const userList = new mongoose.model('UserList', userSchema);

const newUserCreation = async () => {
  try {
    const newUser = new userList({
      name: 'Dave parker',
      age: 40,
    });
  
    const result = await newUser.save();
    console.log(result)
  } catch (err) {
    console.log(err);
  }
};

// http server

const http = require("http")
const url = require("url")
const server=http.createServer((req,res)=>{
  if(req.url==='/api/about'){
    res.end("you are in about page")
  }
server.listen(3000,()=>{
  console.log("i am about")
})})

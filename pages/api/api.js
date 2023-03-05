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


const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
// const cors = require('cors');
const PORT = process.env.PORT || 4000;
// const cookieParser = require('cookie-parser');
// const timeout = require('connect-timeout');

// example of using this top-level; note the use of haltOnTimedout
// after every middleware; it will stop the request flow on a timeout
// app.use(timeout('5s'))
// app.use(haltOnTimedout)
// app.use(cookieParser())

// Add your routes here, etc.

// function haltOnTimedout (req, res, next) {
//   if (!req.timedout) next()
// }

// app.use(cors());
app.get('/',(req,res)=>{
        console.log(req.url+'test')
})
app.get('/:api',(req,res)=>{
    const api = req.params.api;
    console.log(api)
//    const msg={data : `エンドポイント${api}にリクエストが来ました。`};
//    const data = JSON.parse(api)
//    console.log(typeof data)
    res.send({apiname : api})
})


app.listen(PORT,console.log(`Server Running on port Number ${PORT} !!`));
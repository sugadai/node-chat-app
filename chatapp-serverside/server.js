const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
// const cors = require('cors');
const PORT = process.env.PORT || 4000;

// app.use(cors());
app.get('/',(req,res)=>{
        console.log('test')
})
app.get('/:api',(req,res)=>{
    const api = req.params.api;
    console.log(api)
//    const msg={data : `エンドポイント${api}にリクエストが来ました。`};
//    const data = JSON.parse(api)
//    console.log(typeof data)
    res.send({apiname : api})
})


app.listen(PORT,console.log(`Server Running on port Number ${PORT} !`));
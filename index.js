const express = require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("hii world");
})

app.listen(process.env.PORT || port,()=>{
    console.log(`listening on port ${port}`);
})
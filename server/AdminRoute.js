const express=require('express')
const db = require('./mongo')

const router=express()


router.post('/login',async (req,res)=>{
    console.log(req.body)
   let response= await db.collection('admin').findOne(req.body)
   console.log(response);
   if(response){
    res.json({status:true})
   }
   else{
    res.json({status:false})
   }
})





module.exports = router
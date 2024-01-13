const express=require('express')
const db = require('./mongo')
const { default: mongoose } = require('mongoose')
const router=express()

// Define the Property model
const Property = mongoose.model('Property', new mongoose.Schema({
  // Define your schema fields here
  Location: String,
  Price: String,
  description: String,
  file: String // Assuming 'file' is a string field; adjust as needed
}));

router.post('/login',async (req,res)=>{
    console.log(req.body)
   let response= await db.collection('user').findOne(req.body)
   console.log(response);
   if(response){
    res.json(response)
   }
   else{
    res.json({status:false})
   }
})

router.post('/property',async (req,res)=>{
 console.log(req.body);
 let response = await db.collection('property').insertOne(req.body)
 console.log(response);
 res.json({status:true})
}
)

router.get('/property',async (req,res)=>{
    let properties =await db.collection("property").find().toArray();
    res.json(properties)
    console.log(properties);
})

router.delete('/property/:id',async (req,res)=>{
    let id = new mongoose.Types.ObjectId(req.params.id)
    console.log(id);
    let response = await db.collection('property').deleteOne({_id:id})
    res.json(response)
})

router.get('/edit/:id',async (req,res)=>{
    let id=new mongoose.Types.ObjectId(req.params.id)
    console.log(id);
    let response = await db.collection('property').findOne({_id:id})
    res.json(response)
})

  router.get('/Getusers', async (req, res) => {
    try {
      const users = await db.collection('user').find().toArray();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



module.exports = router
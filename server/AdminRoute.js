const express=require('express')
const db = require('./mongo')
const { default: mongoose } = require('mongoose')
const router=express()


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

/* router.put('/property2/:id',async (req,res)=>{
    let id=new mongoose.Types.ObjectId(req.params.id)
    let response=await db.collection('property').updateOne({_id:id},{$set:req.body})
    res.json(response)
}) */



router.put('/edit/:id', async (req, res) => {
    try {
      let id = new mongoose.Types.ObjectId(req.params.id)
  
      // Update the property using Mongoose model and updateOne
      let response = await Property.updateOne({ _id: id }, { $set: req.body });
  
      // Check if the property was found and updated
      if (response.nModified === 0) {
        return res.status(404).json({ error: 'Property not found or not modified' });
      }

      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/getusers/:id',async (req,res)=>{
    db.find()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})



module.exports = router
const express=require('express')
const db = require('./mongo')
const { default: mongoose } = require('mongoose')
const router=express()
const jwt=require('jsonwebtoken')

const Property = mongoose.model('Property', new mongoose.Schema({
  Location: String,
  Price: String,
  description: String,
  file: String 
}));



const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) {
    return res.status(403).json({ message: 'Token is not provided' });
  }
  const token = authHeader.split(' ')[1];

  jwt.verify(token, 'abc', (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: '  : Invalid token' });
    }
    
    req.decoded = decoded;
    if(req.decoded.username!='admin'){
      console.log('df');
      return res.status(500).json({ message: 'Invalid token' });
    }
    console.log(req.decoded, 'asd');
    next()
   });
};

router.post('/login',async (req,res)=>{
    console.log(req.body)
   let response= await db.collection('user').findOne(req.body)
   console.log(response);
   if(response){
    let token=jwt.sign({id:response._id,username:response.username},'abc')
    console.log(token);
    let userid=response._id
    console.log(userid);
    res.json({response,token,userid})
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

router.get('/usercount',verifyToken,async (req,res)=>{
  let count =await db.collection("user").countDocuments();
  res.json(count)
  console.log(count);
})


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

  router.get('/Getusers',verifyToken, async (req, res) => {
    try {   
      const users = await db.collection('user').find().toArray();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

router.put('/edit/:id', async (req,res) => {
  let id = new mongoose.Types.ObjectId(req.params.id)
  let response = await db.collection('property').updateOne({_id:id},{$set:req.body})
  res.json(response)
})

router.post('/message',async (req,res)=>{
   
    const data =JSON.parse(req.body.data)
    let message=await db.collection("message").insertOne(data)
    res.json({message:"Message sent"})
  })

router.get('/GetMessage',async (req,res)=>{
  let response=await db.collection("message").find().toArray()
  res.json(response)
})

router.delete('/message/:id',async (req,res)=> {
  let id = new mongoose.Types.ObjectId(req.params.id)
  let response = await db.collection('message').deleteOne({_id:id})
  res.json(response)

})
  
module.exports = router
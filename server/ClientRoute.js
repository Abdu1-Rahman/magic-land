const express = require('express');
const router = express.Router();
const db = require('./mongo');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose')


router.get('/fetch', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'abc');
        let users = await db.collection('user').find().toArray();
        console.log(users);
        res.json({ success: true, users });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
});


router.post('/add',(req, res) => {
    console.log(req.body);
    try{

        db.collection('user').insertOne(req.body)
        res.json({status:true})
    }catch(err){
        console.log(err); 
    }

});

router.get('/Getproperty',async (req,res) => {
    try{
    let propertys =await db.collection('property').find().toArray()
    
    res.json({success: true, propertys})
}catch (error) {
    console.log("Error in displaying properties",error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
}
})

 router.get('/Getproperty/:id',async (req,res)=>{
    console.log(req.params)
    let id = new mongoose.Types.ObjectId(req.params.id)
    console.log(id)
    try {
        let propertys = await db.collection('property').findOne({_id : id })
        res.json(propertys);
    } catch (error) {
        console.log(error);
    }
    
   
 })





module.exports = router;

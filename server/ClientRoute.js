const express = require('express');
const router = express.Router();
const db = require('./mongo');


router.get('/fetch', async (req, res) => {
    try {
        let users = await db.collection('user').find().toArray();
        console.log(users);

        res.json({ success: true, users });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
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



module.exports = router;

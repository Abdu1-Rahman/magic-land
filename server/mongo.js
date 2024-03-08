const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/REMS')
 .then(()=> console.log('connected'));
let db=mongoose.connection


module.exports=db
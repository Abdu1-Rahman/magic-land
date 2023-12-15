const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/REMS')
 .then(()=> console.log('connected'));
let db=mongoose.connection


module.exports=db
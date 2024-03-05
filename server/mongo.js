const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abdurahman:abdu1234@cluster0.ui2lqxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 .then(()=> console.log('connected'));
let db=mongoose.connection


module.exports=db
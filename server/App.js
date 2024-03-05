const express=require ('express')
const app=express()
const cookieParser = require('cookie-parser')
app.use(express.json({limit: '50mb'}))
app.use(cookieParser())

const port=5000
var cors =  require('cors');
app.use(express.json())
app.use(cors())


const adminrouter=require('./AdminRoute')
const clientrouter=require('./ClientRoute')


app.use('/admin',adminrouter)
app.use('/',clientrouter)


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});


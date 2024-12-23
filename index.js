const express=require("express")
const dotEnv=require('dotenv');
const app=express();
const bodyParser=require('body-parser')
const firmRoutes=require('./routes/firmRoutes')
const vendorRoutes=require('./routes/vendorRoutes')
const mongoose=require('mongoose')
const productRoutes=require('./routes/productRoutes')
const PORT=4000
dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected successfully")

})
.catch(error=>console.log(error)   )
app.use(bodyParser.json())
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes)
app.use('/product',productRoutes)
app.listen(PORT,()=>{
    console.log("Hello server started")
})

app.use('/home',(request,response)=>{
response.send("Hello");
})
const express =require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoutes=require("./Router/UserRouter")
const MessageRoutes=require("./Router/MessageRouter")
const bodyParser = require('body-parser');
const app=express()
app.use(cors({credentials:true,origin:["https://chatapp-5kdq.onrender.com"]}))
//mongoose verson 6.10.1    https://chatapp-5kdq.onrender.com
app.use(bodyParser.json());
app.use(express.json());

app.use("/user",userRoutes)
app.use("/msg",MessageRoutes)
const MONGO_URL="mongodb+srv://sameerulhakofficial:giM6IyrtgGxv5wLl@bookstore.dxckmpm.mongodb.net/chatapp?retryWrites=true&w=majority"
const PORT = 5000;

app.get("/",(req,res)=>{
    res.json({
        message:"hello bro"
    })
})


mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
}).catch((err) => {
    console.error(`MongoDB connection error: ${err}`);
});





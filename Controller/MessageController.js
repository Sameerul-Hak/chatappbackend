const Message=require("../Model/MessageModel")

exports.getmessage=(req,res)=>{
    Message.find().then((msg)=>{
        res.status(201).json({msg})
    }).catch((e)=>{
        res.status(401).json({message:"error vanthuruchu"})
    })
}
exports.postmessage=(req,res)=>{
    const { name, message } = req.body;
    Message.create({
        name,message,"createdAt":new Date()
    }).then(()=>{
        res.json({
            message:"sucess"
        })
    }).catch((e)=>{
        res.json({
            error:e
        })
    })
}
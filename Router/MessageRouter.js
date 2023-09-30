const express=require("express");
const { getmessage, postmessage } = require("../Controller/MessageController");
const router=express.Router();

router.get("/message",getmessage)
router.post("/message",postmessage)


module.exports=router;
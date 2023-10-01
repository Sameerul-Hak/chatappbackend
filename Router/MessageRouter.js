const express=require("express");
const { getmessage, postmessage,deletemessage } = require("../Controller/MessageController");
const router=express.Router();

router.get("/message",getmessage)
router.post("/message",postmessage)
router.post("/messagedel",deletemessage)


module.exports=router;
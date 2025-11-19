
const express = require("express");
const app = express();
app.use(express.json());

const token = process.env.WA_TOKEN;
const phoneId = process.env.PHONE_ID;

app.get("/webhook", (req,res)=>{
  if(req.query["hub.verify_token"] === process.env.VERIFY_TOKEN){
    return res.send(req.query["hub.challenge"]);
  }
  res.send("Invalid verify token");
});

app.post("/webhook",(req,res)=>{
  console.log("Incoming:", JSON.stringify(req.body,null,2));
  res.sendStatus(200);
});

app.get("/",(req,res)=>res.send("Kikik bot running"));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Bot running on "+port));

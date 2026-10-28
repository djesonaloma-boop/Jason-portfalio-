import express from "express";
import cors from "cors";
import { db } from "./firebase.js";
import { ref, push, get } from "firebase/database";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req,res)=>res.json({ok:true, service:"JASON BUSINESS"}));

app.post("/api/commande", async (req,res)=>{
  try{
    const {nom, service, prix} = req.body;
    const r = ref(db, "commandes");
    await push(r, {nom, service, prix, date:Date.now(), status:"nouveau"});
    res.json({ok:true});
  }catch(e){ res.status(500).json({error:e.message}); }
});

app.get("/api/commandes", async (req,res)=>{
  const snap = await get(ref(db, "commandes"));
  res.json(snap.val()||{});
});
export default app;

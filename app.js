import express from "express";
import collection from "./models/register.js";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", cors(), (req, res) => {});

// app.get("/",(req,res)=>{
//   res.send({"it is connected"});

// });
app.post("/signup", (req, res) => {
  collection
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    console.log("mongo db connected");
  })
  .catch(() => {
    console.log("error occured");
  });
app.listen(3001, () => {
  console.log("port connected");
});

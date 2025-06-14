import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrlSchema from "./src/models/shorturl.model.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create",(req,res)=>{
    const {url}=req.body;
    const shortUrl = nanoid(7);
    const newUrl = new shortUrlSchema({
        fullurl: url,
        shorturl: shortUrl,
        clicks: 0,
    });
    newUrl.save();
    res.send(shortUrl);
})

app.listen(8000, () => {
    connectDB();
  console.log("Server is running on port 8000");
});

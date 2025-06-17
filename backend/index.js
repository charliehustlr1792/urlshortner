import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrlRoute from "./src/routes/shorturl.route.js";
import redirectFromShortUrl from "./src/controllers/shorturl.controller.js";
import errorHandler from "./src/utils/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create",shortUrlRoute);
app.get('/:id', redirectFromShortUrl);

app.use(errorHandler);


app.listen(8000, () => {
    connectDB();
  console.log("Server is running on port 8000");
});

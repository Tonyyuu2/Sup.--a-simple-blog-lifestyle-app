import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/PostsRoute.js";

const app = express();
mongoose.set('strictQuery', false)

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
dotenv.config();

app.use("/posts", router);

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Listening on ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error));

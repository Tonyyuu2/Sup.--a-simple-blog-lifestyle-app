import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

app.use("/posts", PostsRoute);

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Listening on ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error));

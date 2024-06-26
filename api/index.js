import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth-route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/user", authRoute);

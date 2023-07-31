const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRouter = require("./Routes/users");
const userAuth = require("./Routes/Auth");
const postRouter = require("./Routes/post");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRouter);
app.use("/auth", userAuth);
app.use("/posts", postRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

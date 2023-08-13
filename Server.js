const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

const url = "mongodb+srv://todo:todo123todo@todo.gjm0lrv.mongodb.net/todo";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Connected to Mongo DB");
  } catch (err) {
    console.log("Error while connect to mongo DB" + err);
    process.exit();
  }
};
connectDB();

app.use("/", routes);


app.listen(5000)

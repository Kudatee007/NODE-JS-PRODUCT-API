require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 60000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const productRouter = require('./routes/productRoutes')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_APISECRET,
});

// MIDDLEWARE
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use('/api/v1/products', productRouter)

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB);
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}......`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

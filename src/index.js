import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    try {
      // If no errors, listen to the app
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
      });
    } catch (error) {
      // Checking for Errors before Starting the App
      app.on("error", (error) => {
        console.log("Error: ", error);
        throw error;
      });
    }
  })
  .catch((err) => {
    console.log(`DB Connection Failed: ${err}`);
  });

/*
1. This is approach number 1, but we don't want our index.js to get polluted.


import express from "express";
// Using IIFEs of JavaScript

(async () => {
  try {
    // Connecting Database
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // Check whether the DB has connected but the App hasn't started.
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    // If App has been started, listen to the port
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();


*/

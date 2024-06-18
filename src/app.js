import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Configuring Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// Limit the size or Response/Request Data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// Configuring "public" folder to save static files.
app.use(express.static("public"))
// Perform CRUD Operations on USER Cookies
app.use(cookieParser());


export default app;

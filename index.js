import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import faqRoutes from './src/routes/faq.route.js'

dotenv.config();
const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api/faqs", faqRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

import express from "express";
import { getFAQs, createFAQ, getFAQsByLanguage } from "../controllers/faq.controller.js";

const router = express.Router();

router.get("/", getFAQs);
router.post("/", createFAQ);
router.get("/", getFAQsByLanguage);


export default router;

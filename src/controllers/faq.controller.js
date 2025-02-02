import FAQ from "../models/faq.model.js"; 
import redisClient from "../config/cache.js"; 
import translate from "../services/translation.service.js"; 

// get all faqs
export const getFAQs = async (req, res) => {
    try {
        // get language from query or default to "en"
        const lang = req.query.lang || "en"; 
        const cacheKey = `faqs:${lang}`; 

        // check if data is in cache
        const cachedData = await redisClient.get(cacheKey); 
        if (cachedData) {
            return res.json(JSON.parse(cachedData)); 
        }

        // fetch faqs from DB
        let faqs = await FAQ.find(); 
        if (lang !== "en") {
            // translate question if language is not "en"
            faqs = faqs.map(faq => ({
                question: faq.getTranslation(lang),
                answer: faq.answer,
            })); 
        }

        // store result in cache for 1 hour
        await redisClient.set(cacheKey, JSON.stringify(faqs), "EX", 3600); 
        res.json(faqs); 
    } catch (err) {
        // handle server error
        res.status(500).json({ message: "Server Error" }); 
    }
};

// create a new FAQ
export const createFAQ = async (req, res) => {
    try {
        // get question and answer from request body
        const { question, answer } = req.body; 
        const translations = {
            hi: await translate(question, "hi"), 
            bn: await translate(question, "bn"), 
        };

        // create and save new FAQ
        const newFAQ = new FAQ({ question, answer, translations }); 
        await newFAQ.save(); 
        res.status(201).json(newFAQ); 
    } catch (err) {
        // handle error creating FAQ
        res.status(500).json({ message: "Error creating FAQ" }); 
    }
};

// get FAQs by language
export const getFAQsByLanguage = async (req, res) => {
    const { lang } = req.query;

    try {
        const cacheKey = lang ? `faqs_${lang}` : "faqs_default";
        const cachedFAQs = await redisClient.get(cacheKey);

        if (cachedFAQs) {
            console.log("🔄 Serving from cache");
            return res.json(JSON.parse(cachedFAQs));
        }

        const faqs = await FAQ.find();

        const translatedFAQs = lang
            ? faqs.map(faq => ({
                _id: faq._id,
                question: faq.question,
                answer: faq.translations[lang] || faq.answer
            }))
            : faqs;

        await redisClient.set(cacheKey, JSON.stringify(translatedFAQs), { EX: 3600 });

        res.json(translatedFAQs);
    } catch (error) {
        res.status(500).json({ error: "Error fetching FAQs" });
    }
};

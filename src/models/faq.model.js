import mongoose from "mongoose";

// define faq schema
const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    translations: {
        hi: {
            type: String
        },
        bn: {
            type: String
        }
    }
});

// method to get translation
faqSchema.methods.getTranslation = function (lang) {
    return this.translations[lang] || this.question;
};


const FAQ = mongoose.model("FAQ", faqSchema);

export default FAQ;

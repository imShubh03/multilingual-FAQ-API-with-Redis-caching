import translate from "google-translate-api-next";

const translateText = async (text, lang) => {
    try {
        const res = await translate(text, { to: lang });
        return res.text;
    } catch (error) {
        console.error("Translation Error:", error);
        return text;
    }
};

export default translateText;

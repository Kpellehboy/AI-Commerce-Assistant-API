require('dotenv').config();
const OpenAI = require('openai');

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

console.log("API KEY:", process.env.OPENAI_API_KEY);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getAIResponse = async (message) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message }
      ]
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error(error);
    console.error("FULL ERROR:", error);
    return "AI error occurred";
  }
};

module.exports = getAIResponse;
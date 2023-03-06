import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
    const { text = 'hello world' } = req.query;
    const result = await api.sendMessage(text)
    res.status(200).json({ result: result.text });
}

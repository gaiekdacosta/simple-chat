import dotenv from 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Request, Response } from 'express'; // Importe tanto Request quanto Response

dotenv;

async function GeminiChat(req: Request, res: Response) { 
    try {
        const genAI = new GoogleGenerativeAI(`${process.env.API_KEY}`);

        const { prompt } = req.body;

        const preset: string = "de forma resumida e em português, responda essa pergunta: "

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(preset + prompt);
        const response = result.response;
        const geminiResponse = await response.text();
        
        return res.json({ geminiResponse: geminiResponse });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error executing Gemini chat');
    }
}

export default GeminiChat;

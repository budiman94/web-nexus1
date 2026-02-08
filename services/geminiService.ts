
import { GoogleGenAI } from "@google/genai";
import { COMPANY_DATA } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `
          You are "Nexus AI", the digital assistant for Nexus Digital Solutions. 
          Use the following company information to answer user queries: ${COMPANY_DATA}.
          Your personality is professional, innovative, and helpful. 
          Keep your answers concise and formatted in markdown if needed.
          If you don't know something about the company, politely say you'll connect them with a human representative.
        `,
      },
    });
  }

  async *sendMessageStream(message: string) {
    try {
      const result = await this.chat.sendMessageStream({ message });
      for await (const chunk of result) {
        yield chunk.text;
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      yield "I'm having trouble connecting right now. Please try again later!";
    }
  }

  async sendMessage(message: string) {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Error connecting to Nexus core systems.";
    }
  }
}

export const geminiService = new GeminiService();

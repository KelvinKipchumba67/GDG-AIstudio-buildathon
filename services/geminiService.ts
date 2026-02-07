
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getNeighborhoodInsights = async (town: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a brief, helpful insight for someone looking to rent a house in ${town}, Kenya. Mention the general vibe, common amenities, and one tip for house hunters. Keep it under 100 words.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return `Looking for a home in ${town}? It's a great choice for modern urban living in Kenya.`;
  }
};

export const getAIAssistantResponse = async (query: string, chatHistory: any[]) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are a helpful Kenyan real estate assistant named KeBot. You help users find houses, understand rental laws in Kenya, and give advice on neighborhoods like Nairobi, Chuka, and Juja. Be polite and professional.',
    },
  });

  try {
    const response = await chat.sendMessage({ message: query });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting right now. Please try again later!";
  }
};

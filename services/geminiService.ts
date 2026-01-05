
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { BIZSENSE_KNOWLEDGE } from "../config/ai-knowledge";

export interface ChatResponse {
  text: string;
  suggestions: string[];
}

export const sendMessageToGemini = async (message: string, language: 'en' | 'si' = 'en'): Promise<ChatResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: message,
      config: {
        systemInstruction: `You are the Bizsense Experts AI. 
        You represent BizSense Experts, founded by a senior financial professional with 20+ years of experience.
        
        KNOWLEDGE BASE:
        ${JSON.stringify(BIZSENSE_KNOWLEDGE)}

        RULES:
        1. BE POWERFUL: Provide high-level strategic business advice. 
        2. SPECIALTY: You also specialize in ROI-driven Digital Marketing. Focus on conversions, not just impressions.
        3. BE FLEXIBLE: Understand user requests even with typos or broken language. 
        4. MULTILINGUAL: Current Language: ${language === 'si' ? 'Sinhala' : 'English'}.
        5. SINHALA QUALITY: Use sophisticated, professional Sinhala.
        
        OUTPUT FORMAT: Must be JSON.
        {
          "text": "Detailed strategic response",
          "suggestions": ["Strategic follow-up 1", "Strategic follow-up 2"]
        }`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING },
            suggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["text", "suggestions"],
        },
      },
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("AI Error:", error);
    return {
      text: language === 'si' ? "දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න." : "An error occurred. Please try again.",
      suggestions: ["Try Again", "Contact Support"]
    };
  }
};

export const generateSpeech = async (text: string, language: 'en' | 'si' = 'en'): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Read this ${language === 'si' ? 'in professional Sinhala' : 'professionally'}: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: language === 'si' ? 'Kore' : 'Zephyr' },
          },
        },
      },
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};

export function decodeBase64Audio(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

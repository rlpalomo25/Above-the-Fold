import { GoogleGenAI } from "@google/genai";
import { Scene } from "../types";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const generateSceneImages = async (
  apiKey: string,
  scenes: Scene[],
  onImageGenerated: (word: string, base64: string) => void
): Promise<void> => {
  const ai = new GoogleGenAI({ apiKey });

  for (const scene of scenes) {
    let attempts = 0;
    const maxAttempts = 3;
    let success = false;

    while (attempts < maxAttempts && !success) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: `Generate a photorealistic, high-quality, dramatic image of: ${scene.description}. The image should be suitable for a website background, dark and moody atmosphere.`,
              },
            ],
          },
          config: {
              imageConfig: {
                  aspectRatio: "16:9"
              }
          }
        });

        // Extract image
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            const imageUrl = `data:image/png;base64,${base64Data}`;
            onImageGenerated(scene.word, imageUrl);
          }
        }
        success = true;
      } catch (error: any) {
        // Check for Rate Limit (429) or Quota Exceeded
        if (error.status === 429 || error.code === 429 || error.message?.includes('429') || error.message?.includes('quota')) {
          attempts++;
          const waitTime = 10000 * attempts; // Exponential backoff: 10s, 20s, 30s
          console.warn(`Rate limit hit for ${scene.word}. Retrying in ${waitTime/1000}s... (Attempt ${attempts}/${maxAttempts})`);
          await delay(waitTime);
        } else {
          console.error(`Failed to generate image for ${scene.word}:`, error);
          break; // Don't retry other errors
        }
      }
    }
    
    // Standard delay between successful requests to be polite to the API
    if (success) {
        await delay(5000); 
    }
  }
};
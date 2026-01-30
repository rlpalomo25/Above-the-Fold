import { GoogleGenAI } from "@google/genai";
import { Scene } from "../types";

export const generateSceneImages = async (
  apiKey: string,
  scenes: Scene[],
  onImageGenerated: (word: string, base64: string) => void
): Promise<void> => {
  const ai = new GoogleGenAI({ apiKey });

  // We process these sequentially to avoid hitting rate limits too hard, 
  // or parallel if the tier allows. We'll do a focused sequential approach for reliability.
  for (const scene of scenes) {
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
    } catch (error) {
      console.error(`Failed to generate image for ${scene.word}:`, error);
    }
  }
};

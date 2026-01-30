export interface Scene {
  word: string;
  description: string; // Used for prompt generation
  fallbackImage: string;
}

export interface GeneratedImagesMap {
  [key: string]: string; // word -> base64 image
}

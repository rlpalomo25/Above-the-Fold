import React from 'react';
import { Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';

interface ImageGeneratorModalProps {
  onGenerate: (apiKey: string) => void;
  isGenerating: boolean;
  hasImages: boolean;
}

export const ImageGeneratorModal: React.FC<ImageGeneratorModalProps> = ({ onGenerate, isGenerating, hasImages }) => {
  return (
    <button
      onClick={() => !isGenerating && !hasImages && onGenerate("")}
      className={`px-6 py-4 rounded-full font-semibold transition-all flex items-center gap-2 border select-none ${
        hasImages 
          ? "bg-green-600/20 border-green-500 text-green-300 cursor-default"
          : isGenerating 
            ? "bg-blue-600/20 border-blue-500 text-blue-300 cursor-wait"
            : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 cursor-pointer hover:border-white/40"
      }`}
    >
      {isGenerating ? <Loader2 className="animate-spin" /> : hasImages ? <ImageIcon /> : <Sparkles />}
      {isGenerating ? "Generating Live Scenes..." : hasImages ? "Live Scenes Active" : "Activate Live Scenes"}
    </button>
  );
};
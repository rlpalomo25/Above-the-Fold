import React, { useState } from 'react';
import { Sparkles, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGeneratorModalProps {
  onGenerate: (apiKey: string) => void;
  isGenerating: boolean;
  hasImages: boolean;
}

export const ImageGeneratorModal: React.FC<ImageGeneratorModalProps> = ({ onGenerate, isGenerating, hasImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onGenerate(apiKey);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        disabled={isGenerating}
        className={`px-6 py-4 rounded-full font-semibold transition-all flex items-center gap-2 border ${
          hasImages 
            ? "bg-green-600/20 border-green-500 text-green-300 hover:bg-green-600/30"
            : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
        }`}
      >
        {isGenerating ? <Loader2 className="animate-spin" /> : hasImages ? <ImageIcon /> : <Sparkles />}
        {isGenerating ? "Generating Scenes..." : hasImages ? "Scenes Active" : "Enable Live Scenes"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full p-6 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles size={24} />
                  <h3 className="text-xl font-bold text-white">Enhance The Story</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                This demo uses placeholder images by default. To experience the full storytelling effect with 
                <strong> real-time generated images</strong> of clogs, leaks, and rot, please provide a Google Gemini API Key.
                <br /><br />
                <span className="text-xs text-gray-500">The key is used only for this session and not stored.</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Gemini API Key</label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 px-4 rounded-lg font-medium text-gray-400 hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!apiKey}
                    className="flex-1 py-3 px-4 bg-[#bb6622] hover:bg-[#a0551c] text-white rounded-lg font-bold shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Generate Magic
                  </button>
                </div>
              </form>
              <div className="mt-4 text-center">
                 <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">Get an API key here</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

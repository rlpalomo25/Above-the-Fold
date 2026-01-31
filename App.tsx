import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { TheProblem } from './components/TheProblem';
import { HomeownerHero } from './components/HomeownerHero';
import { AegisSystem } from './components/AegisSystem';
import { ComparisonTable } from './components/ComparisonTable';
import { HomeownerKnowledge } from './components/HomeownerKnowledge';
import { Scene, GeneratedImagesMap } from './types';
import { generateSceneImages } from './services/gemini';

// Initial scenes with placeholders
const SCENES: Scene[] = [
  {
    word: "Clogs",
    description: "A close up photo of a clogged rain gutter filled with wet autumn leaves and muddy debris, photorealistic, gross",
    fallbackImage: "https://picsum.photos/seed/clogs/1920/1080?grayscale" 
  },
  {
    word: "Overflow",
    description: "Heavy rain water overflowing from a house gutter, splashing down violently, storm weather, photorealistic, dark",
    fallbackImage: "https://picsum.photos/seed/rain/1920/1080?grayscale"
  },
  {
    word: "Leaks",
    description: "Water leaking steadily from a crack in a white gutter joint, dripping water against brick wall, photorealistic, macro",
    fallbackImage: "https://picsum.photos/seed/water/1920/1080?grayscale"
  },
  {
    word: "Rot",
    description: "Rotten wooden roof fascia board, water damage, black mold, decaying wood on a house roofline, photorealistic, detailed",
    fallbackImage: "https://picsum.photos/seed/wood/1920/1080?grayscale"
  },
  {
    word: "Moss",
    description: "Green thick fuzzy moss growing heavily inside a rain gutter on a roof, damp atmosphere, photorealistic",
    fallbackImage: "https://picsum.photos/seed/moss/1920/1080?grayscale"
  }
];

const API_KEY = "AIzaSyD4lSw3I0f5XuIqNmGFcWbq9Vhko_qKtRE";

const App: React.FC = () => {
  const [generatedImages, setGeneratedImages] = useState<GeneratedImagesMap>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const hasStartedGeneration = useRef(false);

  const handleGenerateImages = async (apiKey: string) => {
    setIsGenerating(true);
    try {
      await generateSceneImages(apiKey, SCENES, (word, base64) => {
        setGeneratedImages(prev => ({ ...prev, [word]: base64 }));
      });
    } catch (e) {
      console.error("Generation sequence error", e);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    // Prevent double-firing in StrictMode
    if (hasStartedGeneration.current) return;
    hasStartedGeneration.current = true;

    // Automatically trigger image generation on mount
    // handleGenerateImages(API_KEY); 
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        scenes={SCENES} 
        generatedImages={generatedImages} 
        onGenerate={() => handleGenerateImages(API_KEY)} 
        isGenerating={isGenerating}
      />
      <TrustBar />
      <TheProblem />
      <HomeownerHero />
      <AegisSystem />
      <ComparisonTable />
      <HomeownerKnowledge />
      
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 relative z-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} MasterShield. All rights reserved.</p>
          <p className="text-xs mt-2">MasterShield© and AEGIS 5X™ are registered trademarks.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
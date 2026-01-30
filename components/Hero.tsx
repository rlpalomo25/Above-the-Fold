import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene, GeneratedImagesMap } from '../types';
import { ImageGeneratorModal } from './ImageGeneratorModal';
import { ArrowRight, ChevronDown, PlayCircle } from 'lucide-react';

interface HeroProps {
  scenes: Scene[];
  generatedImages: GeneratedImagesMap;
  onGenerate: (apiKey: string) => void;
  isGenerating: boolean;
}

export const Hero: React.FC<HeroProps> = ({ scenes, generatedImages, onGenerate, isGenerating }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scenes.length);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(timer);
  }, [scenes.length]);

  const currentScene = scenes[currentIndex];
  // Prefer generated image, fallback to placeholder
  const currentImage = generatedImages[currentScene.word] || currentScene.fallbackImage;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900 text-white flex items-center justify-center">
      {/* Background Layer */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentScene.word}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for readability */}
          <img
            src={currentImage}
            alt={currentScene.word}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Headline and Rotating Words */}
          <div className="text-left">
             <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-widest text-blue-400 mb-2 md:mb-6">
                The Problem Starts Above
              </h2>
              
              <div className="h-32 md:h-48 flex items-center justify-start overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentScene.word}
                    initial={{ y: 50, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -50, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-black uppercase text-[#bb6622] text-shadow-lg leading-none"
                  >
                    {currentScene.word}
                    <span className="text-blue-500">.</span>
                  </motion.h1>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative and CTA */}
          <div className="text-left">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-3xl font-light text-gray-200 mb-8 leading-relaxed">
                It Doesn’t Start in Your Gutter… It Begins at the <strong className="text-white font-bold border-b-2 border-blue-500">Roofline</strong>.
              </p>

              <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl mb-10">
                 <p className="text-md md:text-lg leading-relaxed text-gray-100">
                   Only <strong className="text-blue-400">MasterShield©</strong> with <strong className="text-blue-400">AEGIS 5X™</strong> stops destruction at the source, pulling in rain, sweeping away debris, sealing your roof edge, and preventing mold before nature damages what your home is built on.
                 </p>
              </div>
              
              <div className="flex flex-col gap-4 items-start">
                <button className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 group text-center">
                  See How the 5 Guardians Protect Your Home
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <button className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3">
                      <PlayCircle className="w-6 h-6" />
                      Watch the 60-Second Rain Test
                    </button>

                    <div className="flex justify-center sm:justify-start">
                       <ImageGeneratorModal onGenerate={onGenerate} isGenerating={isGenerating} hasImages={Object.keys(generatedImages).length > 0} />
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

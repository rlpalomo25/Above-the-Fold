import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Quote, ShieldCheck, Hammer, TrendingUp, Sprout, UserCheck, Award } from 'lucide-react';

export const HomeownerKnowledge: React.FC = () => {
  const cards = [
    {
      title: "Five Guardians, One Guard",
      text: "MasterShield integrates five guardian technologies. Each Guardian defends against a specific failure point: rain overload, moss and algae growth, debris buildup, roof shingle damage, and clogged troughs.",
      icon: ShieldCheck
    },
    {
      title: "All-Metal Construction (No Plastic, Ever)",
      text: "Other brands cut corners with thin vinyl or plastic frames destined for a land fill. MasterShield is made from copper, stainless and aluminum only, engineered for durability and sustainability.",
      icon: Hammer
    },
    {
      title: "Pitched to Match Your Roof",
      text: "Flat or curved guards create debris shelves. Only PitchPerfect™ ensures water flows without relying on gravity, reducing buildup and overflow.",
      icon: TrendingUp
    },
    {
      title: "Moss & Growth Defense That Actually Works",
      text: "CopperCare™ infuses copper into key locations in its micromesh filter, preventing the moss, oils, and microbial buildup that destroys other guards.",
      icon: Sprout
    },
    {
      title: "Installed by Certified Local Experts",
      text: "MasterShield isn’t sold in big-box stores. Every install is done by trained pros, custom-fit to your home, with local, fast service, not national call centers.",
      icon: UserCheck
    },
    {
      title: "Lifetime Warranty That Actually Means Lifetime",
      text: "We’ve logged fewer than 1 in 10,000 warranty claims, and we back every install with a fully transferable, no-fine-print guarantee. No runaround. No franchise drama.",
      icon: Award
    }
  ];

  const quote = "Most people only realize their guard failed well after the damage is done! Out of sight, problems build until it’s too late. With MasterShield, you’ll know it's working, storm after storm, year after year because our gutter guards are designed to stop failure from the start.";

  // Create a duplicated list for infinite seamless scrolling
  const carouselItems = [...cards, { isQuote: true, text: quote }, ...cards, { isQuote: true, text: quote }];

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Measure content width for wrapping
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // The content is duplicated, so the wrap point is half the total scroll width
        setContentWidth(containerRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Auto-scroll animation loop
  useAnimationFrame((t, delta) => {
    if (!isHovered && !isDragging) {
      // Adjust speed here (higher = faster)
      const moveBy = 0.5 * (delta / 16); 
      x.set(x.get() - moveBy);
    }
  });

  // Handle infinite wrapping
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (contentWidth > 0) {
        if (latest <= -contentWidth) {
          x.set(latest + contentWidth);
        } else if (latest > 0) {
          x.set(latest - contentWidth);
        }
      }
    });
    return unsubscribe;
  }, [contentWidth, x]);

  return (
    <section className="py-24 bg-[#131a29] text-white overflow-hidden relative z-[60] rounded-t-[3rem] -mt-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)]">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
          What Homeowners Should Know <br className="hidden md:block"/> Before Choosing a Gutter Guard
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto font-medium leading-relaxed">
          Most systems overpromise and underdeliver. Here's how MasterShield protects your home where others fall short:
        </p>
      </div>

      {/* Marquee Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#131a29] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#131a29] to-transparent z-20 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex overflow-hidden" ref={containerRef}>
        <motion.div 
          className="flex gap-6 md:gap-8 px-8 w-max cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {carouselItems.map((item: any, index) => (
            <div 
              key={index} 
              className={`
                relative flex-shrink-0 w-[350px] md:w-[450px] p-8 rounded-3xl shadow-xl transition-transform hover:scale-[1.02] select-none
                ${item.isQuote 
                  ? 'bg-gradient-to-br from-blue-800 to-blue-900 border border-blue-500/30 text-white' 
                  : 'bg-white text-gray-900'
                }
              `}
            >
              {item.isQuote ? (
                <div className="flex flex-col h-full justify-center relative">
                  <Quote className="absolute top-0 left-0 text-blue-400/20 w-16 h-16 -translate-x-2 -translate-y-2" />
                  <div className="relative z-10">
                     <p className="text-lg md:text-xl italic font-medium leading-relaxed opacity-90">
                      "{item.text}"
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-1 w-12 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">The Reality Check</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full relative overflow-hidden">
                   {/* Background Icon Decoration */}
                   <item.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-gray-100 rotate-12" />
                   
                   <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-6">
                        <item.icon size={24} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-blue-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {item.text}
                      </p>
                   </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
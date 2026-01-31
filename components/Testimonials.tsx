import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Star, Quote, User, BadgeCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Daymond John",
      role: "Shark Tank Investor",
      text: "I absolutely love the MasterShield Guards with the AEGIS 5X system. What I really love is that it’s been so hassle-free since we put them in. It’s been amazing. I can’t say enough about the product.",
      image: "https://picsum.photos/seed/daymond/200", // Placeholder
      stars: 5
    },
    {
      name: "Lindsey Collins",
      role: "Homeowner",
      text: "What an amazing product! The rep was on time, professional, answered every question, and best of all was not pushy. The system just works.",
      image: "https://picsum.photos/seed/lindsey/200", // Placeholder
      stars: 5
    },
    {
      name: "David MacDonald",
      role: "Homeowner",
      text: "We were impressed by the materials and the method of installation. After comparing several systems, MasterShield with AEGIS 5X was a no-brainer.",
      image: "https://picsum.photos/seed/david/200", // Placeholder
      stars: 5
    }
  ];

  // Quadruple the list to ensure smooth infinite scrolling for wider screens
  const carouselItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Measure content width for wrapping
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Calculate the width of one set of items
        const fullWidth = containerRef.current.scrollWidth;
        // Since we quadrupled, the seamless loop point is 1/4 of total, 
        // but for safety with flex gap, we usually loop at half or 1/4 depending on duplication strategy.
        // Let's rely on half width logic if we double, but here we quad for safety on large screens.
        // Logic: We scroll from -TotalWidth/2 to 0.
        setContentWidth(fullWidth / 4);
        
        // Initialize position to create buffer on left
        x.set(-fullWidth / 4);
      }
    };

    // Small timeout to ensure DOM is rendered
    const timeoutId = setTimeout(updateWidth, 100);
    window.addEventListener('resize', updateWidth);
    
    return () => {
        window.removeEventListener('resize', updateWidth);
        clearTimeout(timeoutId);
    };
  }, [x]);

  // Auto-scroll animation loop (Left to Right)
  useAnimationFrame((t, delta) => {
    if (!isHovered && !isDragging) {
      // Positive moveBy moves content to the right
      const moveBy = 0.5 * (delta / 16); 
      x.set(x.get() + moveBy);
    }
  });

  // Handle infinite wrapping for Left-to-Right motion
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      // If we've scrolled far enough right that the start is visible (approx 0),
      // snap back to the left (negative offset) to loop.
      if (contentWidth > 0 && latest >= 0) {
        x.set(-contentWidth);
      }
    });
    return unsubscribe;
  }, [contentWidth, x]);

  return (
    <section className="py-24 bg-gray-50 text-gray-900 relative z-[70] rounded-t-[3rem] -mt-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.1)]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4 border border-green-200">
            <Star size={14} fill="currentColor" />
            <span>Trusted by Thousands</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Real Homeowners. Real Results.
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See why Shark Tank investors and homeowners alike trust MasterShield to protect their biggest investment.
        </p>
      </div>

      {/* Marquee Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex overflow-hidden py-10" ref={containerRef}>
        <motion.div 
          className="flex gap-6 md:gap-8 px-4 w-max cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {carouselItems.map((item, index) => (
            <div 
              key={index} 
              className="w-[400px] md:w-[500px] bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex-shrink-0 flex flex-col relative group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-8 right-8 text-gray-100 group-hover:text-blue-50 transition-colors duration-300">
                <Quote size={80} fill="currentColor" />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm bg-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                    {item.name}
                    {item.role.includes("Shark Tank") && <BadgeCheck size={16} className="text-blue-500" />}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">{item.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed relative z-10 font-medium italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Phone, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "Do gutter guards really work with maple seeds, pine needles, and shingle grit?",
    answer: "Yes. if they’re built right. MasterShield with AEGIS 5X™ was tested against helicopter seeds, pine needles, and even microscopic shingle grit. Our SelfClean Mesh™ and copper-infused design shed fine debris naturally and help prevent clog-causing buildup other guards can't handle. Your gutter guard shouldn’t have to come with a brush or hose attachment to do what it was designed to do."
  },
  {
    question: "Will MasterShield damage my roof or void my shingle warranty?",
    answer: "Never. Our ShingleSafe™ system is approved by top shingle manufacturers and designed to guide water safely into the gutter, without removing, piercing, or pinning under shingles."
  },
  {
    question: "How is MasterShield different from other micromesh or one-piece gutter guards?",
    answer: "Most micromesh guards are flat and don’t match your roof's pitch. That creates debris shelves and overflow. MasterShield’s PitchPerfect™ system installs at the same angle as your roof, so debris slides off, water flows in, and the guard stays clean. Plus, only MasterShield has copper in the mesh for true moss, algae, and oil defense."
  },
  {
    question: "They said their system is clog-proof too, what makes yours different?",
    answer: "Ask them how they stop moss, oils, and algae from clogging both sides of the filter. Then ask them how they keep debris from building up. Does their answer actually make sense or is it a great sales pitch? They can't because their guards are not engineered to stop it. MasterShield uses the strength of stainless steel and weaves the natural killing power of copper into the mesh (CopperCare™) to shut down organic growth before it starts, something no plastic or stainless-only guard can match."
  },
  {
    question: "Isn’t a one-piece or seamless gutter guard better?",
    answer: "“Seamless” sounds good in a brochure, but in reality, many one-piece systems use a reverse-curve design that lets water overshoot during heavy rain. MasterShield is built for function, not flash. AEGIS 5X combines 5 guardians engineered to handle rain, debris, moss, and the real-world challenges nature throws at your roof."
  },
  {
    question: "Why is MasterShield more expensive than other systems?",
    answer: "Think umbrellas. Most work in a drizzle or light rain. MasterShield is a tornado shelter, engineered for your worst weather, not just the next light rain. You're not just buying gutter guards to protect your home in the short-term, you're investing in peace of mind for the lifespan of your home."
  },
  {
    question: "The other company dropped their price three times. Will you match that?",
    answer: "That’s a pricing game some companies play. Inflate, then discount. We don’t do gimmicks. Our pricing is transparent and honest, because our system is built to never need replacing."
  },
  {
    question: "Is MasterShield a DIY gutter guard I can buy online or at Home Depot?",
    answer: "No. MasterShield is pro-installed only, by certified local experts who custom-fit your roof pitch, valleys, and high-flow zones. DIY systems often create more problems than they solve, especially with pitch mismatch and improper water guidance."
  },
  {
    question: "Does the MasterShield system need maintenance or cleaning?",
    answer: "Very rarely. Thanks to our SelfClean Mesh™, debris slides off naturally with wind or rain. No scooping. No brushing. No rinsing. No ladders. If you're ever unsure, your local dealer is just a call away."
  },
  {
    question: "What is covered under the MasterShield warranty?",
    answer: "Everything that matters: the gutter guard materials and performance for life on the gutter it’s installed on. Fully transferable. No legal gymnastics. And if you ever need service, you talk to your local expert, not a call center in another state."
  },
  {
    question: "What is the best gutter guard system for pine needles and heavy rain?",
    answer: "MasterShield with AEGIS 5X™ was tested against pine needles and high-volume stormwater. Its PitchPerfect™ design and HydroVortex™ intake pull water in fast while shedding needles naturally."
  },
  {
    question: "Can gutter guards stop foundation damage or basement leaks?",
    answer: "Yes, when installed as part of a full roofline system. MasterShield is designed to eliminate overflow at the roof edge, which is one of the main causes of basement water intrusion and foundation erosion. Unfortunately, many homeowners are not aware this is the real problem (due to what a contractor has told them), and they end up paying 10X more to fix something else that our gutter guards could have rectified."
  },
  {
    question: "Do I need new gutters before installing gutter guards?",
    answer: "No, not everyone needs to replace their gutters when they need gutter protection. When you schedule your free evaluation, a certified MasterShield dealer will audit and check your entire water pathway, not just the gutters."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-white text-gray-900 relative z-[100] rounded-t-[3rem] -mt-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.1)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Still Have Questions? <br/> We’ve Got Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-blue-500 bg-blue-50/30 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-blue-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Ready to End the Gutter Maintenance Cycle?
            </h3>
            <button className="bg-[#bb6622] hover:bg-[#a0551c] text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-[#bb6622]/50 flex items-center gap-3 mx-auto group transform hover:-translate-y-1">
                <Phone size={24} />
                Get a Free Estimate
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
};
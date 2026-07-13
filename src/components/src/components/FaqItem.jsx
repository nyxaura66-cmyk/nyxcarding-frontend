import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800/80 bg-nyx-gray/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-colors duration-200 hover:border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left transition-colors focus:outline-none"
      >
        <span className="font-bold text-sm sm:text-base text-gray-200 hover:text-white transition-colors flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-nyx-blue shadow-[0_0_6px_#00d2ff]" />
          {question}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-nyx-blue' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal border-t border-gray-900/60 ml-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
                      }
            

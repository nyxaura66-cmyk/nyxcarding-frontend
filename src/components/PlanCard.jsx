import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function PlanCard({ plan, onBuyPlan }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-panel group relative rounded-2xl overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:border-nyx-blue/40 hover:shadow-glow-blue"
    >
      {/* Visual Header Graphic */}
      <div className="relative aspect-[16/10] w-full bg-nyx-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-nyx-gray via-transparent to-transparent opacity-95 z-10" />
        <img 
          src={plan.image} 
          alt={plan.name} 
          loading="lazy"
          className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
        />

        {/* Stock Badge */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
          <span className="bg-red-500/10 border border-red-500/40 text-red-400 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md backdrop-blur-md">
            Limited Stock
          </span>
        </div>

        {plan.popular && (
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-nyx-blue to-nyx-electric text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md shadow-lg flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-black" /> Popular
          </div>
        )}
      </div>

      {/* Description Content */}
      <div className="p-6 space-y-5 flex-grow flex flex-col justify-between relative z-20">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-nyx-blue uppercase font-mono">{plan.category}</span>
          <h3 className="text-xl font-extrabold text-white tracking-wide mt-1 group-hover:text-nyx-blue transition-colors">
            {plan.name}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-800/60">
          <div className="flex flex-col">
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-medium">Allocation Cost</span>
            <span className="text-2xl font-black text-white font-mono">₹{plan.price}</span>
          </div>
          <button 
            onClick={() => onBuyPlan(plan)}
            className="bg-nyx-blue hover:bg-gradient-to-r hover:from-nyx-blue hover:to-nyx-electric text-black font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-glow-blue"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
        }
          

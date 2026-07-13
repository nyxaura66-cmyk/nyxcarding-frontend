import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Headphones, ArrowRight, Star } from 'lucide-react';
import { PlanCard } from '../components/PlanCard';
import { FaqItem } from '../components/FaqItem';

const FEATURED_PLANS = [
  { id: 'plan-1', name: 'Plan 1', price: 599, image: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=500', category: 'Tier I Core', popular: false },
  { id: 'plan-2', name: 'Plan 2', price: 999, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500', category: 'Tier II Enhanced', popular: true },
  { id: 'plan-3', name: 'Plan 3', price: 1499, image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=500', category: 'Tier III Matrix', popular: false },
];

export function Home({ navigateTo, onBuyPlan }) {
  return (
    <div className="space-y-24">
      {/* Hero Stream Block */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[65vh] pt-4">
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nyx-blue/10 border border-nyx-blue/30 text-nyx-blue text-xs font-bold uppercase tracking-wider font-mono"
          >
            <Zap className="w-3.5 h-3.5 fill-nyx-blue animate-pulse" /> Instant Allocation Protocols Online
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Fast & Secure <br />
            <span className="bg-gradient-to-r from-nyx-blue via-nyx-electric to-purple-600 bg-clip-text text-transparent">
              Game Top-Up
            </span> Ecosystem
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            Refill player assets instantaneously via automated server database sync. Input your account UID, select a premium plan structure, and authorize distribution nodes instantly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2"
          >
            <button 
              onClick={() => navigateTo('topup')}
              className="px-8 py-4 bg-nyx-blue hover:brightness-110 text-black font-black rounded-xl shadow-glow-blue transition-all flex items-center gap-2 group text-xs uppercase tracking-widest"
            >
              Buy Premium Plans <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square bg-gradient-to-br from-nyx-blue/10 to-nyx-electric/20 rounded-3xl border border-nyx-blue/20 flex items-center justify-center shadow-glow-electric group overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.15)_0%,transparent_70%)] group-hover:scale-110 transition-transform duration-700" />
            <div className="w-48 h-48 rounded-full border border-nyx-blue/20 flex items-center justify-center backdrop-blur-md animate-pulse">
              <Zap className="w-24 h-24 text-nyx-blue drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Packs Module */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">Featured Service Matrix</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">High-throughput distribution allocation configurations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onBuyPlan={onBuyPlan} />
          ))}
        </div>
      </section>

      {/* Pillar Layout Segment */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Microsecond Execution", desc: "Automated direct API routers update target records inside secure server cycles instantly." },
          { icon: ShieldCheck, title: "Vault Protection", desc: "Hardened firewalls encrypt data parameters during database write events." },
          { icon: Headphones, title: "Live Operator Hub", desc: "Engineers consistently track node transactions across global distribution nodes." }
        ].map((item, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl space-y-3 hover:border-nyx-blue/20 transition-all">
            <div className="w-11 h-11 rounded-xl bg-nyx-blue/10 border border-nyx-blue/20 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-nyx-blue" />
            </div>
            <h3 className="text-base font-bold text-white tracking-wide">{item.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="space-y-8">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">Verified Client Logs</h2>
          <p className="text-gray-500 text-xs sm:text-sm">Real-time telemetry reports gathered straight from our checkout framework</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: "DeltaVoid", feedback: "Plan 2 executed smoothly. Profile updated inside 35 seconds flat. Impressive architecture.", stars: 5 },
            { tag: "ZeroCool", feedback: "Cleanest top-up interface I have deployed. Prices are extremely competitive.", stars: 5 },
            { tag: "Kaelthas", feedback: "Support vector resolved my input string error within minutes. Highly recommended platform.", stars: 5 }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel-light p-6 rounded-2xl flex flex-col justify-between border border-gray-900">
              <p className="text-gray-300 text-xs sm:text-sm italic font-normal leading-relaxed">"{item.feedback}"</p>
              <div className="mt-5 flex items-center justify-between border-t border-gray-900 pt-4">
                <span className="text-xs font-bold text-nyx-blue font-mono">{item.tag}</span>
                <div className="flex gap-0.5">
                  {[...Array(item.stars)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Accordion FAQs */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-extrabold text-center text-white uppercase tracking-tight mb-8">System Queries</h2>
        <FaqItem 
          question="How do the allocation distribution modules process top-ups?" 
          answer="Once a payment payload completes verification via our secure gateways, our automated server arrays match the provided UID tag and write updates straight to the target database in seconds." 
        />
        <FaqItem 
          question="Is inputting account identification safe on this platform?" 
          answer="Completely. We strictly process public UID strings. Our system logic configuration prevents requesting passwords, pins, or sensitive authentication details." 
        />
        <FaqItem 
          question="What happens if a network buffer interrupts my order loop?" 
          answer="If an interruption occurs, our fallback logging model catches the unfulfilled transaction parameters. Our support center operators can inspect and manual-route the data instantly." 
        />
      </section>
    </div>
  );
}

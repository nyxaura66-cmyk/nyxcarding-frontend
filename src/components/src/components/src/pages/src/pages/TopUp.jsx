import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PlanCard } from '../components/PlanCard';

const ENTIRE_PLANS = [
  { id: 'plan-1', name: 'Plan 1', price: 599, image: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=500', category: 'Tier I Core', popular: false },
  { id: 'plan-2', name: 'Plan 2', price: 999, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500', category: 'Tier II Enhanced', popular: true },
  { id: 'plan-3', name: 'Plan 3', price: 1499, image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=500', category: 'Tier III Matrix', popular: false },
  { id: 'plan-4', name: 'Plan 4', price: 2499, image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500', category: 'Vanguard Vector', popular: true },
  { id: 'plan-5', name: 'Plan 5', price: 3299, image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=500', category: 'Overlord Array', popular: false },
  { id: 'plan-6', name: 'Plan 6', price: 4000, image: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=500', category: 'Apex Leviathan', popular: true },
];

export function TopUp({ onBuyPlan, searchQuery, setSearchQuery }) {
  const filtered = ENTIRE_PLANS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">Premium Plan Matrix</h1>
        <p className="text-gray-500 text-xs sm:text-sm">Select system resource levels for automated delivery allocations</p>
      </div>

      {/* Control Tools Header */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Filter matrix configurations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 border border-gray-800 focus:border-nyx-blue/50 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none transition-all"
          />
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-nyx-gray border border-gray-800 hover:border-nyx-blue/40 px-4 py-2.5 rounded-xl text-xs font-bold transition-all text-gray-300">
          <SlidersHorizontal className="w-3.5 h-3.5 text-nyx-blue" />
          <span>Config Active ({filtered.length})</span>
        </button>
      </div>

      {/* Card Deployment Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onBuyPlan={onBuyPlan} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-gray-800 rounded-2xl">
          <p className="text-gray-500 text-sm font-medium">No active configurations map to the current search query.</p>
        </div>
      )}
    </div>
  );
                       }
          

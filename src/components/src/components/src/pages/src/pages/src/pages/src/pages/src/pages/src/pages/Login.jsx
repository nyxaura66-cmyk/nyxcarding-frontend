import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

export function Login({ setUser, navigateTo }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !pass) return;
    setUser({ loggedIn: true, name: 'CyberOperator', email: email });
    navigateTo('dashboard');
  };

  return (
    <div className="max-w-sm mx-auto glass-panel p-6 rounded-2xl space-y-6 mt-8">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">Node Authorization</h2>
        <p className="text-xs text-gray-500">Connect to platform transaction arrays</p>
      </div>

      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs text-gray-400 font-medium">Email Parameter</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none"
            placeholder="operator@nyx.net"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-baseline">
            <label className="text-xs text-gray-400 font-medium">Secure Key Phrase</label>
            <button type="button" className="text-[10px] text-nyx-blue hover:underline">Forgot String?</button>
          </div>
          <input 
            type="password" 
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-nyx-blue hover:brightness-110 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-glow-blue mt-2"
        >
          <LogIn className="w-3.5 h-3.5" /> Initialize Linkage
        </button>
      </form>

      <div className="text-center text-[11px] text-gray-500">
        New to database pipeline?{' '}
        <button onClick={() => navigateTo('signup')} className="text-nyx-blue hover:underline font-bold">Build Profile Node</button>
      </div>
    </div>
  );
          }
        

import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';

export function SignUp({ setUser, navigateTo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !pass) return;
    setUser({ loggedIn: true, name: name, email: email });
    navigateTo('dashboard');
  };

  return (
    <div className="max-w-sm mx-auto glass-panel p-6 rounded-2xl space-y-6 mt-6">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">Initialize Profile</h2>
        <p className="text-xs text-gray-500">Construct unique identity parameters inside registry</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs text-gray-400 font-medium">Operator Callsign</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none"
            placeholder="Ex: NeonViper"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-400 font-medium">Target Email Parameter</label>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none"
            placeholder="name@domain.com"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-400 font-medium">Generate Key Phrase</label>
          <input 
            type="password" 
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none"
            placeholder="Minimum 8 characters"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-nyx-blue hover:brightness-110 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-glow-blue mt-2"
        >
          <UserPlus className="w-3.5 h-3.5" /> Map Configuration
        </button>
      </form>

      <div className="text-center text-[11px] text-gray-500">
        Profile entry mapped?{' '}
        <button onClick={() => navigateTo('login')} className="text-nyx-blue hover:underline font-bold">Authorize Here</button>
      </div>
    </div>
  );
            }

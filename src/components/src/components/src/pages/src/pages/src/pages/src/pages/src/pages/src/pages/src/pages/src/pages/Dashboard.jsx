import React from 'react';
import { User, LogOut, Cpu, HardDrive, ShieldAlert } from 'lucide-react';
import { Orders } from './Orders';

export function Dashboard({ user, setUser, navigateTo }) {
  const handleExitNode = () => {
    setUser({ loggedIn: false, name: '', email: '' });
    navigateTo('home');
  };

  return (
    <div className="space-y-8">
      {/* Profiler Metrics Header */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-gray-800/60">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-nyx-blue/10 border border-nyx-blue/30 flex items-center justify-center shadow-glow-blue">
            <User className="w-6 h-6 text-nyx-blue" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white tracking-wide">{user.name || 'Anonymous Operator'}</h2>
            <p className="text-xs text-gray-500 font-mono mt-0.5">{user.email || 'no-route@nyx.net'}</p>
          </div>
        </div>
        
        <button
          onClick={handleExitNode}
          className="flex items-center gap-2 bg-red-950/20 hover:bg-red-900/20 text-red-400 border border-red-500/20 hover:border-red-500/40 px-4 py-2 rounded-xl text-xs font-bold transition-all"
        >
          <LogOut className="w-3.5 h-3.5" /> Close Identity Loop
        </button>
      </div>

      {/* Grid Telemetry Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-panel p-5 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-gray-500">
            <span className="text-[10px] font-bold uppercase tracking-widest">Profile Rank</span>
            <Cpu className="w-4 h-4 text-nyx-blue" />
          </div>
          <div className="text-xl font-black text-white">Vanguard Core Core</div>
        </div>

        <div className="glass-panel p-5 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-gray-500">
            <span className="text-[10px] font-bold uppercase tracking-widest">Active Links</span>
            <HardDrive className="w-4 h-4 text-nyx-blue" />
          </div>
          <div className="text-xl font-black text-white font-mono">2 Server Tracks</div>
        </div>

        <div className="glass-panel p-5 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-gray-500">
            <span className="text-[10px] font-bold uppercase tracking-widest">Integrity State</span>
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl font-black text-emerald-400 flex items-center gap-1.5 uppercase text-sm tracking-wider">
            Clear Array
          </div>
        </div>
      </div>

      {/* Order Log View Render Inclusion */}
      <div className="pt-4">
        <Orders user={user} navigateTo={navigateTo} />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Gamepad2, Menu, X, User, ShieldCheck, Search } from 'lucide-react';

export function Layout({ children, currentPage, navigateTo, user, setSearchQuery }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigateTo('topup');
  };

  return (
    <div className="min-h-screen flex flex-col bg-nyx-dark text-gray-100 relative">
      {/* Decorative Blur Background Components */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nyx-blue/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-nyx-electric/5 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-nyx-dark/80 border-b border-gray-800/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => navigateTo('home')}>
              <Gamepad2 className="w-8 h-8 text-nyx-blue drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]" />
              <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-nyx-blue to-nyx-electric bg-clip-text text-transparent">
                NYXCARDING
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <button onClick={() => navigateTo('home')} className={`transition-colors hover:text-nyx-blue ${currentPage === 'home' ? 'text-nyx-blue' : 'text-gray-400'}`}>Home</button>
              <button onClick={() => navigateTo('topup')} className={`transition-colors hover:text-nyx-blue ${currentPage === 'topup' ? 'text-nyx-blue' : 'text-gray-400'}`}>Top-Up</button>
              <button onClick={() => navigateTo('orders')} className={`transition-colors hover:text-nyx-blue ${currentPage === 'orders' ? 'text-nyx-blue' : 'text-gray-400'}`}>Orders</button>
              <button onClick={() => navigateTo('contact')} className={`transition-colors hover:text-nyx-blue ${currentPage === 'contact' ? 'text-nyx-blue' : 'text-gray-400'}`}>Contact</button>
            </div>

            {/* Desktop Quick Search & Auth */}
            <div className="hidden md:flex items-center gap-6">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Quick search plan..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-black/40 border border-gray-800 focus:border-nyx-blue/50 rounded-xl py-1.5 pl-9 pr-4 text-xs text-white focus:outline-none transition-all w-44 focus:w-56"
                />
              </form>

              {user.loggedIn ? (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => navigateTo('dashboard')}
                    className="flex items-center gap-2 bg-nyx-gray/80 border border-gray-800 hover:border-nyx-blue/40 px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    <User className="w-3.5 h-3.5 text-nyx-blue" />
                    <span>Dashboard</span>
                  </button>
                  <button onClick={() => navigateTo('admin')} className="text-xs text-gray-600 hover:text-nyx-blue transition-colors font-mono">ROOT@ADMIN</button>
                </div>
              ) : (
                <div className="flex items-center gap-4 text-sm">
                  <button onClick={() => navigateTo('login')} className="font-semibold text-gray-400 hover:text-white transition-colors">Login</button>
                  <button onClick={() => navigateTo('signup')} className="bg-gradient-to-r from-nyx-blue to-nyx-electric hover:brightness-110 text-black font-black px-5 py-2 rounded-xl transition-all shadow-glow-blue">
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-gray-400 hover:text-white p-1">
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu Drawer */}
        {isMobileOpen && (
          <div className="md:hidden border-b border-gray-800/80 bg-nyx-dark/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 shadow-2xl absolute w-full left-0">
            <button onClick={() => { navigateTo('home'); setIsMobileOpen(false); }} className="block w-full text-left px-3 py-2 rounded-xl text-gray-300 hover:bg-white/5 hover:text-nyx-blue">Home</button>
            <button onClick={() => { navigateTo('topup'); setIsMobileOpen(false); }} className="block w-full text-left px-3 py-2 rounded-xl text-gray-300 hover:bg-white/5 hover:text-nyx-blue">Top-Up</button>
            <button onClick={() => { navigateTo('orders'); setIsMobileOpen(false); }} className="block w-full text-left px-3 py-2 rounded-xl text-gray-300 hover:bg-white/5 hover:text-nyx-blue">Orders</button>
            <button onClick={() => { navigateTo('contact'); setIsMobileOpen(false); }} className="block w-full text-left px-3 py-2 rounded-xl text-gray-300 hover:bg-white/5 hover:text-nyx-blue">Contact</button>
            
            <div className="pt-4 border-t border-gray-800/80 space-y-2">
              {user.loggedIn ? (
                <>
                  <button onClick={() => { navigateTo('dashboard'); setIsMobileOpen(false); }} className="block w-full text-center bg-nyx-gray border border-gray-800 py-2.5 rounded-xl text-sm font-bold text-nyx-blue">Dashboard</button>
                  <button onClick={() => { navigateTo('admin'); setIsMobileOpen(false); }} className="block w-full text-center text-xs text-gray-600 font-mono py-1">ROOT@ADMIN</button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button onClick={() => { navigateTo('login'); setIsMobileOpen(false); }} className="w-full text-center border border-gray-800 py-2.5 rounded-xl text-sm font-bold text-gray-300 hover:bg-white/5">Login</button>
                  <button onClick={() => { navigateTo('signup'); setIsMobileOpen(false); }} className="w-full text-center bg-nyx-blue py-2.5 rounded-xl text-sm font-black text-black">Sign Up</button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Dynamic View Content */}
      <main className="flex-grow z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Global Optimized Footer */}
      <footer className="bg-[#06070a] border-t border-gray-900 mt-24 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-nyx-blue" />
              <span className="text-xl font-extrabold tracking-wider text-white">NYXCARDING</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Premium instant distribution infrastructure for direct game account refills. Encrypted database operations providing top-tier throughput.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Ecosystem</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => navigateTo('topup')} className="hover:text-nyx-blue transition-colors">Direct Top-Up Portal</button></li>
              <li><button onClick={() => navigateTo('orders')} className="hover:text-nyx-blue transition-colors">Live Order History Matrix</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-nyx-blue transition-colors">Support Operations</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Framework Policy</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-nyx-blue transition-colors">Terms of Matrix Service</a></li>
              <li><a href="#" className="hover:text-nyx-blue transition-colors">Refund & Return Protocol</a></li>
              <li><a href="#" className="hover:text-nyx-blue transition-colors">Privacy Infrastructure</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Vault Encryption</h4>
            <div className="p-4 bg-nyx-gray/40 rounded-2xl border border-gray-800/80 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-nyx-blue flex-shrink-0" />
              <p className="text-[11px] text-gray-400 leading-normal">
                All account allocations are managed via secured endpoints protected by AES-GCM network locks.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900 mt-8 pt-6 text-center text-[11px] text-gray-600 font-mono">
          © 2026 NYXCARDING INC. HIGH-VELOCITY RECHARGE NODES ACTIVE.
        </div>
      </footer>
    </div>
  );
              }
                

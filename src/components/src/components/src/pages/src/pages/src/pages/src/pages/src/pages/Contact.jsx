import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSent(true);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">Support Terminal</h1>
        <p className="text-gray-500 text-xs sm:text-sm">Transmit dynamic incident reports straight to active operations staff</p>
      </div>

      {isSent ? (
        <div className="glass-panel p-6 rounded-2xl text-center space-y-3 border border-nyx-blue/30 shadow-glow-blue">
          <CheckCircle className="w-10 h-10 text-nyx-blue mx-auto" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wide">Ticket Stream Transmitted</h4>
          <p className="text-xs text-gray-400 leading-normal">
            Telemetry packet loaded successfully. Matrix monitor queues will allocate an inspector shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-2xl space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-400 font-medium tracking-wide">Operator Call Sign</label>
            <input 
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none"
              placeholder="Ex: Hunter-01"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 font-medium tracking-wide">Network Email Vector</label>
            <input 
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none"
              placeholder="name@net.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-400 font-medium tracking-wide">Anomaly Payload Log Summary</label>
            <textarea 
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full glass-input rounded-xl p-3 text-xs text-white focus:outline-none resize-none"
              placeholder="Describe transactional variables or database buffer delays..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-nyx-blue hover:brightness-110 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-glow-blue"
          >
            <Send className="w-3.5 h-3.5" /> Transmit Packet String
          </button>
        </form>
      )}
    </div>
  );
          }
          

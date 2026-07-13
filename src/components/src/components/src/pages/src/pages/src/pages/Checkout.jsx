import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Cpu, CreditCard, Coins } from 'lucide-react';

export function Checkout({ product, navigateTo }) {
  const [uid, setUid] = useState('');
  const [paymentNode, setPaymentNode] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [isCommitted, setIsCommitted] = useState(false);
  const [discount, setDiscount] = useState(0);

  if (!product) {
    return (
      <div className="max-w-md mx-auto text-center py-16 space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <p className="text-gray-400 text-sm">No transaction payload mapping detected in execution buffer.</p>
        <button onClick={() => navigateTo('topup')} className="text-nyx-blue text-xs uppercase tracking-wider font-bold">Return to Registry</button>
      </div>
    );
  }

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'NYX20') {
      setDiscount(0.20);
    } else {
      alert('Invalid Promo String');
    }
  };

  const finalCost = product.price - (product.price * discount);

  const executePipelineSubmit = (e) => {
    e.preventDefault();
    if (!uid || !paymentNode) return;
    setIsCommitted(true);
  };

  if (isCommitted) {
    return (
      <div className="max-w-md mx-auto glass-panel rounded-3xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-nyx-blue/10 border border-nyx-blue/40 rounded-full flex items-center justify-center mx-auto shadow-glow-blue">
          <CheckCircle className="w-8 h-8 text-nyx-blue" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-extrabold text-white uppercase tracking-tight">Transaction Authorized</h2>
          <p className="text-xs text-nyx-blue font-mono">HASH: #NYX-{Math.floor(Math.random() * 900000 + 100000)}</p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2">
            The database stream has logged your allocation command. Delivery routines to player target <span className="text-white font-mono font-bold">{uid}</span> are executing.
          </p>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <button onClick={() => navigateTo('orders')} className="w-full bg-nyx-blue hover:brightness-110 text-black font-black py-3 rounded-xl text-xs uppercase tracking-widest transition-all">Track System Logs</button>
          <button onClick={() => navigateTo('home')} className="w-full bg-transparent text-gray-500 hover:text-white py-2 text-xs font-semibold transition-colors">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Checkout Forms Panel */}
      <form onSubmit={executePipelineSubmit} className="lg:col-span-7 space-y-6">
        {/* Destination ID */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-nyx-blue flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-nyx-blue/10 border border-nyx-blue/30 flex items-center justify-center text-[10px] font-black">1</span>
            Target Account Vector
          </h3>
          <div className="space-y-1.5">
            <label className="text-xs text-gray-400 font-medium">Input System Account Identifier (UID)</label>
            <input 
              type="text"
              required
              placeholder="Ex: 8492847291"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              className="w-full glass-input rounded-xl p-3.5 text-sm text-white focus:outline-none font-mono tracking-wider"
            />
          </div>
        </div>

        {/* Payment Gate Selection */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-nyx-blue flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-nyx-blue/10 border border-nyx-blue/30 flex items-center justify-center text-[10px] font-black">2</span>
            Gateway Infrastructure
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'UPI', label: 'UPI / NetBanking', icon: Coins },
              { id: 'CARD', label: 'Credit Card Matrix', icon: CreditCard },
              { id: 'CRYPTO', label: 'Decentralized Vault', icon: Cpu }
            ].map((gate) => {
              const IconComp = gate.icon;
              return (
                <div
                  key={gate.id}
                  onClick={() => setPaymentNode(gate.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all text-center space-y-2 flex flex-col items-center justify-center ${paymentNode === gate.id ? 'bg-nyx-blue/10 border-nyx-blue shadow-glow-blue' : 'bg-black/30 border-gray-800 hover:border-gray-700'}`}
                >
                  <IconComp className={`w-5 h-5 ${paymentNode === gate.id ? 'text-nyx-blue' : 'text-gray-500'}`} />
                  <div className={`text-[11px] font-bold uppercase tracking-wider ${paymentNode === gate.id ? 'text-white' : 'text-gray-400'}`}>{gate.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </form>

      {/* Checkout Summary Sheet */}
      <div className="lg:col-span-5 glass-panel rounded-2xl p-6 space-y-6">
        <div>
          <h3 className="text-lg font-extrabold text-white uppercase tracking-tight">Ledger Summary</h3>
          <p className="text-gray-500 text-xs mt-0.5">Validate variables prior to authorization</p>
        </div>

        <div className="flex gap-4 items-center bg-black/40 p-3 rounded-xl border border-gray-900">
          <img src={product.image} alt="" className="w-16 h-12 object-cover rounded-lg bg-nyx-dark flex-shrink-0" />
          <div>
            <div className="text-[10px] font-bold text-nyx-blue uppercase font-mono">{product.category}</div>
            <div className="text-sm font-bold text-white">{product.name}</div>
          </div>
        </div>

        <div className="space-y-2.5 text-xs font-medium border-b border-gray-800/80 pb-4">
          <div className="flex justify-between"><span className="text-gray-500">Target UID Allocation:</span> <span className="text-white font-mono font-bold">{uid || 'Pending parameter...'}</span></div>
          <div className="flex justify-between"><span className="text-gray-500">Distribution Pack:</span> <span className="text-white font-bold">{product.name}</span></div>
          <div className="flex justify-between"><span className="text-gray-500">Base Unit Charge:</span> <span className="text-white font-mono">₹{product.price}</span></div>
          {discount > 0 && <div className="flex justify-between text-nyx-blue"><span>Voucher Multiplier:</span> <span className="font-mono">-₹{product.price * discount}</span></div>}
        </div>

        {/* Coupon Form Area */}
        <div className="flex gap-2">
          <input 
            type="text"
            placeholder="Promotion Token String (NYX20)"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-grow bg-black/50 border border-gray-800 text-xs text-white p-3 rounded-xl focus:outline-none focus:border-nyx-blue/40 font-mono uppercase tracking-wide"
          />
          <button type="button" onClick={handleApplyCoupon} className="bg-nyx-gray border border-gray-800 text-gray-200 hover:text-white text-xs px-4 rounded-xl font-bold transition-all">Apply</button>
        </div>

        <div className="pt-1 flex justify-between items-baseline">
          <span className="text-xs font-bold text-white uppercase tracking-widest">Total Settlement Ledger:</span>
          <span className="text-3xl font-black text-nyx-blue font-mono">₹{finalCost}</span>
        </div>

        <button
          type="submit"
          disabled={!uid || !paymentNode}
          onClick={executePipelineSubmit}
          className="w-full bg-nyx-blue hover:brightness-110 disabled:bg-gray-900 disabled:text-gray-600 text-black font-black py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-glow-blue disabled:shadow-none"
        >
          Authorize Pipeline Payment
        </button>
      </div>
    </div>
  );
}
  

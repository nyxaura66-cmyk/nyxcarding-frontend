import React from 'react';
import { AlertCircle, Clock, CheckCircle } from 'lucide-react';

export function Orders({ user, navigateTo }) {
  // Mock logged transactions
  const activeLogs = [
    { txId: 'NYX-901842', timestamp: '2026-07-13 14:22', description: 'Plan 2 Allocation Pipeline', target: 'UID: 894729104', price: '₹999', status: 'Delivered' },
    { txId: 'NYX-783912', timestamp: '2026-06-28 09:11', description: 'Plan 1 Allocation Pipeline', target: 'UID: 894729104', price: '₹599', status: 'Delivered' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">Telemetry Stream Logs</h1>
        <p className="text-gray-500 text-xs sm:text-sm">Historical allocation commands logged inside this system cluster</p>
      </div>

      {user.loggedIn ? (
        <div className="space-y-4">
          {activeLogs.map((log) => (
            <div key={log.txId} className="glass-panel p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-800/60 hover:border-gray-800 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono font-bold text-white tracking-wide">{log.txId}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5" /> {log.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  {log.description} — <span className="text-gray-300 font-mono">{log.target}</span>
                </p>
              </div>

              <div className="flex sm:flex-col items-baseline sm:items-end justify-between border-t sm:border-t-0 border-gray-900 pt-3 sm:pt-0">
                <span className="text-[11px] text-gray-500 font-mono sm:order-last flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {log.timestamp}
                </span>
                <span className="text-sm font-bold text-nyx-blue font-mono">{log.price}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-panel p-8 text-center rounded-2xl max-w-md mx-auto space-y-4">
          <AlertCircle className="w-10 h-10 text-nyx-blue mx-auto" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Authentication Log Required</h3>
            <p className="text-xs text-gray-400 leading-relaxed px-4">
              Link a verified user identity to parse secure historical ledger records stored on this server cluster.
            </p>
          </div>
          <button 
            onClick={() => navigateTo('login')}
            className="bg-nyx-blue text-black text-xs font-black uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all shadow-glow-blue"
          >
            Access Authorization Node
          </button>
        </div>
      )}
    </div>
  );
                  }
              

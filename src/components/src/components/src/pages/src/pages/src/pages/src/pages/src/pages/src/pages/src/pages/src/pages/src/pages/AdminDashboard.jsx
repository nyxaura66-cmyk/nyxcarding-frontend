import React from 'react';
import { DollarSign, Package, Users, TrendingUp, RefreshCw } from 'lucide-react';

export function AdminDashboard({ navigateTo }) {
  const serverStatCards = [
    { text: 'Gross Loop Settlement', val: '₹2,39,810.00', change: '+18.4% cycle', icon: DollarSign },
    { text: 'Successful Allocations', val: '4,102 Nodes', change: '+92 write events today', icon: Package },
    { text: 'Mapped Identities', val: '12,948 Rows', change: '+14 active entry', icon: Users },
    { text: 'Network Latency Sync', val: '99.99% OK', change: '0.04ms runtime drift', icon: TrendingUp }
  ];

  const operationalLogs = [
    { identifier: '#TXN-9402', cluster: 'root.alpha@nyx.net', plan: 'Plan 6 Apex Deployment', total: '₹4,000' },
    { identifier: '#TXN-9401', cluster: 'matrix.v8@gmail.com', plan: 'Plan 2 Enhanced Module', total: '₹999' },
    { identifier: '#TXN-9400', cluster: 'vortex.sys@proton.me', plan: 'Plan 4 Vanguard Vector', total: '₹2,499' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight font-mono">ROOT@ADMIN_CONSOLE</h1>
          <p className="text-gray-500 text-xs sm:text-sm">Main system hardware pipelines and active client write logs</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center justify-center gap-2 bg-nyx-gray border border-gray-800 hover:border-nyx-blue/30 px-4 py-2 rounded-xl text-xs font-bold transition-all text-gray-300 w-full sm:w-auto"
        >
          <RefreshCw className="w-3.5 h-3.5 text-nyx-blue animate-spin" style={{ animationDuration: '6s' }} />
          <span>Refresh Console</span>
        </button>
      </div>

      {/* Metric Blocks Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serverStatCards.map((card, i) => {
          const CardIcon = card.icon;
          return (
            <div key={i} className="glass-panel p-5 rounded-2xl space-y-3 border border-gray-800/50">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{card.text}</span>
                <CardIcon className="w-4 h-4 text-nyx-blue" />
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-lg font-black text-white font-mono tracking-tight">{card.val}</span>
                <span className="text-[10px] text-nyx-blue font-mono font-bold">{card.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live System Logging Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nyx-blue animate-ping" />
            Live Buffer Stream Writes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-400 font-mono">
              <thead className="text-gray-500 border-b border-gray-950 uppercase tracking-wider">
                <tr>
                  <th className="pb-3 font-semibold">Log Hex</th>
                  <th className="pb-3 font-semibold">Cluster Address</th>
                  <th className="pb-3 font-semibold">Payload Core</th>
                  <th className="pb-3 font-semibold text-right">Settled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900/40">
                {operationalLogs.map((row, i) => (
                  <tr key={i} className="hover:bg-white/20 transition-colors">
                    <td className="py-4 text-white font-bold">{row.identifier}</td>
                    <td className="py-4 text-gray-500">{row.cluster}</td>
                    <td className="py-4 text-nyx-blue font-semibold">{row.plan}</td>
                    <td className="py-4 text-right text-white font-bold">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Node Architecture Health Matrix */}
        <div className="lg:col-span-4 glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono">Cluster Allocation Nodes</h3>
          <div className="space-y-3 text-xs font-mono">
            {[
              { component: 'API Primary Routing Cluster', diagnostics: 'Online', col: 'text-emerald-400' },
              { component: 'Database Synchronizer Pool', diagnostics: 'Synced', col: 'text-emerald-400' },
              { component: 'Gateway Ingestion Hooks', diagnostics: 'Active', col: 'text-nyx-blue' }
            ].map((node, i) => (
              <div key={i} className="p-3.5 bg-black/40 rounded-xl border border-gray-950 flex justify-between items-center">
                <span className="text-gray-400 font-medium text-[11px]">{node.component}</span>
                <span className={`font-black uppercase text-[11px] ${node.col}`}>{node.diagnostics}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
      }
      

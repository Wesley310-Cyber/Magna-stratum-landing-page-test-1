import { LayoutDashboard, Briefcase, FileText, Settings, LogOut, Bell, Search, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-oxford border-r border-brass/20 flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-brass/20 shrink-0">
          <div className="w-8 h-8 bg-brass flex items-center justify-center rounded-custom mr-3">
            <span className="text-oxford font-serif font-bold text-sm">M</span>
          </div>
          <span className="text-lg font-serif font-bold tracking-tight text-brass uppercase">Client Portal</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-brass/10 text-brass rounded-custom font-medium">
            <LayoutDashboard size={20} /> Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-custom font-medium transition-colors">
            <Briefcase size={20} /> Portfolio
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-custom font-medium transition-colors">
            <FileText size={20} /> Documents
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-custom font-medium transition-colors">
            <Settings size={20} /> Settings
          </a>
        </nav>
        
        <div className="p-4 border-t border-brass/20 shrink-0">
          <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-white hover:bg-white/5 rounded-custom font-medium transition-colors cursor-pointer">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-oxford/50 backdrop-blur-md border-b border-brass/10 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center md:hidden">
            <div className="w-8 h-8 bg-brass flex items-center justify-center rounded-custom mr-3">
              <span className="text-oxford font-serif font-bold text-sm">M</span>
            </div>
          </div>
          
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search assets, documents..." 
              className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all" 
            />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 ml-auto">
            <button className="relative text-slate-400 hover:text-brass transition-colors cursor-pointer">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-oxford"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-slate-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">Robert Vance</p>
                <p className="text-xs text-slate-400">Vance Refrigeration</p>
              </div>
              <img 
                src="https://i.pravatar.cc/150?img=11" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-brass/50 object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            {/* Mobile Logout */}
            <button onClick={onLogout} className="md:hidden text-slate-400 hover:text-white ml-2">
              <LogOut size={20} />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto space-y-8 pb-12">
            <div>
              <h1 className="text-3xl font-serif font-bold text-white mb-2">Dashboard Overview</h1>
              <p className="text-slate-400">Track your transition progress and asset performance.</p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-custom">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Total Valuation</p>
                    <h3 className="text-3xl font-bold text-white">$4,250,000</h3>
                  </div>
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <div className="flex items-center text-sm text-emerald-400">
                  <span>+12.5%</span>
                  <span className="text-slate-500 ml-2">vs last year</span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-custom border-brass/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brass/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Transition Progress</p>
                    <h3 className="text-3xl font-bold text-white">65%</h3>
                  </div>
                  <div className="p-2 bg-brass/20 text-brass rounded-lg">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 mt-4 relative z-10">
                  <div className="bg-brass h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-custom">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Next Milestone</p>
                    <h3 className="text-xl font-bold text-white mt-1">Legal Structuring</h3>
                  </div>
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                    <AlertCircle size={24} />
                  </div>
                </div>
                <p className="text-sm text-slate-400 mt-2">Due in 14 days. Pending signature on operating agreement.</p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Asset Portfolio (Cards) */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl font-serif font-bold text-white border-b border-slate-800 pb-2">Managed Assets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Asset Card 1 */}
                  <div className="bg-slate-800/40 border border-slate-700 rounded-custom overflow-hidden hover:border-brass/50 transition-colors group">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                        alt="Industrial Facility" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-oxford/80 backdrop-blur-sm text-xs font-medium text-brass rounded border border-brass/30">
                        Operating
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-lg text-white mb-1">Vance Refrigeration HQ</h4>
                      <p className="text-sm text-slate-400 mb-4">Commercial Real Estate & Operations</p>
                      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                        <span className="text-sm font-medium text-slate-300">Est. Value</span>
                        <span className="font-bold text-white">$2.8M</span>
                      </div>
                    </div>
                  </div>

                  {/* Asset Card 2 */}
                  <div className="bg-slate-800/40 border border-slate-700 rounded-custom overflow-hidden hover:border-brass/50 transition-colors group">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                        alt="Commercial Building" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-oxford/80 backdrop-blur-sm text-xs font-medium text-emerald-400 rounded border border-emerald-500/30">
                        Passive
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-lg text-white mb-1">Scranton Business Park</h4>
                      <p className="text-sm text-slate-400 mb-4">Commercial Leasehold</p>
                      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                        <span className="text-sm font-medium text-slate-300">Est. Value</span>
                        <span className="font-bold text-white">$1.45M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-6">
                <h2 className="text-xl font-serif font-bold text-white border-b border-slate-800 pb-2">Recent Activity</h2>
                <div className="glass-card rounded-custom p-6">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="mt-1 text-emerald-400"><CheckCircle2 size={20} /></div>
                      <div>
                        <p className="text-sm font-medium text-white">Valuation Report Completed</p>
                        <p className="text-xs text-slate-400 mt-1">Yesterday at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 text-brass"><FileText size={20} /></div>
                      <div>
                        <p className="text-sm font-medium text-white">Draft Operating Agreement</p>
                        <p className="text-xs text-slate-400 mt-1">Requires your review and signature.</p>
                        <button className="mt-2 text-xs font-medium text-brass hover:text-white transition-colors cursor-pointer">
                          Review Document &rarr;
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 text-blue-400"><Users size={20} /></div>
                      <div>
                        <p className="text-sm font-medium text-white">Meeting with Legal Team</p>
                        <p className="text-xs text-slate-400 mt-1">Oct 12, 2024 &bull; 10:00 AM EST</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-custom transition-all cursor-pointer">
                    View All Activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

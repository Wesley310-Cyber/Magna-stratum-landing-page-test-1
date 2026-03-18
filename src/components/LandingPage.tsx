import { Zap, Users, CircleDollarSign, Check, X, Star, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LandingPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-oxford/90 backdrop-blur-md border-b border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brass flex items-center justify-center rounded-custom">
                <span className="text-oxford font-serif font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-brass uppercase">MagnaStratum</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#process" className="hover:text-brass transition-colors">Our Process</a>
              <button onClick={onLogin} className="text-slate-300 hover:text-white font-medium transition-colors">Client Login</button>
              <a href="#form" className="bg-brass text-oxford px-6 py-2.5 rounded-custom font-semibold hover:bg-brass-dark transition-all duration-300">
                Start Audit
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="z-10 flex flex-col items-center w-full">
              <span className="inline-block px-4 py-1 border border-brass text-brass rounded-full text-sm font-semibold mb-6 tracking-widest uppercase">
                The Trusted Advisor
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Own the Business, <br />
                <span className="text-brass italic">Not the Wrench.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                A structured path to turn 20 years of trade expertise into a cash-flowing family legacy. 
                Secure your future without the physical burden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#form" className="bg-brass text-oxford px-8 py-4 rounded-custom text-lg font-bold hover:shadow-[0_0_20px_rgba(181,166,66,0.4)] transition-all text-center">
                  Start Your Transition Audit
                </a>
              </div>

              {/* Trusted Professionals Grid */}
              <div className="mt-12 w-full max-w-2xl">
                <p className="text-sm text-slate-400 mb-4 font-medium uppercase tracking-wider">Trusted by professionals in:</p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="relative group overflow-hidden rounded-custom border border-brass/20 aspect-square shadow-lg">
                    <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=300&q=80" alt="Nurse" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-oxford/30 group-hover:bg-transparent transition-all duration-500"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-custom border border-brass/20 aspect-square shadow-lg">
                    <img src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&w=300&q=80" alt="Plumber" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-oxford/30 group-hover:bg-transparent transition-all duration-500"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-custom border border-brass/20 aspect-square shadow-lg">
                    <img src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=300&q=80" alt="Female Paramedic" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-oxford/30 group-hover:bg-transparent transition-all duration-500"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-custom border border-brass/20 aspect-square shadow-lg">
                    <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=300&q=80" alt="Auto Mechanic" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-oxford/30 group-hover:bg-transparent transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point Grid */}
        <section className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Securing What You've Built</h2>
              <div className="h-1 w-24 bg-brass mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="glass-card p-8 rounded-custom hover:border-brass transition-all duration-500 group">
                <div className="w-14 h-14 mb-6 text-brass">
                  <Zap size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tired of the Physical Toll</h3>
                <p className="text-slate-400 leading-relaxed">
                  Decades on the tools have built your name, but your body shouldn't have to pay the price for your portfolio.
                </p>
              </div>

              {/* Card 2 */}
              <div className="glass-card p-8 rounded-custom hover:border-brass transition-all duration-500">
                <div className="w-14 h-14 mb-6 text-brass">
                  <Users size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Legacy for Grandchildren</h3>
                <p className="text-slate-400 leading-relaxed">
                  Ensure your hard work translates into a lasting asset that supports the next three generations of your family.
                </p>
              </div>

              {/* Card 3 */}
              <div className="glass-card p-8 rounded-custom hover:border-brass transition-all duration-500">
                <div className="w-14 h-14 mb-6 text-brass">
                  <CircleDollarSign size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Capital Efficiency</h3>
                <p className="text-slate-400 leading-relaxed">
                  Move from trading time for money to making your retirement capital work as hard as you did in your prime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For & Social Proof */}
        <section className="py-24 bg-oxford border-y border-brass/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Who This Is For (And Who It's Not)</h2>
                <p className="text-xl text-slate-400 mb-8">We don't work with everyone. Our high-ticket acquisition system is designed specifically for a certain caliber of professional.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-emerald-500/20 text-emerald-500 p-1 rounded-full">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">THIS IS FOR YOU IF:</h4>
                      <p className="text-slate-400">You have 10+ years in a trade, have hit an income ceiling, and want to transition from doing the work to owning the asset.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-red-500/20 text-red-500 p-1 rounded-full">
                      <X size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">THIS IS NOT FOR YOU IF:</h4>
                      <p className="text-slate-400">You are looking for a "get rich quick" scheme, you aren't willing to invest in yourself, or you want to stay on the tools forever.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card p-8 rounded-custom border-l-4 border-l-brass">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Client" className="w-16 h-16 rounded-full object-cover border-2 border-brass" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="text-lg font-bold text-white">Mark T. - Former Master Electrician</h4>
                      <div className="flex text-brass">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 italic">"I spent 22 years destroying my knees pulling wire. The MagnaStratum system showed me how to leverage my industry knowledge to acquire a $2.4M HVAC company. I now work 20 hours a week ON the business, not IN it."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section id="process" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">The Strategic Handover</h2>
              <p className="text-slate-400">A disciplined approach to trade-to-equity transition.</p>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block process-line"></div>
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-brass text-oxford rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">1</div>
                  <h4 className="text-xl font-bold mb-3">Transition Audit</h4>
                  <p className="text-slate-400 text-sm">Comprehensive assessment of your current assets and professional standing.</p>
                </div>
                
                {/* Step 2 */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-brass text-oxford rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">2</div>
                  <h4 className="text-xl font-bold mb-3">The Shield</h4>
                  <p className="text-slate-400 text-sm">Our rigorous due diligence process protecting your capital from market volatility.</p>
                </div>
                
                {/* Step 3 */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-brass text-oxford rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">3</div>
                  <h4 className="text-xl font-bold mb-3">The Capital Strategy</h4>
                  <p className="text-slate-400 text-sm">Structuring your retirement reserves into diversified, high-yield business assets.</p>
                </div>
                
                {/* Step 4 */}
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-brass text-oxford rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">4</div>
                  <h4 className="text-xl font-bold mb-3">The Handover</h4>
                  <p className="text-slate-400 text-sm">Finalizing the shift to passive ownership and your new role as a Strategic Advisor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tripwire / Lead Gen Form */}
        <section id="form" className="py-24 bg-slate-900/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* The Offer (Left Side) */}
              <div>
                <div className="inline-block px-4 py-1 bg-brass/20 text-brass rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
                  Free Bonus Included ($297 Value)
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Get The <span className="text-brass">"Wrench to Wealth"</span> Acquisition Blueprint
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Complete your confidential Transition Audit today and we'll instantly send you our proprietary blueprint. Learn exactly how tradesmen are acquiring 7-figure businesses with zero prior M&A experience.
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-brass flex-shrink-0" size={24} />
                    <span>The 3-step framework to value any trade business</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-brass flex-shrink-0" size={24} />
                    <span>How to finance acquisitions without risking your home</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-brass flex-shrink-0" size={24} />
                    <span>The "Operator to Owner" 90-day transition plan</span>
                  </li>
                </ul>

                <div className="relative w-full max-w-md aspect-[4/3] rounded-custom overflow-hidden shadow-2xl border border-brass/20">
                  <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" alt="Blueprint Document" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford/90 via-oxford/40 to-transparent flex items-end p-6">
                    <div className="text-white font-bold text-xl">The Wrench to Wealth Blueprint™</div>
                  </div>
                </div>
              </div>

              {/* The Form (Right Side) */}
              <div className="glass-card p-8 lg:p-12 rounded-custom shadow-2xl border-t-4 border-t-brass relative">
                <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
                  LIMITED TIME FREE
                </div>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">Step 1: Transition Audit</h3>
                  <p className="text-slate-400 text-sm">Tell us where you are, so we can send you the right blueprint.</p>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="full_name" className="block text-sm font-medium text-slate-300">Full Name</label>
                    <input type="text" id="full_name" className="w-full bg-slate-800/50 border border-slate-700 rounded-custom text-white focus:ring-brass focus:border-brass p-3 outline-none transition-colors" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address (Where we send the Blueprint)</label>
                    <input type="email" id="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-custom text-white focus:ring-brass focus:border-brass p-3 outline-none transition-colors" placeholder="john@example.com" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="professional_license" className="block text-sm font-medium text-slate-300">Current Trade</label>
                      <input type="text" id="professional_license" className="w-full bg-slate-800/50 border border-slate-700 rounded-custom text-white focus:ring-brass focus:border-brass p-3 outline-none transition-colors" placeholder="e.g. Electrician" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="years_experience" className="block text-sm font-medium text-slate-300">Years Experience</label>
                      <select id="years_experience" className="w-full bg-slate-800/50 border border-slate-700 rounded-custom text-white focus:ring-brass focus:border-brass p-3 outline-none transition-colors appearance-none">
                        <option value="">Select range</option>
                        <option value="<10">Under 10 Years</option>
                        <option value="10-15">10 - 15 Years</option>
                        <option value="15-20">15 - 20 Years</option>
                        <option value="20+">20+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-brass text-oxford py-4 rounded-custom font-bold text-lg hover:bg-brass-dark transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2">
                      Get My Free Blueprint <ArrowRight size={20} />
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                      100% Secure. We never share your information.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-oxford border-t border-brass/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brass flex items-center justify-center rounded-custom">
                <span className="text-oxford font-serif font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-brass uppercase">MagnaStratum</span>
            </div>
            
            <div className="text-slate-500 text-sm text-center md:text-left">
              © 2024 MagnaStratum Advisor Group. All rights reserved. Professional transition consultancy.
            </div>
            
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-brass transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brass transition-colors">Terms of Engagement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

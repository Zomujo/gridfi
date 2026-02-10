import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-brand-navy/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-gold rounded-sm rotated-3" />
            <span className="text-xl font-bold tracking-tight text-white">GridFi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#why-us" className="hover:text-white transition-colors">Why Us</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="#tech" className="hover:text-white transition-colors">Technology</Link>
            <Link href="#installers" className="hover:text-white transition-colors">For Installers</Link>
          </div>

          <Link 
            href="#contact"
            className="px-5 py-2.5 bg-brand-gold text-brand-navy font-bold text-sm rounded hover:bg-yellow-400 transition-colors"
          >
            Get My Quote
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ghanaian-roof-solar.jpg"
            alt="Solar panels on a Ghanaian roof"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              Pay for Power Briefly.<br />
              <span className="text-brand-gold">Own It for Decades.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              We fund 100% of your Solar and Battery setup. You pay a predictable monthly fee and take full ownership in 3 to 5 years. Enjoy uninterrupted power for decades.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#quote"
                className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded hover:bg-yellow-400 transition-colors"
              >
                Get My Quote
              </Link>
              <Link 
                href="#installers"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium text-lg rounded border border-white/20 hover:bg-white/20 transition-colors"
              >
                Installer Network
              </Link>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              The Smartest Way to Power <br/>Your Home or Business.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Zero Upfront Capital",
                desc: "Keep your working capital for your business. We pay 100% of the equipment and installation costs. You simply pay for the service.",
                icon: (
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Cheaper Than The Alternative",
                desc: "Our monthly lease is designed to be 30-40% lower than the combined cost of ECG tariffs and diesel generator fuel.",
                icon: (
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: "99.9% Uptime Guarantee",
                desc: "Say goodbye to 'Dumsor.' Our smart-managed battery systems switch seamlessly in milliseconds. Your machines never stop running.",
                icon: (
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Path to Ownership",
                desc: "This isn't just a rental. After your lease term (3-5 years), you own the system 100%. Free power for the next 15 years.",
                icon: (
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <ScrollReveal key={i} className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-colors">
                <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-brand-surface relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              Turn the Lights On in 3 Steps.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-border z-0" />

            {[
              {
                step: "01",
                title: "Get Prequalified (2 Minutes)",
                desc: "Fill out our simple form. We analyze your energy usage and diesel spend to build a custom savings plan."
              },
              {
                step: "02",
                title: "Professional Installation",
                desc: "We dispatch a Certified SREP Partner to install your Tier-1 Solar & Battery system. No wires, no mess, no downtime."
              },
              {
                step: "03",
                title: "Pay As You Save",
                desc: "Your system goes live. You pay a fixed monthly fee via Mobile Money or Bank Transfer. We monitor the system 24/7."
              }
            ].map((item, i) => (
              <ScrollReveal key={i} className="relative z-10">
                <div className="bg-brand-navy p-8 rounded-xl border border-brand-border h-full">
                  <span className="text-brand-gold font-mono text-xl mb-4 block">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GridFi Engine Section */}
      <section id="tech" className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <span className="text-brand-gold font-bold tracking-wider text-sm uppercase mb-4 block">Technology</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Powered by<br/>The GridFi Engine.
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We don't just install panels; we manage energy. Every system is equipped with our proprietary Smart Controller, which automatically optimizes your power flow.
              </p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full" />
                  Prioritizes free solar energy
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full" />
                  Manages battery health
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full" />
                  Minimizes grid consumption
                </li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="relative h-[400px] lg:h-[500px] bg-brand-surface rounded-2xl border border-brand-border overflow-hidden group">
             {/* Abstract Engine Visual */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-gold)_0%,_transparent_70%)] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
             <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0.5 opacity-20">
               {Array.from({ length: 36 }).map((_, i) => (
                 <div key={i} className="bg-brand-navy" />
               ))}
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-24 h-24 rounded-full border-2 border-brand-gold flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(245,183,49,0.3)] bg-brand-navy">
                  <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-brand-gold font-mono text-xs animate-pulse">OPTIMIZING FLOW...</div>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* For Installers Section */}
      <section id="installers" className="py-24 bg-brand-surface relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
             <Image
                src="/local-installer-main.webp"
                alt="Local solar installer working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/30" />
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solar Installers: Stop Losing Deals to "No Cash."
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              You are the technical experts; we are the financial engine. Partner with GridFi to offer your clients instant Lease-to-Own financing. We pay you 100% of the hardware and installation cost upfront. You focus on the roof; we handle the risk.
            </p>
            <Link 
                href="#partner-apply"
                className="inline-block px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded hover:bg-yellow-400 transition-colors"
              >
                Apply to be a Partner
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
           <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Built for the African Industry.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Factories", desc: "Protect inventory from spoilage", img: "/warehouse-2.jpeg" },
              { label: "Private Clinics", desc: "Ensure life-saving equipment online", img: "/local-installer-1.webp" }, // Using placeholder if specific clinic img missing, or just generic tech
              { label: "Schools & Offices", desc: "Reduce overheads & boost profit", img: "/spintex-warehouse.jpg" },
              { label: "Gated Communities", desc: "Reliable power, no noise", img: "/gated_community.jpg" },
            ].map((item, i) => (
              <ScrollReveal key={i} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            <ScrollReveal>
              <div className="bg-brand-navy p-6 rounded-lg border border-brand-border">
                <h3 className="text-lg font-bold text-white mb-3">What happens if I miss a payment?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We offer a grace period for all clients. However, our systems are "Smart-Managed," meaning service may be temporarily paused if accounts are significantly overdue, similar to a prepaid meter. Power is restored instantly upon payment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-brand-navy p-6 rounded-lg border border-brand-border">
                <h3 className="text-lg font-bold text-white mb-3">Who handles maintenance?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We do. Your monthly fee includes full insurance and maintenance. If an inverter breaks or a panel needs cleaning, our partner network fixes it at no extra cost to you.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-6 h-6 bg-brand-gold rounded-sm rotated-3" />
              <span className="text-lg font-bold text-white">GridFi Ghana Ltd.</span>
            </div>
            <p className="text-gray-500 text-sm">Accra, Ghana</p>
            <p className="text-gray-500 text-sm">Licensed by Energy Commission (Pending) | SREP Financing Partner</p>
          </div>
          
          <div className="flex flex-col gap-2">
             <a href="mailto:hello@GridFi.com" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">hello@GridFi.com</a>
             <button className="text-gray-400 hover:text-brand-gold text-sm transition-colors">WhatsApp Us</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

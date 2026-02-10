import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import AnimatedGradientMesh from "./components/AnimatedGradientMesh";
import FloatingParticles from "./components/FloatingParticles";
import MagneticButton from "./components/MagneticButton";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import WhyUsSection from "./components/WhyUsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TechSection from "./components/TechSection";
import InstallersSection from "./components/InstallersSection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <SmoothScroll />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        {/* Animated Gradient Mesh Background */}
        <AnimatedGradientMesh />
        
        {/* Background Image */}
        <div className="absolute inset-0 z-2">
          <Image
            src="/ghanaian-roof-solar.jpg"
            alt="Solar panels on a Ghanaian roof"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/70 to-brand-navy/30" />
        </div>

        {/* Floating Particles */}
        <FloatingParticles />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
              Pay for Power Briefly.<br />
              <span className="inline-block bg-clip-text text-transparent bg-linear-to-r from-brand-gold via-yellow-400 to-brand-gold bg-size-[200%_auto] animate-[shimmer_3s_linear_infinite]">
                Own It for Decades.
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              We fund <span className="text-white font-medium">100%</span> of your Solar and Battery setup. You pay a predictable monthly fee and take full ownership in <span className="text-white font-medium">3 to 5 years</span>. Enjoy uninterrupted power for decades.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="#quote" variant="primary">
                Get My Quote
              </MagneticButton>
              <MagneticButton href="#installers" variant="secondary">
                Installer Network
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce text-white/40 hover:text-white/60 transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* GridFi Engine Section */}
      <TechSection />

      {/* For Installers Section */}
      <InstallersSection />

      {/* Social Proof */}
      <SocialProofSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

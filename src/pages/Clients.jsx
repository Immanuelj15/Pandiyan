import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterReveal from '../components/TypewriterReveal';
import MagneticButton from '../components/MagneticButton';
import ltLogo from '../assets/lt_logo.png';
import flowserveLogo from '../assets/flowserve_logo.png';
import kcpLogo from '../assets/kcp_logo.png';
import flsLogo from '../assets/flsmidth_logo.png';
import cementIndustryImg from '../assets/cement_industry.png';

export default function Clients() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Quality (ISO 9001:2015) | Pandyan Industrial Equipments Pvt. Ltd.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover our valued clients like L&T, Flowserve, KCP, and FLSmidth, and our ISO 9001:2015 certified quality checking procedures.");
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    { name: 'L&T', fullname: 'Larsen & Toubro Limited', location: 'Heavy Engineering Division', logo: ltLogo, logoClass: 'scale-[1.35]' },
    { name: 'Flowserve', fullname: 'Flowserve India Pvt. Ltd.', location: 'Industrial Pump & Valve Division', logo: flowserveLogo },
    { name: 'KCP', fullname: 'The KCP Limited', location: 'Cement & Sugar Machinery Division', logo: kcpLogo, logoClass: 'scale-[1.45]' },
    { name: 'FLSmidth', fullname: 'FLSmidth Private Limited', location: 'Mineral & Cement Spares Division', logo: flsLogo }
  ];

  return (
    <div className="relative">

      {/* HEADER WITH SCROLL PARALLAX */}
      <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-slate-950 -mt-20">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={cementIndustryImg}
            alt="Clients Portfolio Banner"
            className="w-full h-full object-cover opacity-55"
            style={{
              transform: `scale(1.1) translateY(${scrollY * 0.08}px)`,
            }}
          />
          {/* Lighter gradient overlay lets image breathe */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950 z-10" />
          <div className="absolute inset-0 bg-blueprint-dark opacity-20 z-10" />
        </div>

        {/* Floating blue glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20 space-y-4">
          {/* "Partnership" — large prominent badge */}
          <ScrollReveal animation="fade-down" duration={0.7}>
            <span className="inline-block text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-white uppercase bg-brand-blue/30 border border-brand-blue/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Partnership
            </span>
          </ScrollReveal>

          <TypewriterReveal
            text="Quality"
            mode="char"
            speed={45}
            delayStart={300}
            triggerOnce={false}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase drop-shadow-[0_6px_22px_rgba(0,0,0,0.95)] block"
          />
          
          {/* Accent Line with delay */}
          <ScrollReveal animation="fade-up" delay={1400} duration={0.8} triggerOnce={false}>
            <div className="h-1 w-16 bg-brand-blue mx-auto mt-2" />
          </ScrollReveal>

          {/* Sub-tagline */}
          <ScrollReveal animation="fade-up" delay={1600} duration={0.8} triggerOnce={false}>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-medium leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pt-2">
              ISO 9001:2015 certified manufacturing partner to global engineering leaders like L&T, Flowserve, and FLSmidth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── QUALITY STANDARDS — Pure white + subtle grid ── */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 300) * 0.05}px)` }} 
        />
        
        {/* Soft glow accents */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left side: Redesigned ISO Badge Card */}
            <ScrollReveal animation="fade-right" className="lg:col-span-5 flex justify-center w-full">
              <div className="group relative bg-white border border-slate-200 p-9 rounded-3xl transition-all duration-400 text-center max-w-sm flex flex-col items-center shadow-md hover:shadow-xl hover:-translate-y-1.5">
                
                {/* Top border colored line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-brand-blue to-sky-400 rounded-t-3xl" />
                
                <div className="bg-brand-blue/8 p-5 rounded-full border border-brand-blue/15 inline-block mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <Award className="h-16 w-16 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">ISO 9001:2015</h3>
                <span className="text-xs font-bold tracking-widest text-brand-blue uppercase block mb-3">
                  Certified Quality System
                </span>
                
                <div className="h-px w-24 bg-slate-100 my-4" />
                
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Certified by accredited registrars for the manufacturing and supply of high-precision heavy engineering industrial components and assemblies.
                </p>
              </div>
            </ScrollReveal>

            {/* Right side: Quality Policies */}
            <ScrollReveal animation="fade-left" className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block">
                Quality Policy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Strict Quality Testing Standards
              </h2>
              <div className="h-1 w-12 bg-brand-blue" />
              <p className="text-sm text-slate-500 leading-relaxed">
                At Pandyan Industrial Equipments, quality is integrated into every step of the process. We operate under a rigorous Quality Assurance Plan (QAP) starting from raw material chemistry checks to final stage inspection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <div className="group flex items-start space-x-3 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
                  <CheckCircle2 className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors duration-300">
                      Dimensional Reports
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      Complete 100% inspection sheets with calibrated digital measuring tools.
                    </p>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
                  <CheckCircle2 className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors duration-300">
                      Non-Destructive Testing
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      Dye penetrant and magnetic particle testing for critical crack checks.
                    </p>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
                  <CheckCircle2 className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors duration-300">
                      Material Certification
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      Complete chemical and metallurgy verification with mill certificates.
                    </p>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300">
                  <CheckCircle2 className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors duration-300">
                      Final Run-Out Reports
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      Dial indicator checking for strict Concentricity and Axial run-outs.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CLIENTELE GRID — Pure white + subtle grid ── */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 800) * 0.05}px)` }} 
        />
        
        {/* Soft glow accents */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block mb-4">
                Our Clientele
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Trusted by Industry Leaders
              </h2>
              <div className="h-1 w-14 bg-brand-blue mx-auto mb-4" />
              <p className="text-base text-slate-500 leading-relaxed">
                We machine and supply high precision components to some of the largest names in the engineering sector.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="h-full flex">
                <div className="group flex flex-col justify-between items-center p-8 bg-white border border-slate-200 transition-all duration-400 shadow-sm hover:shadow-xl hover:-translate-y-1.5 min-h-[190px] text-center w-full rounded-2xl relative overflow-hidden">
                  
                  {/* Subtle top border line on card hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  {client.logo ? (
                    <div className="h-16 flex items-center justify-center mb-5 overflow-hidden transition-all duration-300">
                      <img 
                        src={client.logo} 
                        alt={client.fullname} 
                        loading="lazy" 
                        className={`max-h-full max-w-[180px] object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 ${client.logoClass || ''}`} 
                      />
                    </div>
                  ) : (
                    <span className="text-slate-900 font-extrabold text-2xl tracking-wider uppercase mb-3">{client.name}</span>
                  )}
                  
                  <div className="space-y-1">
                    <span className="text-xs text-brand-blue font-extrabold tracking-wide uppercase block">
                      {client.fullname}
                    </span>
                    <span className="text-[10px] text-slate-400 tracking-wider font-bold uppercase block">
                      {client.location}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET A QUOTE CTA ── */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Parallax grid */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 900) * 0.04}px)` }}
        />
        {/* Floating glow orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/8 rounded-full blur-[110px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-400/8 rounded-full blur-[110px] pointer-events-none z-0" />

        <ScrollReveal animation="scale-up" duration={1.2}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center shadow-xl border border-slate-200/80 bg-white/90 backdrop-blur-xl">

              {/* Subtle light beam */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-100/40 to-transparent opacity-70 pointer-events-none" />
              {/* Top blue accent line */}
              <div className="absolute top-0 left-12 right-12 h-0.5 rounded-b-full bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

              <div className="relative z-10 space-y-5">
                {/* Badge */}
                <ScrollReveal animation="fade-down" duration={0.7}>
                  <span className="text-[10px] font-black tracking-widest uppercase text-brand-blue bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block animate-pulse">
                    Start a Project
                  </span>
                </ScrollReveal>

                {/* Heading — typewriter */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <TypewriterReveal
                    text="Ready to Work With"
                    mode="char"
                    speed={45}
                    delayStart={200}
                    triggerOnce={false}
                    className="block"
                  />
                  <TypewriterReveal
                    text="Pandyan Industrial?"
                    mode="char"
                    speed={45}
                    delayStart={1000}
                    triggerOnce={false}
                    className="text-brand-blue block"
                  />
                </h2>

                {/* Description — word-by-word typewriter */}
                <div className="max-w-xl mx-auto">
                  <TypewriterReveal
                    text="Get a detailed engineering quote from our team. We review your 2D/3D drawings and provide accurate machining feasibility and cost estimates."
                    mode="word"
                    speed={36}
                    delayStart={1800}
                    triggerOnce={false}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed"
                  />
                </div>

                {/* Buttons */}
                <ScrollReveal animation="fade-up" delay={3400} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <MagneticButton>
                      <Link
                        to="/contact"
                        className="relative inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-blue/35 hover:shadow-xl overflow-hidden group/btn"
                      >
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-out" />
                        <span className="relative z-10">Get a Quote</span>
                        <ArrowRight className="h-4 w-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>
                    <MagneticButton>
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-700 hover:bg-brand-blue hover:text-white hover:border-brand-blue font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span>View Our Projects</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RotateCw, Cpu, RefreshCw, Component, Sliders, Wrench, ArrowRight, CheckCircle, Settings, Layers, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterReveal from '../components/TypewriterReveal';
import MagneticButton from '../components/MagneticButton';
import product1 from '../assets/product_1.jpg';
import product2 from '../assets/product_2.jpg';
import product3 from '../assets/product_3.jpg';
import product4 from '../assets/product_4.jpg';
import product5 from '../assets/product_5.jpg';
import product6 from '../assets/product_6.jpg';
import product7 from '../assets/product_7.jpg';
import product8 from '../assets/product_8.jpg';
import product9 from '../assets/product_9.jpg';
import heroBanner from '../assets/process_industry.jpg'; // Using a better banner if needed

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our heavy machining capabilities including Vertical Turning (VTL), Horizontal Boring, CNC Machining, and mechanical component reconditioning.");
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Vertical Turning (VTL)',
      icon: <RotateCw className="h-8 w-8 text-brand-blue" />,
      img: product1,
      desc: 'High-precision turning and facing operations for large diameter industrial components. Ideal for bearing shells, support rollers, and ring gears.',
      specs: [
        'Capacity: Up to 2.5 Meters diameter',
        'Tolerances: Down to 20 microns accuracy',
        'Applications: Bearing housing boring, flange facing, taper boring'
      ]
    },
    {
      title: 'Horizontal Boring',
      icon: <Sliders className="h-8 w-8 text-brand-blue" />,
      img: product3,
      desc: 'Highly accurate boring, milling, and drilling operations for heavy components. Best suited for gearboxes, cylinder blocks, and side frames.',
      specs: [
        'Spindle Travel: Up to 1.5 Meters',
        'Features: Dual rotary table configurations',
        'Applications: Shaft bore alignments, pocket milling, indexing'
      ]
    },
    {
      title: 'CNC Machining',
      icon: <Cpu className="h-8 w-8 text-brand-blue" />,
      img: product2,
      desc: 'Complex 3-axis and CNC-controlled precision machining. Ensures consistent quality and absolute repeatability for high-volume component batches.',
      specs: [
        'Controls: Advanced Fanuc / Siemens systems',
        'Repeatability: ± 0.005 mm precision',
        'Applications: Valve bodies, impellers, custom components'
      ]
    },
    {
      title: 'Reconditioning Services',
      icon: <RefreshCw className="h-8 w-8 text-brand-blue" />,
      img: product4,
      desc: 'Full restoration and refurbishment of worn-out industrial machinery components. Extends operational life and reduces capital expenditure.',
      specs: [
        'Scope: Wear-ring replacements, metal spraying, re-boring',
        'Benefit: Savings up to 60% vs new component costs',
        'Applications: Sugar mill shafts, cement kiln rollers, journals'
      ]
    },
    {
      title: 'Assembly Services',
      icon: <Component className="h-8 w-8 text-brand-blue" />,
      img: product5,
      desc: 'Complete mechanical assembly of large-scale sub-assemblies. Includes torque-tightening, alignment tests, and final inspection reports.',
      specs: [
        'Capacity: Up to 20-Ton assemblies',
        'Tests: Dynamic run-outs and backlash checking',
        'Applications: Support roller assemblies, shredders, gearboxes'
      ]
    },
    {
      title: 'Grinding Services',
      icon: <Wrench className="h-8 w-8 text-brand-blue" />,
      img: product6,
      desc: 'Precision grinding and finishing operations to achieve ultra-smooth surface finishes and tight cylindrical tolerances.',
      specs: [
        'Finish: Mirror-finish surface grinds',
        'Types: Cylindrical and taper bore grinding',
        'Applications: Valve taper seating, shaft journals, slide ways'
      ]
    },
    {
      title: 'Large Valve Machining',
      icon: <Settings className="h-8 w-8 text-brand-blue" />,
      img: product7,
      desc: 'Specialized machining for massive industrial valves and flow control bodies. Meeting the strictest tolerances for oil & gas and power sectors.',
      specs: [
        'Capacity: Heavy-duty multi-axis setups',
        'Finish: Micro-inch seating surfaces',
        'Applications: Gate valves, control bodies, high-pressure vessels'
      ]
    },
    {
      title: 'Heavy Casing Machining',
      icon: <Layers className="h-8 w-8 text-brand-blue" />,
      img: product8,
      desc: 'Precision boring and milling of heavy gearboxes and industrial casings. Ensuring perfect alignment and surface finishes.',
      specs: [
        'Handling: Custom crane-assisted rigging',
        'Alignment: Laser-guided coordinate boring',
        'Applications: Cement drives, turbine housings, crusher bodies'
      ]
    },
    {
      title: 'Custom Castings Machining',
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      img: product9,
      desc: 'End-to-end machining of complex, multi-flange custom castings for specialized industrial applications.',
      specs: [
        'Materials: Iron, carbon steel, and alloy castings',
        'Process: Integrated roughing to final finish',
        'Applications: Pump casings, manifold blocks, custom heavy engineering'
      ]
    }
  ];

  return (
    <div className="relative">

      {/* HEADER WITH SCROLL PARALLAX */}
      <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-slate-950 -mt-20">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={heroBanner}
            alt="Services Machining Banner"
            className="w-full h-full object-cover opacity-55"
            style={{
              transform: `scale(1.1) translateY(${scrollY * 0.08}px)`,
            }}
          />
          {/* Lighter overlays so image is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950/80 z-10" />
          <div className="absolute inset-0 bg-blueprint-dark opacity-20 z-10" />
        </div>

        {/* Floating blue orbs */}
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/5 w-56 h-56 bg-sky-400/8 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20 space-y-4">

          {/* "Our Services" — large prominent badge */}
          <ScrollReveal animation="fade-down" duration={0.7}>
            <span className="inline-block text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-white uppercase bg-brand-blue/30 border border-brand-blue/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Our Services
            </span>
          </ScrollReveal>

          {/* Main title — char-by-char, pure WHITE, strong shadow */}
          <TypewriterReveal
            text="Machining Capabilities"
            mode="char"
            speed={45}
            delayStart={300}
            triggerOnce={false}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase drop-shadow-[0_6px_20px_rgba(0,0,0,0.95)] block"
          />

          {/* Blue accent underline */}
          <ScrollReveal animation="fade-up" delay={1500} duration={0.6}>
            <div className="h-1 w-16 bg-brand-blue mx-auto mt-2" />
          </ScrollReveal>

          {/* Sub-tagline */}
          <ScrollReveal animation="fade-up" delay={1700} duration={0.8}>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto pt-1">
              ISO 9001:2015 certified machining — VTL, CNC, Boring &amp; Reconditioning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES CARDS — Subtle blue-tinted bg + grid ── */}
      <section className="py-20 relative overflow-hidden border-b border-slate-100" style={{ background: 'linear-gradient(160deg, #f8fbff 0%, #eef4ff 40%, #f0f9ff 100%)' }}>
        {/* Parallax Grid Background */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0 opacity-60"
          style={{ transform: `translateY(${(scrollY - 300) * 0.05}px)` }}
        />

        {/* Soft glow accents */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-black tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/25 px-6 py-2.5 rounded-full inline-block mb-5 shadow-sm">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                <TypewriterReveal
                  text="Precision Machining"
                  mode="char"
                  speed={40}
                  delayStart={200}
                  triggerOnce={false}
                  className="block"
                />
                <TypewriterReveal
                  text="& Reconditioning"
                  mode="char"
                  speed={40}
                  delayStart={1100}
                  triggerOnce={false}
                  className="text-brand-blue block"
                />
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-sky-400 mx-auto rounded-full mb-5" />
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                We leverage heavy industrial machinery and certified engineers to deliver component solutions that meet strict global standards.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 90} className="h-full flex">
                <div className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col w-full shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                  {/* Top gradient bar — grows on hover */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-brand-blue to-sky-400 group-hover:h-2 transition-all duration-300" />

                  {/* Card Image */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={svc.img} 
                      alt={svc.title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 relative bg-white">
                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors duration-300 leading-tight">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-snug mb-4 flex-1 relative z-10 font-medium">
                      {svc.desc}
                    </p>

                    {/* Specs */}
                    <div className="border-t border-slate-100 pt-4 relative z-10">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">
                        Technical Specifications
                      </span>
                      <ul className="space-y-2">
                        {svc.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-blue shrink-0 mt-0.5" />
                            <span className="font-medium leading-tight">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA link */}
                    <div className="mt-4 pt-4 border-t border-slate-100 relative z-10">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue uppercase tracking-wider group/link hover:text-brand-blue-dark transition-colors"
                      >
                        <span>Get a Quote</span>
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover/link:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — White + subtle grid ── */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Parallax Grid Background */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 600) * 0.04}px)` }}
        />
        {/* Floating gradient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-blue/8 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-sky-400/8 rounded-full blur-[100px] pointer-events-none z-0" />

        <ScrollReveal animation="scale-up" duration={1.2}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center shadow-xl border border-slate-200/80 bg-white/90 backdrop-blur-xl group">

              {/* Subtle light beam highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-100/40 to-transparent opacity-70 pointer-events-none" />
              {/* Top blue accent line */}
              <div className="absolute top-0 left-12 right-12 h-0.5 rounded-b-full bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

              <div className="relative z-10 space-y-5">
                {/* Badge */}
                <ScrollReveal animation="fade-down" duration={0.7}>
                  <span className="text-[10px] font-black tracking-widest uppercase text-brand-blue bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block animate-pulse">
                    Custom Requirements
                  </span>
                </ScrollReveal>

                {/* Heading — char-by-char typewriter, two lines */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <TypewriterReveal
                    text="Have a Custom Technical"
                    mode="char"
                    speed={42}
                    delayStart={200}
                    triggerOnce={false}
                    className="block"
                  />
                  <TypewriterReveal
                    text="Requirement?"
                    mode="char"
                    speed={42}
                    delayStart={1100}
                    triggerOnce={false}
                    className="text-brand-blue block"
                  />
                </h2>

                {/* Description — word-by-word typewriter */}
                <div className="max-w-xl mx-auto">
                  <TypewriterReveal
                    text="Our engineers review 2D/3D blueprints and provide detailed feasibility & machining quotes. Contact us to discuss your next project."
                    mode="word"
                    speed={36}
                    delayStart={1900}
                    triggerOnce={false}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed"
                  />
                </div>

                {/* Buttons — appear after typing finishes */}
                <ScrollReveal animation="fade-up" delay={3600} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <MagneticButton>
                      <Link
                        to="/contact"
                        className="relative inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-black px-9 py-4 rounded-xl shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-blue/35 hover:shadow-xl overflow-hidden group/btn"
                      >
                        {/* Shine sweep */}
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-out" />
                        <span className="relative z-10">Get Custom Quote</span>
                        <ArrowRight className="h-4 w-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>
                    <MagneticButton>
                      <Link
                        to="/infrastructure"
                        className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-700 hover:bg-brand-blue hover:text-white hover:border-brand-blue font-bold px-9 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span>View Infrastructure</span>
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


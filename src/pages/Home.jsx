import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, Users, Calendar, Award, Layers, Pyramid } from 'lucide-react';
import heroBg from '../assets/hero_bg.webp';
import logoImg from '../assets/logo.webp';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import TypewriterReveal from '../components/TypewriterReveal';
import MagneticButton from '../components/MagneticButton';
import ltLogo from '../assets/lt_logo.png';
import flowserveLogo from '../assets/flowserve_logo.png';
import kcpLogo from '../assets/kcp_logo.png';
import flsLogo from '../assets/flsmidth_logo.png';

import supportRollerImg from '../assets/support_roller.webp';
import bearingShellImg from '../assets/bearing_shell.webp';
import shaftRotorImg from '../assets/shaft_rotor.webp';
import htdGearsImg from '../assets/htd_gears.webp';

import cementIndustryImg from '../assets/cement_industry.png';
import sugarIndustryImg from '../assets/sugar_industry.jpg';
import valveIndustryImg from '../assets/valve_industry.jpg';
import processIndustryImg from '../assets/process_industry.jpg';

export default function Home() {
  const heroSliderImages = [
    heroBg, supportRollerImg, bearingShellImg, shaftRotorImg, htdGearsImg,
  ];

  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Pandyan Industrial Equipments Pvt. Ltd. in Chennai specializes in heavy machining, VTL turning, and custom spares for Cement, Sugar, and Valve industries.");
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSliderImages.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { counter: '20+', label: 'Years of Excellence', desc: 'Established in 2005', isCount: true },
    { counter: null, label: 'ISO 9001:2015', desc: 'Certified Quality System', isCount: false },
    { counter: '8000+', label: 'Sq.Ft. Facility', desc: 'State-of-the-Art Unit', isCount: true },
    { counter: '20+', label: 'Ton EOT Cranes', desc: 'Material Handling Capacity', isCount: true },
    { counter: '4+', label: 'Industry Leaders', desc: 'L&T, Flowserve, KCP & More', isCount: true },
  ];

  const industries = [
    {
      title: 'Cement Industry',
      description: 'Support Rollers, Bearing Shells, HTD Components, and custom kiln/mill parts.',
      details: ['Support Rollers', 'Bearing Shells', 'HTD Components'],
      image: cementIndustryImg,
      color: 'from-blue-900/80',
      gradient: 'group-hover:from-blue-900/60',
    },
    {
      title: 'Sugar Industry',
      description: 'Mill Spares, Shredder Assemblies, Centrifugal Components with heavy-duty wear resistance.',
      details: ['Mill Spares', 'Shredder Assemblies', 'Centrifugal Components'],
      image: sugarIndustryImg,
      color: 'from-amber-950/80',
      gradient: 'group-hover:from-amber-950/60',
    },
    {
      title: 'Valve Industry',
      description: 'High precision Valve Body Machining, Taper Bore Grinding, and pressure-seal components.',
      details: ['Valve Body Machining', 'Taper Bore Grinding', 'Pressure-seal components'],
      image: valveIndustryImg,
      color: 'from-emerald-950/80',
      gradient: 'group-hover:from-emerald-950/60',
    },
    {
      title: 'Process Industries',
      description: 'Custom heavy manufacturing, structural fabrication, and special-purpose components.',
      details: ['Custom manufacturing', 'Structural fabrication', 'Special-purpose parts'],
      image: processIndustryImg,
      color: 'from-purple-950/80',
      gradient: 'group-hover:from-purple-950/60',
    },
  ];

  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'Precision Engineering',
      desc: 'High accuracy machining and strict dimensional tolerances for heavy components.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Quality Assurance',
      desc: 'ISO 9001:2015 certified production lines and precision inspection protocols.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Skilled Workforce',
      desc: 'Experienced mechanical engineers and technicians specializing in large boring & turning.'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Timely Delivery',
      desc: 'Reliable planning, committed schedules, and seamless shipment tracking.'
    }
  ];

  const featuredProjects = [
    {
      name: 'Support Roller Assembly',
      desc: 'Heavy-duty roller assembly for Cement Plants',
      tag: 'Cement Industry',
      imgSrc: supportRollerImg
    },
    {
      name: 'Bearing Shell (Machined)',
      desc: 'Precision boring and surface grinding of massive shells',
      tag: 'Process Industry',
      imgSrc: bearingShellImg
    },
    {
      name: 'Shaft & Rotor Assembly',
      desc: 'High-speed dynamic alignment and turning',
      tag: 'Sugar Industry',
      imgSrc: shaftRotorImg
    },
    {
      name: 'HTD 31.5 - Cement Plant',
      desc: 'Specialized heavy torque drive machining',
      tag: 'Cement Industry',
      imgSrc: htdGearsImg
    }
  ];

  const clients = [
    { name: 'L&T', subtitle: 'Larsen & Toubro', logo: ltLogo, logoClass: 'scale-[1.3]', division: 'Heavy Engineering', delivers: 'Rotary Kiln Rollers', year: 'Since 2012' },
    { name: 'Flowserve', subtitle: 'Flowserve India', logo: flowserveLogo, division: 'Pump & Valve Division', delivers: 'Precision Valve Bodies', year: 'Since 2008' },
    { name: 'KCP', subtitle: 'The KCP Ltd', logo: kcpLogo, logoClass: 'scale-[1.4]', division: 'Cement & Sugar Machinery', delivers: 'Heavy Boring Components', year: 'Since 2015' },
    { name: 'FLSmidth', subtitle: 'FLSmidth Private Ltd', logo: flsLogo, division: 'Mineral & Cement Spares', delivers: 'Mill Bearing Shells', year: 'Since 2010' }
  ];

  return (
    <div className="relative">

      {/* HERO */}
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950 -mt-20"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      >
        {/* ── Slider bg — clearly visible at 70% opacity ── */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {heroSliderImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeHeroSlide === idx ? 'opacity-70 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={img}
                alt="Heavy Machining Background"
                className="w-full h-full object-cover"
                style={{
                  transform: isHovered
                    ? `scale(1.08) translate(${mousePos.x * -12}px, ${mousePos.y * -12}px) translateY(${scrollY * 0.06}px)`
                    : `scale(1.05) translateY(${scrollY * 0.06}px)`,
                  transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}
              />
            </div>
          ))}
          {/* Lighter overlay — image stays clearly visible */}
          <div className="absolute inset-0 bg-slate-950/30 z-20" />
          {/* Gradient: strong top+bottom fade, transparent middle */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/10 to-slate-950/80 z-20" />
          {/* Side vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40 z-20" />
        </div>

        {/* ── Floating blue glow orbs ── */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none z-20 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-sky-500/8 rounded-full blur-3xl pointer-events-none z-20 animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '1.2s' }} />

        {/* ── Hero Content ── */}
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center pt-24 space-y-7">

          {/* ISO badge */}
          <ScrollReveal animation="fade-down" delay={100} duration={0.8}>
            <div className="inline-flex items-center space-x-2 bg-brand-blue/15 border border-brand-blue/40 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-brand-blue uppercase backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </ScrollReveal>

          {/* Main headline — typewriter char-by-char, staggered per line */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black tracking-tight leading-[1.1] uppercase drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]">
            <TypewriterReveal
              text="Precision Engineering."
              mode="char"
              speed={42}
              delayStart={300}
              triggerOnce={true}
              className="text-brand-blue block"
            />
            <TypewriterReveal
              text="Built for Industries."
              mode="char"
              speed={42}
              delayStart={1350}
              triggerOnce={true}
              className="text-brand-blue block"
            />
            <TypewriterReveal
              text="Since 2005."
              mode="char"
              speed={55}
              delayStart={2350}
              triggerOnce={true}
              className="text-white block"
            />
          </h1>

          {/* Sub-paragraph — word-by-word typewriter */}
          <div className="max-w-2xl mx-auto">
            <TypewriterReveal
              text="ISO 9001:2015 certified heavy machining, custom fabrication, and high-precision spares for Cement, Sugar, and Valve partners globally."
              mode="word"
              speed={36}
              delayStart={3100}
              triggerOnce={true}
              className="text-base sm:text-lg text-slate-200 font-medium"
            />
          </div>

          {/* CTA Buttons */}
          <ScrollReveal animation="fade-up" delay={5000} duration={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-center px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 hover:ring-2 hover:ring-brand-blue/40 hover:ring-offset-2 hover:ring-offset-slate-950"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/projects"
                  className="border border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-brand-blue hover:text-white hover:border-brand-blue font-bold text-center px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center relative hover:ring-2 hover:ring-brand-blue/35 hover:ring-offset-2 hover:ring-offset-slate-950"
                >
                  Explore Projects
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Scroll-down indicator */}
          <ScrollReveal animation="fade-up" delay={5400} duration={0.6}>
            <div className="flex flex-col items-center gap-1 pt-3 opacity-60">
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-brand-blue/70 to-transparent animate-pulse" />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Slide dot indicators ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroSliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveHeroSlide(idx)}
              className={`rounded-full transition-all duration-500 ${
                activeHeroSlide === idx
                  ? 'w-6 h-2 bg-brand-blue shadow-md shadow-brand-blue/50'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="pb-14 pt-0 -mt-20 sm:-mt-24 relative z-40">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100} className="h-full flex">
                <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 hover:border-brand-blue/30 transition-all duration-500 flex flex-col bg-white w-full hover-card-trigger">
                  <div className="h-44 w-full bg-slate-900 relative overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      loading="lazy"
                      onLoad={(e) => { e.target.classList.remove('opacity-0'); e.target.classList.add('opacity-85'); }}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 opacity-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20 pointer-events-none" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-3">
                        {industry.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {industry.description}
                      </p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <ul className="space-y-1.5">
                        {industry.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-700 font-medium flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-2 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS BAR */}
      <section className="relative z-30 py-16 sm:py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #07111f 0%, #050d18 100%)', borderTop: '1px solid rgba(30,58,138,0.35)', borderBottom: '1px solid rgba(30,58,138,0.35)' }}>

        {/* Layer 1 — parallax small grid (white, subtle) */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0 opacity-[0.07]"
          style={{ transform: `translateY(${(scrollY - 800) * 0.04}px)` }}
        />
        {/* Layer 2 — static bright blue-tinted grid for visibility */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating gradient orbs */}
        <div className="absolute -top-20 left-1/5 w-96 h-96 bg-brand-blue/12 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute -bottom-20 right-1/5 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/8 rounded-full blur-[80px] pointer-events-none z-0" />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section label */}
          <ScrollReveal animation="fade-up" duration={0.8}>
            <div className="text-center mb-10">
              <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase bg-blue-500/15 border border-blue-400/25 px-4 py-1.5 rounded-full inline-block">
                By The Numbers
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80} duration={0.9}>
                <div
                  className="group flex flex-col items-center text-center px-5 py-7 rounded-2xl border border-blue-800/40 bg-blue-950/40 backdrop-blur-md hover:bg-blue-900/30 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out relative overflow-hidden cursor-default"
                >
                  {/* Top accent line — glows on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent group-hover:via-blue-300 transition-all duration-500" />
                  {/* Bottom accent line — appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />

                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none" />

                  {/* Side glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-transparent to-sky-400/0 group-hover:from-blue-500/[0.06] group-hover:to-sky-400/[0.06] transition-all duration-500 pointer-events-none" />

                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none group-hover:text-blue-200 transition-colors duration-300">
                    {stat.isCount && stat.counter ? (
                      <Counter value={stat.counter} duration={1800} triggerOnce={false} />
                    ) : (
                      <span>{stat.label}</span>
                    )}
                  </span>
                  <span className="text-[11px] text-blue-300 mt-2.5 font-bold uppercase tracking-widest group-hover:text-blue-200 transition-colors duration-300">
                    {stat.isCount ? stat.label : ''}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 font-medium tracking-wide group-hover:text-slate-300 transition-colors duration-300">
                    {stat.desc}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-20 relative bg-white border-b border-slate-100 overflow-hidden">
        {/* Parallax grid background */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 1000) * 0.04}px)` }}
        />
        {/* Subtle floating orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-sky-400/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <ScrollReveal animation="fade-right" className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">Why Choose Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Quality. Precision.<br />Performance.
              </h2>
              <div className="h-1 w-16 bg-brand-blue" />
              <p className="text-base text-slate-600 leading-relaxed">
                Since 2005, we have engineered custom components that stand up to the most demanding industrial requirements. Our focus on micro-tolerances, premium materials, and certified workflows guarantees long-term durability and operational efficiency.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you need Vertical Turning (VTL) for large diameters or custom Horizontal Boring, our Chennai facility is equipped to handle complex fabrication.
              </p>
              <div className="pt-2">
                <MagneticButton>
                  <Link
                    to="/about"
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/25 inline-flex items-center space-x-2 hover:ring-2 hover:ring-brand-blue/35 hover:ring-offset-2 hover:ring-offset-slate-50"
                  >
                    <span>Know More About Us</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feat, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                  <div className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue w-12 h-12 flex items-center justify-center mb-4">
                      {feat.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors">{feat.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CHENNAI FACILITY PARALLAX BANNER */}
      <section className="relative w-full h-[420px] sm:h-[500px] flex items-center justify-center overflow-hidden bg-white">

        {/* Layer 1 — dot grid shifts slowly up on scroll (parallax layer 1) */}
        <div
          className="absolute inset-0 bg-dot-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 1600) * 0.04}px)` }}
        />

        {/* Layer 2 — very faint factory photo at ultra-low opacity (parallax layer 2) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src={heroBg}
            alt="Factory Workshop Banner"
            className="w-full h-full object-cover opacity-[0.05]"
            style={{ transform: `scale(1.18) translateY(${(scrollY - 1600) * 0.07}px)` }}
          />
        </div>

        {/* Layer 3 — floating blue gradient orbs (parallax layer 3) */}
        <div
          className="absolute -top-24 -left-24 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none z-0"
          style={{ transform: `translate(${(scrollY - 1600) * 0.06}px, ${(scrollY - 1600) * -0.03}px)` }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0"
          style={{ transform: `translate(${(scrollY - 1600) * -0.06}px, ${(scrollY - 1600) * 0.03}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none z-0"
          style={{ transform: `translate(-50%, calc(-50% + ${(scrollY - 1600) * 0.025}px))` }}
        />

        {/* Top & bottom fade edges */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        {/* Content */}
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-5">
          <ScrollReveal animation="fade-up">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/25 px-4 py-1.5 rounded-full inline-block">
              State-of-the-Art Chennai Facility
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={120}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              8,000 Sq.Ft. of<br className="hidden sm:block" />
              <span className="text-brand-blue"> Heavy Machining</span> Power
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={240}>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Equipped with material handling EOT cranes up to <strong className="text-slate-800">20 Tons</strong> and high-capacity CNC Vertical Turning Lathes (VTL) to handle components up to <strong className="text-slate-800">2.5 meters</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={360}>
            <div className="pt-2">
              <Link
                to="/infrastructure"
                className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5 group"
              >
                <span>Explore Our Infrastructure</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-blue uppercase block mb-2">Portfolio Highlight</span>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Built with Precision, Delivered with Pride
                </h2>
              </div>
              <MagneticButton>
                <Link
                  to="/projects"
                  className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 group shrink-0"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProjects.map((project, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="h-full flex">
                <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col bg-white border border-slate-200 hover:border-brand-blue/30 w-full hover-card-trigger">

                  <div className="h-48 w-full bg-slate-900 relative overflow-hidden">
                    <img
                      src={project.imgSrc}
                      alt={project.name}
                      loading="lazy"
                      onLoad={(e) => { e.target.classList.remove('opacity-0'); e.target.classList.add('opacity-90'); }}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 opacity-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20 pointer-events-none" />
                    <span className="absolute top-4 left-4 bg-brand-blue/90 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded text-white">
                      {project.tag}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {project.desc}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center text-xs font-semibold text-brand-blue group-hover:gap-2 transition-all">
                      <span>Explore Component</span>
                      <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS — White bg, asymmetric masonry card wall ── */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 2500) * 0.05}px)` }} 
        />

        {/* Soft blue glow top-left */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block mb-4">
                Client Testimonials
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Our Partners Say
              </h2>
              <div className="h-1 w-14 bg-brand-blue mx-auto mt-4" />
              <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto">
                Trusted by global industry leaders for precision, consistency, and on-time delivery.
              </p>
            </div>
          </ScrollReveal>

          {/* ── MASONRY CARD WALL ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

            {/* CARD 1 — Large featured (spans 2 rows on lg) */}
            <ScrollReveal animation="fade-up" delay={0} className="lg:row-span-2">
              <div className="group relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 h-full overflow-hidden">
                {/* Blue left accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-blue-400 to-blue-600" />

                {/* Big quote mark watermark */}
                <div className="absolute top-4 right-4 text-8xl font-black text-slate-100 select-none leading-none" aria-hidden="true">"</div>

                {/* Company chip */}
                <span className="inline-block text-[10px] font-black tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full mb-5">
                  L&T — Larsen & Toubro Ltd.
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-base text-slate-700 leading-relaxed font-medium italic mb-8">
                  "Pandyan Industrial has been our go-to machining partner for rotary kiln support rollers. Their precision tolerances and timely delivery have significantly reduced our plant downtime. A truly reliable heavy machining partner."
                </blockquote>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-5 mt-auto">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-sm shadow-md shrink-0">RK</div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Rajesh Kumar</p>
                    <p className="text-slate-500 text-xs">Procurement Head</p>
                    <p className="text-brand-blue text-[10px] font-bold tracking-wide mt-0.5 uppercase">Since 2012</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CARD 2 — Emerald accent, compact */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="group relative bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-gradient-to-b from-emerald-400 to-emerald-600" />
                <div className="absolute top-3 right-3 text-6xl font-black text-emerald-100 select-none leading-none" aria-hidden="true">"</div>

                <span className="inline-block text-[10px] font-black tracking-widest uppercase text-emerald-700 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full mb-4">
                  Flowserve India
                </span>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (<svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                </div>

                <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-5">
                  "Their dimensional accuracy and surface finish consistently meet our international specifications. Excellent quality control at every stage."
                </blockquote>

                <div className="flex items-center gap-3 border-t border-emerald-100 pt-4">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-black text-xs shadow shrink-0">AM</div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Anand Murthy</p>
                    <p className="text-slate-500 text-xs">Technical Director · Flowserve India Pvt. Ltd.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CARD 3 — Amber accent, compact */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="group relative bg-amber-50 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-gradient-to-b from-amber-400 to-amber-600" />
                <div className="absolute top-3 right-3 text-6xl font-black text-amber-100 select-none leading-none" aria-hidden="true">"</div>

                <span className="inline-block text-[10px] font-black tracking-widest uppercase text-amber-700 bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-full mb-4">
                  KCP Limited
                </span>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (<svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                </div>

                <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-5">
                  "Their VTL machining capability for large-diameter parts is unmatched in the region. A decade-long partnership built on trust and quality."
                </blockquote>

                <div className="flex items-center gap-3 border-t border-amber-100 pt-4">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-black text-xs shadow shrink-0">VS</div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">V. Suresh Babu</p>
                    <p className="text-slate-500 text-xs">Engineering Manager · The KCP Limited</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CARD 4 — Purple accent, wide (spans 2 cols) */}
            <ScrollReveal animation="fade-up" delay={300} className="lg:col-span-2">
              <div className="group relative bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col sm:flex-row gap-6 items-start">
                {/* Purple left accent */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-purple-400 to-purple-600" />
                <div className="absolute top-3 right-5 text-7xl font-black text-slate-100 select-none leading-none" aria-hidden="true">"</div>

                {/* Author avatar — left side on wide card */}
                <div className="shrink-0 flex flex-col items-center gap-2 sm:pt-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-black text-base shadow-lg">MD</div>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-purple-600 bg-purple-50 border border-purple-100 px-2.5 py-0.5 rounded-full whitespace-nowrap">FLSmidth</span>
                </div>

                <div className="flex-1">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                  </div>
                  <blockquote className="text-sm text-slate-700 leading-relaxed italic mb-4">
                    "Pandyan's mill bearing shells are manufactured to exact specifications every single time. Their ISO-certified processes and modern inspection equipment give us full confidence in every batch delivered."
                  </blockquote>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Michael D'Souza</p>
                    <p className="text-slate-500 text-xs">Supply Chain Manager · FLSmidth Private Ltd.</p>
                    <p className="text-purple-600 text-[10px] font-bold tracking-wide mt-1 uppercase">Partner since 2010</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Trust bar — animated counters */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-12 flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-100">
              {[
                { value: '100%', label: 'On-time Delivery', duration: 1600 },
                { value: '20+', label: 'Years Trusted', duration: 1800 },
                { value: '4+', label: 'Global Partners', duration: 1400 },
                { value: '5★', label: 'Average Rating', duration: 1200 },
              ].map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="text-2xl font-black text-brand-blue tabular-nums transition-transform duration-300 group-hover:scale-110">
                    <Counter value={s.value} duration={s.duration} triggerOnce={false} />
                  </div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle parallax grid */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 2200) * 0.04}px)` }}
        />
        {/* Soft glow orbs */}
        <div className="absolute -top-16 left-1/3 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-16 right-1/3 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <ScrollReveal animation="fade-up" duration={1.0}>
            <div className="text-center max-w-3xl mx-auto mb-14">

              {/* Badge */}
              <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-5 py-2 rounded-full inline-block mb-5">
                Trusted Partnerships
              </span>

              {/* Heading — typewriter char-by-char */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                <TypewriterReveal
                  text="Valued Corporate"
                  mode="char"
                  speed={40}
                  delayStart={100}
                  triggerOnce={false}
                  className="block"
                />
                <TypewriterReveal
                  text="Clients"
                  mode="char"
                  speed={40}
                  delayStart={900}
                  triggerOnce={false}
                  className="text-brand-blue block"
                />
              </h2>

              {/* Blue accent underline */}
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-sky-400 mx-auto rounded-full mb-5" />

              {/* Description — larger, better contrast */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
                Approved manufacturing and heavy-machining partner for global enterprise leaders in{' '}
                <span className="text-slate-800 font-semibold">cement</span>,{' '}
                <span className="text-slate-800 font-semibold">sugar</span>, and{' '}
                <span className="text-slate-800 font-semibold">process industries</span>.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" duration={1.2}>
            <div className="w-full overflow-hidden relative py-4">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee flex items-center space-x-6">
                {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand-blue/20 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-h-[200px] w-72 shrink-0"
                  >
                    <div className="flex justify-between items-center w-full mb-4">
                      <span className="text-[8px] text-slate-400 font-semibold bg-slate-50 px-2 py-0.5 rounded">
                        CLI-0{(idx % clients.length) + 1}
                      </span>
                      <span className="text-[8px] text-emerald-600 font-semibold uppercase tracking-wider flex items-center">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5" />
                        Approved
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center mb-4">
                      {client.logo ? (
                        <div className="h-12 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105">
                          <img
                            src={client.logo}
                            alt={client.subtitle}
                            loading="lazy"
                            className={`max-h-full max-w-[150px] object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 ${client.logoClass || ''}`}
                          />
                        </div>
                      ) : (
                        <span className="text-slate-900 font-black text-xl tracking-wider uppercase group-hover:text-brand-blue transition-colors">
                          {client.name}
                        </span>
                      )}
                    </div>

                    <div className="border-t border-slate-100 pt-3">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        {client.division}
                      </span>
                      <div className="flex justify-between items-center mt-1 text-[9px] text-slate-400">
                        <span>{client.delivers}</span>
                        <span className="font-semibold text-slate-500">{client.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GLASSMORPHIC CTA SECTION ── */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 2900) * 0.05}px)` }} 
        />

        {/* Floating gradient orbs behind the glass card */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-blue/10 blur-[95px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-sky-400/10 blur-[95px] pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="scale-up" duration={1.2}>
            <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center shadow-2xl border border-slate-200/80 bg-white/90 backdrop-blur-xl group">
              
              {/* Subtle light beam highlight across the glass card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-100/30 to-transparent opacity-60 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <span className="text-[10px] font-black tracking-widest uppercase text-brand-blue bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm animate-pulse">
                  Request a Proposal
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                  Ready to Start Your Next <span className="text-brand-blue">Precision Spares</span> Order?
                </h2>
                
                <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                  Connect with our engineers today for micro-tolerance VTL turning, heavy boring, or specialized spares fabrication. Receive a detailed quotation for your project drawings.
                </p>

                <div className="flex justify-center pt-4">
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="relative inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-black px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:shadow-brand-blue/35 hover:-translate-y-0.5 group/btn overflow-hidden"
                    >
                      {/* Sliding glow shine */}
                      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-out" />
                      
                      <span className="relative z-10">Get a Quote</span>
                      <ArrowRight className="h-4 w-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

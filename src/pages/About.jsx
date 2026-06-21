import { useState, useEffect } from 'react';
import { Eye, Target, Calendar, Award, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterReveal from '../components/TypewriterReveal';
import Counter from '../components/Counter';
import ourCompanyImg from '../assets/media__1781332783515.webp';
import directorsImg from '../assets/media__1781332783504.webp';
import valveMachiningImg from '../assets/valve_machining.webp';
import supportRollerImg from '../assets/support_roller.webp';
import shaftRotorImg from '../assets/shaft_rotor.webp';
import htdGearsImg from '../assets/htd_gears.webp';
import processIndustryImg from '../assets/process_industry.jpg';
import valveIndustryImg from '../assets/valve_industry.jpg';
import { Link } from 'react-router-dom';

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about the history of Pandyan Industrial Equipments Pvt. Ltd. established in 2005 in Chennai, our mission, vision, and leadership profiles.");
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leadership = [
    {
      name: 'Mr. C. Sekaran',
      role: 'Director / Co-Founder',
      desc: 'Over 30 years of heavy machining expertise. Oversees precision shop floors and operations quality.',
      initials: 'CS'
    },
    {
      name: 'Mr. S. Alex Pandyan',
      role: 'Director / Managing Partner',
      desc: 'Steers corporate strategy, client acquisition, and technological modernization programs.',
      initials: 'AP'
    },
    {
      name: 'Mr. S. Prabhakaran',
      role: 'Director / Technical Lead',
      desc: 'Expert in CNC programming, tool optimization, and high-tolerance vertical turning operations.',
      initials: 'SP'
    }
  ];

  const milestones = [
    {
      year: '2005',
      title: 'Company Established',
      desc: 'Founded in Chennai with a small-scale workshop focusing on general mechanical components and local milling services.'
    },
    {
      year: '2010',
      title: 'ISO 9001:2008 Certification',
      desc: 'Achieved first official ISO quality certification. Expanded facility to incorporate large VTL systems and began catering to cement and sugar industries.'
    },
    {
      year: '2017',
      title: 'ISO 9001:2015 Certification',
      desc: 'Upgraded quality standard protocols. Installed 2-Meter VTLs, material handling cranes, and grew into a tier-1 critical machining partner.'
    }
  ];

  // 4 gallery images (using existing project assets)
  const galleryItems = [
    { img: valveMachiningImg, label: 'Valve Body Machining', tag: 'Valve Industry' },
    { img: valveIndustryImg, label: 'Precision Valve Assemblies', tag: 'Valve Industry' },
    { img: processIndustryImg, label: 'Industrial Fabrication', tag: 'Process Industry' },
    { img: shaftRotorImg, label: 'Shaft & Rotor Components', tag: 'Sugar Industry' },
  ];

  const strengths = [
    'ISO 9001:2015 Certified Workflows',
    'CNC & VTL Machining up to 2.5m dia',
    '20T EOT Crane Material Handling',
    'Dedicated QC & Inspection Cell',
    'On-time delivery commitment',
    '20+ years of domain expertise',
  ];

  return (
    <div className="relative">

      {/* ── HERO HEADER — clearly visible bg + typewriter ── */}
      <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-slate-950 -mt-20">

        {/* Parallax bg — raised to 65% opacity so it's clearly visible */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={ourCompanyImg}
            alt="About Our Company Banner"
            className="w-full h-full object-cover opacity-65"
            style={{ transform: `scale(1.1) translateY(${scrollY * 0.07}px)` }}
          />
          {/* Lighter overlay so the image shows through */}
          <div className="absolute inset-0 bg-slate-950/35 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/15 to-slate-950/85 z-10" />
          <div className="absolute inset-0 bg-blueprint-dark opacity-25 z-10" />
        </div>

        {/* Floating blue orbs */}
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/5 w-56 h-56 bg-sky-400/8 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20 space-y-4">

          {/* "Who We Are" — large prominent badge */}
          <ScrollReveal animation="fade-down" duration={0.7}>
            <span className="inline-block text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-white uppercase bg-brand-blue/30 border border-brand-blue/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Who We Are
            </span>
          </ScrollReveal>

          {/* "About Our Journey" — char-by-char typewriter, WHITE text */}
          <TypewriterReveal
            text="About Our Journey"
            mode="char"
            speed={50}
            delayStart={280}
            triggerOnce={false}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase drop-shadow-[0_6px_18px_rgba(0,0,0,0.9)] block"
          />

          {/* Blue underline */}
          <ScrollReveal animation="fade-up" delay={1400} duration={0.6}>
            <div className="h-1 w-16 bg-brand-blue mx-auto mt-2" />
          </ScrollReveal>

          {/* Tagline — word-by-word */}
          <ScrollReveal animation="fade-up" delay={1600} duration={0.8}>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto pt-1">
              <TypewriterReveal
                text="Precision heavy machining partner trusted by global industrial leaders since 2005."
                mode="word"
                speed={55}
                delayStart={1800}
                triggerOnce={false}
                className="inline"
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 200) * 0.05}px)` }} 
        />
        
        {/* Soft glow accents */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <ScrollReveal animation="fade-right" className="w-full">
              <div className="relative rounded-2xl shadow-xl overflow-hidden aspect-[16/9] border border-slate-200 bg-white group">
                <img
                  src={ourCompanyImg}
                  alt="Our Company Building"
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" className="space-y-6">
              <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block">Our History</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                <TypewriterReveal
                  text="Engineering Excellence"
                  mode="char"
                  speed={38}
                  delayStart={100}
                  triggerOnce={false}
                  className="block"
                />
                <TypewriterReveal
                  text="Since 2005"
                  mode="char"
                  speed={38}
                  delayStart={900}
                  triggerOnce={false}
                  className="text-brand-blue block"
                />
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-sky-400 rounded-full" />
              <p className="text-base text-slate-600 leading-relaxed">
                Pandyan Industrial Equipments Pvt. Ltd. was established in 2005 with a vision to deliver unmatched precision machining services. Over the years, we have evolved into a trusted heavy-duty component manufacturing partner, adapting to the rising needs of global engineering giants.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our plant in Ekkattuthangal, Chennai, is strategically located in an industrial hub. It houses state-of-the-art Vertical Turning Lathes (VTLs), Horizontal Boring Machines, and extensive inspection tooling.
              </p>
              {/* Strengths checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {strengths.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle className="h-4 w-4 text-brand-blue shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 4-IMAGE GALLERY GRID ── */}
      <section className="py-16 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12 space-y-3">
              <TypewriterReveal
                text="Our Work in Action"
                mode="word"
                speed={120}
                delayStart={0}
                triggerOnce={false}
                className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue/15 border border-brand-blue/30 px-5 py-2 rounded-full inline-block"
              />
              <TypewriterReveal
                text="Precision at Every Scale"
                mode="char"
                speed={46}
                delayStart={350}
                triggerOnce={false}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)] block"
              />
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-sky-400 mx-auto rounded-full mt-3" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="h-full">
                <div className="group relative rounded-xl overflow-hidden h-56 sm:h-64 bg-slate-800 border border-slate-700/50 hover:border-brand-blue/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-brand-blue/10 hover:shadow-xl">
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    onLoad={(e) => { e.target.classList.remove('opacity-0'); e.target.classList.add('opacity-85'); }}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 opacity-0"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none" />
                  {/* Hover blue tint */}
                  <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-all duration-500" />

                  {/* Label at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <span className="text-[9px] font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/15 border border-brand-blue/30 px-2 py-0.5 rounded mb-1.5 inline-block">
                      {item.tag}
                    </span>
                    <p className="text-sm font-bold text-white leading-tight group-hover:text-brand-blue transition-colors duration-300">
                      {item.label}
                    </p>
                  </div>

                  {/* Hover zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                    <Zap className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 600) * 0.05}px)` }} 
        />
        
        {/* Soft glow accents */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-5 py-2 rounded-full inline-block mb-5">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                <TypewriterReveal
                  text="Mission"
                  mode="char"
                  speed={42}
                  delayStart={200}
                  triggerOnce={false}
                  className="block"
                />
                <TypewriterReveal
                  text="& Vision"
                  mode="char"
                  speed={42}
                  delayStart={800}
                  triggerOnce={false}
                  className="text-brand-blue block"
                />
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-sky-400 mx-auto mt-5 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <ScrollReveal animation="fade-up" className="w-full">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 h-full card-glow-hover">
                <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue border border-brand-blue/20 w-fit mb-5">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To supply and do machining on heavy metal machinery components with high quality and meet the customer requirements diligently.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} className="w-full">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 h-full card-glow-hover">
                <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue border border-brand-blue/20 w-fit mb-5">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To become a global leader in heavy metal machinery components and to provide goods of superior quality that satisfy demand from all over the world.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 1000) * 0.05}px)` }} 
        />
        
        {/* Soft glow accents */}
        <div className="absolute -bottom-24 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-5 py-2 rounded-full inline-block mb-5">
                Our History
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                <TypewriterReveal
                  text="Our Timeline"
                  mode="char"
                  speed={42}
                  delayStart={200}
                  triggerOnce={false}
                  className="block"
                />
                <TypewriterReveal
                  text="& Growth"
                  mode="char"
                  speed={42}
                  delayStart={900}
                  triggerOnce={false}
                  className="text-brand-blue block"
                />
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-sky-400 mx-auto rounded-full mb-5" />
              <p className="text-base sm:text-lg text-slate-600 font-medium">
                Key milestones that shaped our engineering capabilities and certifications.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-slate-300 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={150}>
                  <div className={`flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-5/12" />
                    <div className="w-12 h-12 bg-white border border-brand-blue text-brand-blue font-bold rounded-full flex items-center justify-center relative z-10 shrink-0 my-4 md:my-0 shadow-lg shadow-brand-blue/10">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="w-full md:w-5/12 bg-white border border-slate-200 p-6 rounded-xl transition-all duration-300 card-glow-hover">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-2xl font-black text-brand-blue">{milestone.year}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{milestone.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 1400) * 0.05}px)` }} 
        />
        
        {/* Soft glow accents */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-5 py-2 rounded-full inline-block mb-5">
                Our Directors
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                <TypewriterReveal
                  text="Leadership"
                  mode="char"
                  speed={42}
                  delayStart={200}
                  triggerOnce={false}
                  className="block"
                />
                <TypewriterReveal
                  text="& Vision"
                  mode="char"
                  speed={42}
                  delayStart={900}
                  triggerOnce={false}
                  className="text-brand-blue block"
                />
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-sky-400 mx-auto mt-5 rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((member, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="h-full flex">
                <div className="group bg-white border border-slate-200 rounded-xl p-8 transition-all duration-300 flex flex-col items-center text-center w-full card-glow-hover">
                  <div className="w-16 h-16 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5 21a7 7 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                    <span className="text-xs text-brand-blue font-bold tracking-widest uppercase block">
                      {member.role}
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-sm mt-3">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* CTA */}
          <ScrollReveal animation="fade-up" delay={200} className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/25 hover:-translate-y-0.5 group"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

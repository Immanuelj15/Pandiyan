import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Disc, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterReveal from '../components/TypewriterReveal';
import MagneticButton from '../components/MagneticButton';

import supportRollerImg from '../assets/support_roller.webp';
import bearingShellImg from '../assets/bearing_shell.webp';
import shaftRotorImg from '../assets/shaft_rotor.webp';
import htdGearsImg from '../assets/htd_gears.webp';
import valveMachiningImg from '../assets/valve_machining.webp';
import sugarGearsImg from '../assets/sugar_gears.webp';
import valveIndustryImg from '../assets/valve_industry.jpg';

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    document.title = "Industrial Projects & Assemblies Portfolio | Pandyan Industrial Equipments Pvt. Ltd.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our portfolio of machined assemblies including support rollers, bearing shells, shaft & rotor assemblies, and valve components.");
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Cement Industry', 'Sugar Industry', 'Valve Industry'];

  const projects = [
    { name: 'Support Roller Assembly', category: 'Cement Industry', desc: 'Complete fabrication, VTL machining, and assembly of support rollers including shaft fitting and bearing housing alignment.', ops: ['VTL turning (2m)', 'Horizontal boring', 'Assembly & alignments'], imgSrc: supportRollerImg },
    { name: 'Bearing Shell (Machined)', category: 'Cement Industry', desc: 'High-tolerance internal boring and outer diameter turning of massive mill bearing shells.', ops: ['Schiess 2M VTL', 'Precision boring', 'Ultrasonic thickness checks'], imgSrc: bearingShellImg },
    { name: 'HTD 31.5 Components', category: 'Cement Industry', desc: 'Precision manufacturing of high-torque drive components for heavy kiln drive systems.', ops: ['CNC turning', 'Keyway slotting', 'Dimension validation'], imgSrc: htdGearsImg },
    { name: 'Bogie Assemblies', category: 'Cement Industry', desc: 'Fabricated bogie structural assemblies for material handling transport systems inside cement plants.', ops: ['Welding qualification', 'Bore alignments', 'Coating checks'], imgSrc: supportRollerImg },
    { name: 'Travel Carriage Assemblies', category: 'Cement Industry', desc: 'Heavy mechanical carriage assemblies engineered to support kiln feed transfers.', ops: ['Stress relieving', 'High tolerance grinding', 'Load trials'], imgSrc: supportRollerImg },
    { name: 'Mill Spares & Components', category: 'Sugar Industry', desc: 'Machining of sugar mill couplings, scrapers, and mill rolls to handle heavy crushing stress.', ops: ['Heavy roughing', 'Keyway boring', 'Journal finishing'], imgSrc: sugarGearsImg },
    { name: 'Centrifugal Spares', category: 'Sugar Industry', desc: 'High-speed centrifugal components precision machined and dynamically balanced for stable operation.', ops: ['Dynamic balancing', 'Inner taper seat grinding', 'CNC turning'], imgSrc: shaftRotorImg },
    { name: 'Shredder Assemblies', category: 'Sugar Industry', desc: 'Heavy-duty cane shredder shaft and rotor hub assemblies engineered for high-impact durability.', ops: ['Axial boring', 'Interference fit assemblies', 'Taper grinding'], imgSrc: shaftRotorImg },
    { name: 'Reconditioning Projects', category: 'Sugar Industry', desc: 'Restoration and metal spraying of worn-out crusher roller shafts, extending service life by several seasons.', ops: ['Metal spraying', 'Re-boring housings', 'Journal grinding'], imgSrc: sugarGearsImg },
    { name: 'Valve Body Machining', category: 'Valve Industry', desc: 'Turning, boring, and seat face machining of large gate, globe, and check valves.', ops: ['OS 2.5m VTL turning', 'Flange boring', 'Face machining'], imgSrc: valveMachiningImg },
    { name: 'Taper Bore Grinding', category: 'Valve Industry', desc: 'Micro-precision grinding of valve seat angles to achieve 100% leak-proof pressure sealing.', ops: ['Internal taper grinding', 'Surface roughness checks', 'Lapping finishes'], imgSrc: valveMachiningImg }
  ];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="relative">

      {/* ── HEADER: Parallax bg + Typewriter title ── */}
      <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-slate-950 -mt-20">
        {/* Parallax background image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={valveIndustryImg}
            alt="Projects Portfolio Banner"
            className="w-full h-full object-cover opacity-55"
            style={{ transform: `scale(1.1) translateY(${scrollY * 0.08}px)` }}
          />
          {/* Lighter gradient overlay lets image breathe */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950 z-10" />
          <div className="absolute inset-0 bg-blueprint-dark opacity-20 z-10" />
        </div>

        {/* Floating blue glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20 space-y-3">

          {/* "Our Work" — large prominent badge */}
          <ScrollReveal animation="fade-down" duration={0.7}>
            <span className="inline-block text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-white uppercase bg-brand-blue/30 border border-brand-blue/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Our Work
            </span>
          </ScrollReveal>

          {/* "Projects Portfolio" — typewriter char-by-char, big heading */}
          <TypewriterReveal
            text="Projects Portfolio"
            mode="char"
            speed={52}
            delayStart={280}
            triggerOnce={false}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />

          {/* Animated blue underline */}
          <ScrollReveal animation="fade-up" delay={1500} duration={0.7}>
            <div className="h-1 w-16 bg-brand-blue mx-auto mt-2" />
          </ScrollReveal>

          {/* Tagline — typewriter word-by-word */}
          <ScrollReveal animation="fade-up" delay={1700} duration={0.8}>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-medium pt-1">
              <TypewriterReveal
                text="Precision machined assemblies delivered to world-class industrial leaders."
                mode="word"
                speed={55}
                delayStart={1900}
                triggerOnce={false}
                className="inline"
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="py-16 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Parallax grid */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 400) * 0.04}px)` }}
        />
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Category filter tabs */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  type="button"
                  className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeTab === cat
                      ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 border-brand-blue'
                      : 'bg-white text-slate-700 hover:text-brand-blue border-slate-200 hover:border-brand-blue/30 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={`${activeTab}-${idx}`} animation="fade-up" delay={idx * 60} className="h-full flex">
                <div className="group bg-white border border-slate-200 overflow-hidden flex flex-col justify-between w-full rounded-xl transition-all duration-300 card-glow-hover">

                  {/* Card image */}
                  <div className="h-44 w-full bg-slate-900 relative overflow-hidden">
                    <img
                      src={project.imgSrc}
                      alt={project.name}
                      loading="lazy"
                      onLoad={(e) => { e.target.classList.remove('opacity-0'); e.target.classList.add('opacity-90'); }}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 opacity-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 z-10 bg-white/90 p-2 rounded-full border border-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                      <Disc className="w-5 h-5 text-brand-blue animate-spin-slow" />
                    </div>
                    <span className="absolute top-4 left-4 bg-brand-blue text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Project name — typewriter word-by-word on each scroll reveal */}
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors min-h-[1.75rem]">
                        <TypewriterReveal
                          text={project.name}
                          mode="word"
                          speed={75}
                          delayStart={idx * 35}
                          triggerOnce={false}
                          className="inline"
                        />
                      </h3>

                      {/* Description — typewriter word-by-word, delayed after title */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-5 min-h-[3.5rem]">
                        <TypewriterReveal
                          text={project.desc}
                          mode="word"
                          speed={16}
                          delayStart={idx * 35 + 320}
                          triggerOnce={false}
                          className="inline"
                        />
                      </p>
                    </div>

                    {/* Machining ops tags */}
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2.5">
                        Machining Operations
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.ops.map((op, oIdx) => (
                          <span key={oIdx} className="bg-slate-50 text-[10px] text-slate-600 px-2.5 py-1 rounded border border-slate-200 font-semibold">
                            {op}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl max-w-md mx-auto">
              <span className="text-slate-600 text-lg font-medium">No projects found for this category.</span>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA — White glassmorphic + typewriter ── */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Parallax grid background */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 800) * 0.04}px)` }}
        />
        {/* Floating gradient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/8 rounded-full blur-[110px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-400/8 rounded-full blur-[110px] pointer-events-none z-0" />

        <ScrollReveal animation="scale-up" duration={1.2}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center shadow-xl border border-slate-200/80 bg-white/90 backdrop-blur-xl group">

              {/* Subtle light beam */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-100/40 to-transparent opacity-70 pointer-events-none" />
              {/* Top blue accent line */}
              <div className="absolute top-0 left-12 right-12 h-0.5 rounded-b-full bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

              <div className="relative z-10 space-y-5">
                {/* Badge */}
                <ScrollReveal animation="fade-down" duration={0.7}>
                  <span className="text-[10px] font-black tracking-widest uppercase text-brand-blue bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block animate-pulse">
                    Work With Us
                  </span>
                </ScrollReveal>

                {/* Heading — typewriter char-by-char */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <TypewriterReveal
                    text="Have an Upcoming"
                    mode="char"
                    speed={45}
                    delayStart={200}
                    triggerOnce={false}
                    className="block"
                  />
                  <TypewriterReveal
                    text="Industrial Project?"
                    mode="char"
                    speed={45}
                    delayStart={900}
                    triggerOnce={false}
                    className="text-brand-blue block"
                  />
                </h2>

                {/* Description — word-by-word typewriter */}
                <div className="max-w-xl mx-auto">
                  <TypewriterReveal
                    text="Partner with Pandyan for precision manufacturing. Get in touch with our engineering team to review your drawings and receive a detailed quote."
                    mode="word"
                    speed={38}
                    delayStart={1700}
                    triggerOnce={false}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed"
                  />
                </div>

                {/* CTA Button */}
                <ScrollReveal animation="fade-up" delay={3200} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <MagneticButton>
                      <Link
                        to="/contact"
                        className="relative inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-blue/35 hover:shadow-xl overflow-hidden group/btn"
                      >
                        {/* Shine sweep */}
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-out" />
                        <span className="relative z-10">Get in Touch</span>
                        <ArrowRight className="h-4 w-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>
                    <MagneticButton>
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-700 hover:bg-brand-blue hover:text-white hover:border-brand-blue font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span>View All Projects</span>
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

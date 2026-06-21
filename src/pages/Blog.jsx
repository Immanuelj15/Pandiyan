import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterReveal from '../components/TypewriterReveal';
import { blogPosts } from '../data/blogData';
import sugarIndustryImg from '../assets/sugar_industry.jpg';
import MagneticButton from '../components/MagneticButton';

export default function Blog() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Browse our detailed insights and publications on vertical turning, precision tolerances, heavy industrial components, and quality inspection protocols.");
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">

      {/* HEADER WITH SCROLL PARALLAX */}
      <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-slate-950 -mt-20">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={sugarIndustryImg}
            alt="Publications Banner"
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
          {/* "Knowledge Base" — large prominent badge */}
          <ScrollReveal animation="fade-down" duration={0.7}>
            <span className="inline-block text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-white uppercase bg-brand-blue/30 border border-brand-blue/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Knowledge Base
            </span>
          </ScrollReveal>

          <TypewriterReveal
            text="Insights & Publications"
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
              Latest news, technical guides, and updates from the precision machining industry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PUBLICATIONS GRID — Pure white + subtle grid ── */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="h-full">
                <ScrollReveal animation="fade-up" delay={idx * 100} className="h-full">
                  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-400 overflow-hidden h-full flex flex-col relative">
                    
                    {/* Top gradient line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-brand-blue to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <div className="h-60 w-full overflow-hidden relative bg-slate-950">
                      <img
                        src={post.imgSrc}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent pointer-events-none" />
                    </div>

                    <div className="p-7 sm:p-9 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1.5">
                              <Calendar className="h-4 w-4 text-brand-blue" />
                              <span>{post.date}</span>
                            </span>
                            <span className="flex items-center space-x-1.5">
                              <BookOpen className="h-4 w-4 text-brand-blue" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-brand-blue transition-colors duration-300">
                          {post.title}
                        </h2>

                        <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-xs font-bold text-brand-blue uppercase tracking-wider group/link"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — White glassmorphic + typewriter ── */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Parallax Grid Background */}
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 600) * 0.04}px)` }}
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
                    Feasibility Review
                  </span>
                </ScrollReveal>

                {/* Heading — char-by-char typewriter */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  <TypewriterReveal
                    text="Need Heavy Machinery"
                    mode="char"
                    speed={42}
                    delayStart={200}
                    triggerOnce={false}
                    className="block"
                  />
                  <TypewriterReveal
                    text="Components Machined?"
                    mode="char"
                    speed={42}
                    delayStart={1000}
                    triggerOnce={false}
                    className="text-brand-blue block"
                  />
                </h2>

                {/* Description — word-by-word typewriter */}
                <div className="max-w-xl mx-auto">
                  <TypewriterReveal
                    text="We machine vertical turning rings, large shafts, and perform boring processes up to 10-micron accuracy. Send us your drawings for a feasibility check."
                    mode="word"
                    speed={36}
                    delayStart={1900}
                    triggerOnce={false}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed"
                  />
                </div>

                {/* Buttons */}
                <ScrollReveal animation="fade-up" delay={3600} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <MagneticButton>
                      <Link
                        to="/contact"
                        className="relative inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand-blue/35 hover:shadow-xl overflow-hidden group/btn"
                      >
                        {/* Shine sweep */}
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-[150%] group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-out" />
                        <span className="relative z-10">Send Blueprint Drawings</span>
                        <ArrowRight className="h-4 w-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>
                    <MagneticButton>
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-700 hover:bg-brand-blue hover:text-white hover:border-brand-blue font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span>View Capabilities</span>
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

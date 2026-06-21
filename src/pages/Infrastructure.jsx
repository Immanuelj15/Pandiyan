import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CheckCircle, ShieldCheck, Scale, Cpu, RotateCw, Sliders, Wrench, ArrowRight, Settings, Maximize2, Compass, ChevronLeft, ChevronRight, Play, Pause, ZoomIn, X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterReveal from '../components/TypewriterReveal';
import MagneticButton from '../components/MagneticButton';
import eotCraneImg from '../assets/eot_crane.png';
import jibCraneImg from '../assets/jib_crane.png';
import chainPulleyImg from '../assets/chain_pulley.png';
import bearingShellImg from '../assets/bearing_shell.webp';
import shaftRotorImg from '../assets/shaft_rotor.webp';
import supportRollerImg from '../assets/support_roller.webp';
import valveMachiningImg from '../assets/valve_machining.webp';
import htdGearsImg from '../assets/htd_gears.webp';
import processIndustryImg from '../assets/process_industry.jpg';
import infraShop1 from '../assets/infra_shop1.jpg';
import infraShop2 from '../assets/infra_shop2.jpg';
import infraShop3 from '../assets/infra_shop3.jpg';
import infraShop4 from '../assets/infra_shop4.jpg';
import infraShop5 from '../assets/infra_shop5.jpg';

/* ─── Gallery data ─── */
const gallerySlides = [
  {
    img: infraShop1,
    label: 'Heavy Component Handling',
    caption: 'EOT crane lifting a massive gear drum — precision engineered for zero-damage positioning.'
  },
  {
    img: infraShop2,
    label: 'Shaft & Rotor Assembly',
    caption: 'Wrapped rotor shaft secured on custom jigs, ready for dimensional inspection.'
  },
  {
    img: infraShop3,
    label: 'Flanged Coupling Machining',
    caption: 'Large flanged coupling with precision bolt-circle machining on VTL.'
  },
  {
    img: infraShop4,
    label: 'Vertical Turning Lathe (VTL)',
    caption: '2.5 m table VTL machining a heavy casting with 4-jaw clamping fixture.'
  },
  {
    img: infraShop5,
    label: 'Pump Casing Overhaul',
    caption: 'Multi-port pump casing after finishing — ready for hydraulic pressure testing.'
  },
];

/* ─── Lightbox Component ─── */
function Lightbox({ slide, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ background: 'rgba(2,6,23,0.95)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white bg-white/10 hover:bg-brand-blue rounded-full p-3 transition-all z-10"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white bg-white/10 hover:bg-brand-blue rounded-full p-3 transition-all z-10"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
      <div
        className="max-w-5xl w-full px-4 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={slide.img}
          alt={slide.label}
          className="max-h-[80vh] w-full object-contain rounded-2xl shadow-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <div className="text-center">
          <p className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-1">{slide.label}</p>
          <p className="text-slate-300 text-sm">{slide.caption}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Parallax Slider Gallery Component ─── */
function ParallaxSlider() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(Array(gallerySlides.length).fill(0));
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const total = gallerySlides.length;

  const goTo = useCallback((idx) => {
    setActive(((idx % total) + total) % total);
  }, [total]);

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(goNext, 4500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, goNext]);

  // Drag / swipe support
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const handleDragEnd = (e) => {
    if (!isDragging) return;
    const end = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    if (dragStart - end > 50) goNext();
    else if (end - dragStart > 50) goPrev();
    setIsDragging(false);
  };

  // Parallax effect on mouse-over the slider
  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to +0.5
    setParallaxOffset(prev => prev.map((_, i) => i === active ? cx * 28 : 0));
  };
  const handleMouseLeave = () => {
    setParallaxOffset(Array(gallerySlides.length).fill(0));
  };

  return (
    <>
      {lightboxIdx !== null && (
        <Lightbox
          slide={gallerySlides[lightboxIdx]}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((lightboxIdx - 1 + total) % total)}
          onNext={() => setLightboxIdx((lightboxIdx + 1) % total)}
        />
      )}

      <div className="w-full select-none">

        {/* ── MAIN SLIDE VIEWPORT ── */}
        <div
          ref={sliderRef}
          className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200"
          style={{ height: 'clamp(240px, 38vw, 440px)' }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {gallerySlides.map((slide, i) => {
            const offset = parallaxOffset[i] || 0;
            const isActive = i === active;
            const isPrev = i === (active - 1 + total) % total;
            const isNext = i === (active + 1) % total;

            let transform = 'translateX(100%) scale(0.92)';
            let zIndex = 0;
            let opacity = 0;
            let pointerEvents = 'none';

            if (isActive) {
              transform = `translateX(0%) scale(1) translateX(${offset}px)`;
              zIndex = 3;
              opacity = 1;
              pointerEvents = 'auto';
            } else if (isPrev) {
              transform = 'translateX(-30%) scale(0.88)';
              zIndex = 2;
              opacity = 0.45;
            } else if (isNext) {
              transform = 'translateX(30%) scale(0.88)';
              zIndex = 2;
              opacity = 0.45;
            }

            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transition: isDragging ? 'none' : 'transform 0.75s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease',
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Image with internal parallax layer */}
                <div className="w-full h-full overflow-hidden rounded-3xl relative">
                  <img
                    src={slide.img}
                    alt={slide.label}
                    draggable="false"
                    style={{
                      width: '110%',
                      height: '110%',
                      objectFit: 'cover',
                      marginLeft: '-5%',
                      marginTop: '-5%',
                      transform: isActive ? `translateX(${offset * -0.4}px)` : 'translateX(0)',
                      transition: 'transform 0.1s linear',
                      willChange: 'transform',
                    }}
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />

                  {/* Caption badge (bottom left) */}
                  {isActive && (
                    <div
                      className="absolute bottom-6 left-6 right-6"
                      style={{
                        transform: 'translateY(0)',
                        animation: 'slideUp 0.5s ease both',
                      }}
                    >
                      <span className="inline-block bg-brand-blue/90 text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2 backdrop-blur-sm shadow-lg">
                        {slide.label}
                      </span>
                      <p className="text-white/85 text-sm font-medium leading-relaxed max-w-xl drop-shadow-lg">
                        {slide.caption}
                      </p>
                    </div>
                  )}

                  {/* Zoom button */}
                  {isActive && (
                    <button
                      onClick={() => setLightboxIdx(i)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-brand-blue border border-slate-200 hover:border-brand-blue text-slate-700 hover:text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-md"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {/* Left / Right nav arrows */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-brand-blue border border-slate-200 hover:border-brand-blue text-slate-700 hover:text-white rounded-full p-2.5 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-brand-blue border border-slate-200 hover:border-brand-blue text-slate-700 hover:text-white rounded-full p-2.5 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slide counter top-left */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-3 py-1 text-slate-700 text-xs font-bold shadow">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        </div>

        {/* ── THUMBNAIL STRIP + CONTROLS ── */}
        <div className="mt-4 flex items-center gap-3">
          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(p => !p)}
            className="shrink-0 bg-white hover:bg-brand-blue border border-slate-200 hover:border-brand-blue text-slate-600 hover:text-white rounded-full p-2.5 transition-all duration-300 shadow-sm"
            title={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>

          {/* Thumbnail strip */}
          <div className="flex-1 flex gap-3 overflow-x-auto pb-1 scrollbar-none">
            {gallerySlides.map((slide, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); setIsPlaying(false); }}
                className="relative shrink-0 rounded-lg overflow-hidden transition-all duration-400"
                style={{
                  width: i === active ? 88 : 64,
                  height: 48,
                  outline: i === active ? '2.5px solid #2563eb' : '2px solid #e2e8f0',
                  outlineOffset: '2px',
                  opacity: i === active ? 1 : 0.55,
                  transform: i === active ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />
                {i === active && (
                  /* Progress bar inside active thumb */
                  <div
                    className="absolute bottom-0 left-0 h-[3px] bg-brand-blue"
                    style={{
                      animation: isPlaying ? 'progressBar 4.5s linear' : 'none',
                      width: '100%',
                      transformOrigin: 'left',
                    }}
                    key={`${active}-${isPlaying}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="shrink-0 flex gap-1.5">
            {gallerySlides.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); setIsPlaying(false); }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? 22 : 7,
                  height: 7,
                  background: i === active ? '#2563eb' : 'rgba(148,163,184,0.4)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { scrollbar-width: none; }
      `}</style>
    </>
  );
}

/* ─── Animated Counter Hook (Loops Infinitely) ─── */
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime = null;
    let timeoutId = null;

    const runAnimation = () => {
      startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.floor(eased * target));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          setCount(target);
          // Restart after 3 seconds of showing the final value
          timeoutId = setTimeout(() => {
            runAnimation();
          }, 3000);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    runAnimation();

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutId);
    };
  }, [target, duration, start]);

  return count;
}

/* ─── Single animated stat card ─── */
function StatCard({ stat, index, inView }) {
  const count = useCountUp(stat.numericValue, 1800 + index * 120, inView);
  const displayValue = stat.format ? stat.format(count) : count.toLocaleString();

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center py-6 w-full group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 100}ms`,
      }}
    >
      {/* Glowing circle behind number */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Icon dot */}
      <div className="w-2 h-2 rounded-full bg-white/40 mb-3 group-hover:bg-white group-hover:scale-125 transition-all duration-300" />

      {/* Animated number */}
      <div className="flex items-end justify-center gap-1 mb-1">
        <span
          className="font-black text-white leading-none"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
        >
          {displayValue}
        </span>
        <span className="text-sm font-bold text-blue-200 mb-1">{stat.unit}</span>
      </div>

      {/* Progress bar */}
      <div className="w-12 h-0.5 bg-white/20 rounded-full mb-2 overflow-hidden">
        <div
          className="h-full bg-white rounded-full"
          style={{
            width: inView ? '100%' : '0%',
            transition: `width 1.2s ease ${index * 100 + 300}ms`,
          }}
        />
      </div>

      <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
    </div>
  );
}

/* ─── Stats Section with counter trigger ─── */
function StatsSection({ facilityStats }) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden py-10 px-0 mx-0 block"
      style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)' }}
    >
      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Animated pulse dot grid layer ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '20px 20px',
          animation: 'dotPulse 4s ease-in-out infinite',
        }}
      />

      {/* ── Soft glow orbs ── */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(147,197,253,0.18)' }} />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(59,130,246,0.25)' }} />

      {/* ── Section title ── */}
      <div
        className="text-center mb-8 relative z-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <span className="inline-block text-[9px] font-black tracking-[0.25em] text-white/60 uppercase border border-white/20 px-3.5 py-1 rounded-full mb-1.5 backdrop-blur-sm">
          By The Numbers
        </span>
        <h3 className="text-white text-lg sm:text-xl font-extrabold tracking-tight">
          Facility at a Glance
        </h3>
      </div>

      {/* ── Stats grid – completely full width, no side padding or limits ── */}
      <div className="w-full relative z-10 px-0 mx-0">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
          {facilityStats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* ── Animated bottom accent line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] pointer-events-none overflow-hidden">
        <div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(255,255,255,0.9), rgba(255,255,255,0.6), transparent)',
            animation: 'shimmer 3s linear infinite',
            backgroundSize: '200% 100%',
          }}
        />
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>
    </section>

  );
}

/* ─── Infinite horizontal scroll strip (logos / stats) ─── */
function InfiniteScroll({ items }) {
  return (
    <div className="overflow-hidden relative py-3">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: 'marquee 28s linear infinite',
          width: 'max-content',
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold shrink-0 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════ */
export default function Infrastructure() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Infrastructure & Major Machinery Directory | Pandyan Industrial Equipments Pvt. Ltd.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "View our 8,000 sq.ft facility layout in Chennai, major VTL and boring machines directory, and quality control inspection lab tools.");
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cranes = [
    {
      type: 'EOT Cranes',
      desc: 'Double girder heavy-duty overhead travel cranes for loading, unloading, and positioning massive machine components.',
      capacities: ['20 Ton Capacity (Main Bay)', '10 Ton Capacity (Auxiliary Bay)'],
      img: eotCraneImg
    },
    {
      type: 'Jib Cranes',
      desc: 'Pillar-mounted wall bracket cranes providing localized handling support at specific heavy machinery centers.',
      capacities: ['2 Ton Capacity (VTL Station 1)', '1 Ton Capacity (Boring Station)'],
      img: jibCraneImg
    },
    {
      type: 'Chain Pulley Blocks',
      desc: 'High-strength spur gear blocks for manually controlled micro-alignments and tooling installations.',
      capacities: ['5 Ton Capacity (Medium Bay)', '1 Ton Capacity (Tool Crib)'],
      img: chainPulleyImg
    }
  ];

  const machinery = [
    {
      name: 'OS 2.5 Meter CNC VTL',
      type: 'Vertical Turning Lathe',
      spec: 'Max Table Dia: 2500 mm | Max Turning Height: 1600 mm',
      qty: '1 Unit',
      control: 'CNC Controlled (Siemens 828D)',
      img: bearingShellImg,
      icon: <RotateCw className="h-6 w-6" />
    },
    {
      name: 'Schiess 2 Meter VTL',
      type: 'Vertical Turning Lathe',
      spec: 'Max Table Dia: 2000 mm | Max Turning Height: 1250 mm',
      qty: '1 Unit',
      control: 'Manual / DRO',
      img: supportRollerImg,
      icon: <RotateCw className="h-6 w-6" />
    },
    {
      name: 'Schiess 1.6 Meter CNC VTL',
      type: 'Vertical Turning Lathe',
      spec: 'Max Table Dia: 1600 mm | Max Turning Height: 1000 mm',
      qty: '1 Unit',
      control: 'CNC Controlled (Fanuc)',
      img: valveMachiningImg,
      icon: <RotateCw className="h-6 w-6" />
    },
    {
      name: 'Horizontal Boring Machine',
      type: 'Boring & Milling',
      spec: 'Spindle Dia: 100 mm | Table: 1250 x 1250 mm | Travel: X=1600 Y=1200 Z=1000',
      qty: '1 Unit',
      control: 'Heavy Duty / DRO Equipped',
      img: shaftRotorImg,
      icon: <Sliders className="h-6 w-6" />
    },
    {
      name: 'VDF Centre Lathe',
      type: 'Heavy Lathe Unit',
      spec: 'Distance between Centers: 3000 mm | Swing over bed: 800 mm',
      qty: '1 Unit',
      control: 'Manual / Precision Lathe',
      img: htdGearsImg,
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const qualityInstruments = [
    { name: 'Inside & Outside Micrometers', detail: 'Range from 0 mm to 1000 mm (Mitutoyo/Japan)', icon: <Maximize2 className="h-5 w-5" /> },
    { name: 'Vernier Calipers', detail: 'Range up to 2000 mm length checks', icon: <Compass className="h-5 w-5" /> },
    { name: 'Dial Bore Gauges', detail: 'Precision inside diameter testing up to 600 mm', icon: <Sliders className="h-5 w-5" /> },
    { name: 'Flange & PCD Gauges', detail: 'Custom pitch measurements for gear and cement shells', icon: <Scale className="h-5 w-5" /> },
    { name: 'Surface Finish Testers', detail: 'Digital surface finish analysis', icon: <Wrench className="h-5 w-5" /> },
    { name: 'Ultrasonic Thickness & Hardness Testers', detail: 'Material and hardness depth verification', icon: <ShieldCheck className="h-5 w-5" /> }
  ];

  const facilityStats = useMemo(() => [
    {
      numericValue: 8000, unit: 'sq.ft', label: 'Facility Area',
      format: (n) => n.toLocaleString(),
    },
    {
      numericValue: 20, unit: 'max', label: 'Crane Capacity',
      format: (n) => `${n}T`,
    },
    {
      numericValue: 25, unit: 'table', label: 'VTL Diameter',
      format: (n) => `${(n / 10).toFixed(1)}m`,
    },
    {
      numericValue: 100, unit: 'QC', label: 'Inspection Rate',
      format: (n) => `${n}%`,
    },
  ], []);

  const marqueeItems = [
    'OS 2.5M CNC VTL', 'Schiess Boring Mill', 'EOT 20T Crane', 'NABL Calibrated',
    'Siemens 828D Control', 'Fanuc CNC', '3m Centre Lathe', 'Hardness Testing', '8000 sqft Facility'
  ];

  return (
    <div className="relative">

      {/* ══════════════════════════════════
          HERO SECTION WITH PARALLAX BG
      ══════════════════════════════════ */}
      <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-slate-950 -mt-20">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={processIndustryImg}
            alt="Infrastructure Banner"
            className="w-full h-full object-cover opacity-55"
            style={{ transform: `scale(1.1) translateY(${scrollY * 0.08}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950 z-10" />
          <div className="absolute inset-0 bg-blueprint-dark opacity-20 z-10" />
        </div>

        {/* Floating glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 pt-20 space-y-4">
          <ScrollReveal animation="fade-down" duration={0.7}>
            <span className="inline-block text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-white uppercase bg-brand-blue/30 border border-brand-blue/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Manufacturing Facility
            </span>
          </ScrollReveal>

          <TypewriterReveal
            text="Infrastructure & Machinery"
            mode="char"
            speed={45}
            delayStart={300}
            triggerOnce={false}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase drop-shadow-[0_6px_22px_rgba(0,0,0,0.95)] block"
          />

          <ScrollReveal animation="fade-up" delay={1400} duration={0.8} triggerOnce={false}>
            <div className="h-1 w-16 bg-brand-blue mx-auto mt-2" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={1600} duration={0.8} triggerOnce={false}>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-medium leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pt-2">
              Equipped with heavy-duty VTLs, boring mills, and EOT cranes to machine heavy components up to 20 Tons.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════
          ★ PARALLAX SLIDING GALLERY ★
      ══════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        {/* White + subtle blue grid background */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        />

        {/* Soft blue glow top-center */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[220px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block mb-4">
                Shop Floor Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Inside Our <span className="text-brand-blue">Manufacturing Floor</span>
              </h2>
              <div className="h-1 w-14 bg-brand-blue mx-auto mb-4" />
              <p className="text-base text-slate-500 leading-relaxed">
                Real shots from our Chennai facility — heavy components being machined, inspected and dispatched to clients across India.
              </p>
            </div>
          </ScrollReveal>

          {/* THE SLIDER */}
          <ScrollReveal animation="fade-up" delay={150}>
            <ParallaxSlider />
          </ScrollReveal>

          {/* Marquee strip */}
          <div className="mt-10 border-t border-b border-slate-200">
            <InfiniteScroll items={marqueeItems} />
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          MATERIAL LOGISTICS (CRANES)
      ══════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 300) * 0.05}px)` }}
        />
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block mb-4">
                Material Logistics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Material Handling Capabilities
              </h2>
              <div className="h-1 w-14 bg-brand-blue mx-auto mb-4" />
              <p className="text-base text-slate-500 leading-relaxed">
                To support heavy machining of cement, sugar, and valve spares, we maintain advanced overhead and local cranes for zero-damage positioning.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cranes.map((crane, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="h-full flex">
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col w-full shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400">
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-brand-blue to-sky-400 group-hover:h-1.5 transition-all duration-300" />
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={crane.img}
                      alt={crane.type}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 bg-brand-blue/90 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md text-white shadow-md">
                      Logistics Asset
                    </span>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex justify-end mb-3">
                      <span className="text-5xl font-black text-slate-100 group-hover:text-blue-100/60 leading-none select-none transition-colors duration-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                      {crane.type}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{crane.desc}</p>

                    <div className="border-t border-slate-100 pt-5 space-y-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                        Available Capacities
                      </span>
                      {crane.capacities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center text-xs text-slate-600 bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100 font-semibold gap-2">
                          <CheckCircle className="h-4 w-4 text-brand-blue shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          HEAVY MACHINERY DIRECTORY
      ══════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 800) * 0.05}px)` }}
        />
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block mb-4">
                Machinery Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Heavy Machining Shop Floor
              </h2>
              <div className="h-1 w-14 bg-brand-blue mx-auto mb-4" />
              <p className="text-base text-slate-500 leading-relaxed">
                A detailed inventory of our active boring mills, vertical turning lathes, and heavy support lathe units.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.map((mach, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80} className="h-full flex">
                <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col w-full shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400">
                  <div className={`h-1 w-full transition-all duration-300 ${
                    mach.control.includes('CNC')
                      ? 'bg-gradient-to-r from-blue-500 via-brand-blue to-sky-400 group-hover:h-1.5'
                      : 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 group-hover:h-1.5'
                  }`} />

                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={mach.img}
                      alt={mach.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-brand-blue/8 p-3 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        {mach.icon}
                      </div>
                      <span className="text-xs font-bold bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-md">
                        {mach.qty}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-brand-blue transition-colors duration-300 leading-tight">
                      {mach.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-4">
                      {mach.type}
                    </span>

                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex-1 mb-5">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                        Working Specifications
                      </span>
                      <p className="text-xs font-semibold text-slate-700 leading-relaxed font-mono">
                        {mach.spec}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <span className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-lg border ${
                        mach.control.includes('CNC')
                          ? 'bg-brand-blue/6 text-brand-blue border-brand-blue/20'
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                        <Cpu className="h-3.5 w-3.5 mr-1.5 shrink-0" />
                        {mach.control}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          QUALITY & INSPECTION LAB
      ══════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0"
          style={{ transform: `translateY(${(scrollY - 1300) * 0.05}px)` }}
        />
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)' }} />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <ScrollReveal animation="fade-right" className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block">
                Inspection Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Quality &amp; Inspection Lab
              </h2>
              <div className="h-1 w-12 bg-brand-blue" />
              <p className="text-sm text-slate-500 leading-relaxed">
                Precision is nothing without validation. Our dedicated quality control laboratory is equipped with high-accuracy calibration tools calibrated regularly by NABL-accredited labs.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Every heavy industrial spare or custom VTL component shipped from our shop floor is accompanied by detailed Quality Assurance Reports (QAR), dimensional inspections sheets, and raw material certificates.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>100% Dimensional Inspection Reports</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>Material Chemical &amp; Physical Certifications</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>Regular Calibration Traceable to NABL Standards</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-slate-200 rounded-3xl p-6 sm:p-8 w-full shadow-lg">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-brand-blue" />
                <span>Specialized Measuring Instruments</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityInstruments.map((inst, idx) => (
                  <div key={idx} className="group bg-white p-5 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-md flex flex-col justify-between pl-6 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 group-hover:bg-brand-blue transition-colors duration-300" />
                    <div className="space-y-2">
                      <div className="bg-brand-blue/8 p-2 rounded-lg text-brand-blue inline-block mb-1">
                        {inst.icon}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-brand-blue transition-colors duration-300">
                        {inst.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {inst.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FACILITY STATS BAR  (animated counters)
      ══════════════════════════════════ */}
      <StatsSection facilityStats={facilityStats} />
    </div>
  );
}

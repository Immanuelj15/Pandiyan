import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config.js';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterReveal from '../components/TypewriterReveal';
import MagneticButton from '../components/MagneticButton';
import valveIndustryImg from '../assets/valve_industry.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: 'Vertical Turning (VTL)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Get a Quote | Pandyan Industrial Equipments Pvt. Ltd.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contact Pandyan Industrial Equipments Pvt. Ltd. in Chennai to submit drawings and receive quotes for VTL turning, horizontal boring, and heavy machinery spares.");
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    const messageText = `*New Quote Request - Pandyan Industrial*
----------------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Requirement:* ${formData.requirement}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setFormData({
      name: '', company: '', phone: '', email: '',
      requirement: 'Vertical Turning (VTL)', message: ''
    });
  };

  return (
    <div className="relative">

      {/* HEADER WITH SCROLL PARALLAX */}
      <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-slate-950 -mt-20">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={valveIndustryImg}
            alt="Contact Us Banner"
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
          {/* "Get in Touch" — large prominent badge */}
          <ScrollReveal animation="fade-down" duration={0.7}>
            <span className="inline-block text-sm sm:text-base lg:text-lg font-black tracking-[0.2em] text-white uppercase bg-brand-blue/30 border border-brand-blue/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Get in Touch
            </span>
          </ScrollReveal>

          <TypewriterReveal
            text="Contact Us"
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
              Submit drawings or details to receive precision machining quotes within 24–48 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTACT METHODS — Pure white + subtle grid ── */}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column: Direct Contact Info */}
            <ScrollReveal animation="fade-right" className="lg:col-span-5 space-y-8 w-full">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block mb-3">
                  Direct Contact
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Reach Our Chennai Office
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mt-3">
                  Have a question or want to visit our heavy engineering facility? Connect with us via the options below.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-5 rounded-2xl border border-slate-200 bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-brand-blue/20">
                  <MapPin className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Physical Address</h4>
                    <p className="text-sm text-slate-700 mt-1.5 leading-relaxed font-semibold">
                      {CONFIG.address.street} {CONFIG.address.area} {CONFIG.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-5 rounded-2xl border border-slate-200 bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-brand-blue/20">
                  <Mail className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</h4>
                    <p className="text-sm text-slate-700 mt-1.5 font-semibold">
                      <a href={`mailto:${CONFIG.contactEmail}`} className="hover:text-brand-blue transition-colors duration-300">
                        {CONFIG.contactEmail}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-5 rounded-2xl border border-slate-200 bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:border-brand-blue/20">
                  <Phone className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</h4>
                    <p className="text-sm text-slate-700 mt-1.5 font-semibold">
                      <a href={`tel:${CONFIG.contactPhoneRaw}`} className="hover:text-brand-blue transition-colors duration-300">
                        {CONFIG.contactPhone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map block */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[4/3] shadow-md">
                <iframe
                  title="Pandyan Industrial Equipments Location Map"
                  src={`https://maps.google.com/maps?q=${CONFIG.address.googleMapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </ScrollReveal>

            {/* Right Column: Quote Estimation Form */}
            <ScrollReveal animation="fade-left" className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-slate-200 p-8 sm:p-10 rounded-3xl w-full shadow-lg">
              <div className="mb-8 flex items-center space-x-3">
                <div className="bg-brand-blue/8 p-3 rounded-2xl text-brand-blue border border-brand-blue/15">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-none">Quote Engine</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-1">Submit your component details to receive a technical quote.</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-5 shadow-sm">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <Send className="h-8 w-8 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-extrabold">Requirement Submitted!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto font-semibold">
                    Thank you for contacting Pandyan Industrial Equipments. Our estimation engineers will review your request and contact you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text" name="name" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-semibold"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text" name="company" id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-semibold"
                        placeholder="e.g. L&T Heavy Engineering"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel" name="phone" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-semibold"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-semibold"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Requirement Category *
                    </label>
                    <select
                      name="requirement" id="requirement" value={formData.requirement} onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all font-bold text-slate-700"
                    >
                      <option value="Vertical Turning (VTL)">Vertical Turning (VTL)</option>
                      <option value="Horizontal Boring">Horizontal Boring</option>
                      <option value="CNC Machining">CNC Machining</option>
                      <option value="Reconditioning Services">Reconditioning Services</option>
                      <option value="Assembly Services">Assembly &amp; Alignment</option>
                      <option value="Grinding Services">Precision Grinding</option>
                      <option value="Custom Fabrication">Custom Component Fabrication</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Technical Message / Drawing Dimensions *
                    </label>
                    <textarea
                      name="message" id="message" rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none font-semibold"
                      placeholder="Please specify outer diameter, length, and steel grades if available..."
                    />
                  </div>

                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-2.5 rounded-xl font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-2">
                    <MagneticButton>
                      <button
                        type="submit"
                        className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-extrabold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
                      >
                        <span>Submit Request</span>
                        <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── KNOWLEDGE BASE LINK — Pure white + subtle grid ── */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-slate-200">
        
        {/* Parallax Grid Background */}
        <div 
          className="absolute inset-0 bg-small-grid pointer-events-none select-none z-0" 
          style={{ transform: `translateY(${(scrollY - 600) * 0.05}px)` }} 
        />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/8 border border-brand-blue/20 px-4 py-1.5 rounded-full inline-block">
            Knowledge Base
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Looking for Technical Insights?</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-semibold">
            Read our dedicated publications on Vertical Turning Lathes (VTL), precision tolerances, Chennai's industrial ecosystem, and raw metallurgy procedures.
          </p>
          <div className="pt-2 flex justify-center">
            <MagneticButton>
              <Link
                to="/blog"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-extrabold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Explore Blog Insights</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}

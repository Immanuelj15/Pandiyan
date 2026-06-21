import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../config.js';
import logoImg from '../assets/logo.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Projects', path: '/projects' },
    { name: 'Quality', path: '/clients' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Vertical Turning (VTL)', path: '/products' },
    { name: 'Horizontal Boring', path: '/products' },
    { name: 'CNC Machining', path: '/products' },
    { name: 'Reconditioning', path: '/products' },
    { name: 'Assembly Services', path: '/products' },
    { name: 'Grinding Services', path: '/products' },
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #07111f 0%, #050d18 100%)',
        borderTop: '1px solid rgba(30,58,138,0.35)',
      }}
      className="text-slate-300 pt-16 pb-8 relative overflow-hidden"
    >
      {/* Grid background overlays */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none select-none z-0" />
      <div className="absolute inset-0 bg-blueprint-dark opacity-15 pointer-events-none select-none z-0" />

      {/* Floating accent glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />

      <div className="w-full max-w-[98%] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Brand col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <img
                src={logoImg}
                alt="Pandyan Logo"
                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div>
                <span className="font-extrabold text-base tracking-tight uppercase block leading-none" style={{ color: '#ffffff' }}>
                  PANDYAN
                </span>
                <span
                  className="font-semibold text-[10px] tracking-widest uppercase block"
                  style={{ color: '#60a5fa' }}
                >
                  Industrial Equipments
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
              ISO 9001:2015 certified precision heavy machining partner. Specializing in VTL
              turning, horizontal boring, and custom industrial spares since 2005.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a
                href={`mailto:${CONFIG.contactEmail}`}
                className="transition-colors duration-200 p-2 rounded-lg"
                style={{
                  color: 'rgba(148,163,184,0.6)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,163,184,0.6)')}
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${CONFIG.contactPhoneRaw}`}
                className="transition-colors duration-200 p-2 rounded-lg"
                style={{
                  color: 'rgba(148,163,184,0.6)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,163,184,0.6)')}
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: '#ffffff' }}>
              <span className="w-4 h-0.5 rounded" style={{ background: '#3b82f6' }} />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm transition-all duration-200 flex items-center group"
                    style={{ color: '#cbd5e1' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    <ArrowUpRight
                      className="h-3 w-3 mr-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                      style={{ color: '#3b82f6' }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: '#ffffff' }}>
              <span className="w-4 h-0.5 rounded" style={{ background: '#3b82f6' }} />
              Capabilities
            </h3>
            <ul className="space-y-2.5">
              {services.map((svc, idx) => (
                <li key={idx}>
                  <Link
                    to={svc.path}
                    className="text-sm transition-all duration-200 flex items-center group"
                    style={{ color: '#cbd5e1' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    <ArrowUpRight
                      className="h-3 w-3 mr-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                      style={{ color: '#3b82f6' }}
                    />
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: '#ffffff' }}>
              <span className="w-4 h-0.5 rounded" style={{ background: '#3b82f6' }} />
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#60a5fa' }} />
                <span className="leading-relaxed" style={{ color: '#cbd5e1' }}>
                  {CONFIG.address.street} {CONFIG.address.area}<br />
                  {CONFIG.address.cityFooter}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 shrink-0" style={{ color: '#60a5fa' }} />
                <a
                  href={`mailto:${CONFIG.contactEmail}`}
                  className="transition-colors"
                  style={{ color: '#cbd5e1' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {CONFIG.contactEmail}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 shrink-0" style={{ color: '#60a5fa' }} />
                <a
                  href={`tel:${CONFIG.contactPhoneRaw}`}
                  className="transition-colors"
                  style={{ color: '#cbd5e1' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {CONFIG.contactPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center text-xs gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(30,58,138,0.3)', color: '#94a3b8' }}
        >
          <p>&copy; {currentYear} Pandyan Industrial Equipments Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              style={{
                color: '#60a5fa',
                border: '1px solid rgba(37,99,235,0.35)',
                background: 'rgba(37,99,235,0.08)',
              }}
            >
              ISO 9001:2015
            </span>
            <span className="cursor-pointer hover:text-white transition-colors" style={{ color: '#94a3b8' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
            >Terms</span>
            <span style={{ color: 'rgba(71,85,105,0.6)' }}>|</span>
            <span className="cursor-pointer hover:text-white transition-colors" style={{ color: '#94a3b8' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
            >Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

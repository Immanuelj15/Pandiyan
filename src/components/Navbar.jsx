import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.webp';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAtTop = !isScrolled;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Projects', path: '/projects' },
    { name: 'Quality', path: '/clients' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      isAtTop
        ? 'bg-transparent'
        : 'glass-nav shadow-lg shadow-slate-900/5'
    }`}>
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <img src={logoImg} alt="Pandyan Logo" className="h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
            <div>
              <span className={`font-extrabold text-lg tracking-tight uppercase block leading-none transition-colors duration-300 ${
                isAtTop ? 'text-white' : 'text-slate-900'
              }`}>
                PANDYAN
              </span>
              <span className={`text-[11px] font-semibold tracking-widest uppercase block transition-colors duration-300 ${
                isAtTop ? 'text-blue-300' : 'text-brand-blue'
              }`}>
                Industrial Equipments
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="group relative px-3 py-2"
              >
                {({ isActive }) => (
                  <span className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-brand-blue'
                      : isAtTop
                        ? 'text-white/90 hover:text-white'
                        : 'text-slate-700 hover:text-brand-blue'
                  }`}>
                    {link.name}
                    <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-brand-blue transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton>
              <Link
                to="/contact"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30 active:scale-95 inline-block"
              >
                Get a Quote
              </Link>
            </MagneticButton>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className={`block h-6 w-6 transition-colors duration-300 ${isAtTop ? 'text-white' : 'text-slate-800'}`} />
              ) : (
                <Menu className={`block h-6 w-6 transition-colors duration-300 ${isAtTop ? 'text-white' : 'text-slate-800'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-white bg-brand-blue'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 px-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all duration-200 block shadow-lg shadow-brand-blue/20"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

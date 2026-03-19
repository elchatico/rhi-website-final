import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'RH Kids', path: '/kids' },
  { name: 'RH Pro', path: '/pro' },
  { name: 'CSR', path: '/csr' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// ✅ Updated Logo Component (using public folder image)
const Logo: React.FC = () => (
  <Link to="/" className="flex items-center">
    <img
      src="/images/logo.png"
      alt="Ready Hands Logo"
      className="w-20 h-16 object-contain transition-transform duration-300 hover:scale-105"
    />
    <span className="font-extrabold text-xl text-rh-blue tracking-tight">
            Ready Hands
        </span>
  </Link>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (isOpen) {
        setShowNavbar(true);
      } else {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    lastScrollY.current = window.scrollY;

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        className={`block md:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive ? 'text-rh-red' : 'text-rh-blue hover:text-rh-red'
        } focus:outline-none focus:ring-2 focus:ring-rh-red`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔽 Reduced height for cleaner look */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group inline-flex items-center justify-center p-2 rounded-md text-rh-blue hover:text-rh-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rh-red"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon
                  className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  aria-hidden="true"
                />
              ) : (
                <MenuIcon
                  className="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
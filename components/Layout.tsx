
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { WhatsAppIcon } from './icons';

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/254702093678"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110 z-50"
    aria-label="Contact us on WhatsApp"
  >
    <WhatsAppIcon className="w-8 h-8" />
  </a>
);

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-rh-blue">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;

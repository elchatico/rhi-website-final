
import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, TikTokIcon, MailIcon, PhoneIcon } from './icons';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'RH Kids', path: '/kids' },
    { name: 'RH Pro', path: '/pro' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon className="w-6 h-6" />, href: 'https://www.instagram.com/readyhandske' },
    { name: 'TikTok', icon: <TikTokIcon className="w-6 h-6" />, href: 'https://www.tiktok.com/@readyhands' },
  ];

  return (
    <footer className="bg-rh-blue text-rh-off-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Ready Hands Initiative</h3>
            <p className="text-sm text-rh-light-blue">Empowering communities with life-saving first aid skills.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-base text-rh-light-blue hover:text-white transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3" />
                <a href="tel:+254702093678" className="text-base text-rh-light-blue hover:text-white">+254 702 093 678</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3" />
                <a href="mailto:readyhandsinitiative.ke@gmail.com" className="text-base text-rh-light-blue hover:text-white">readyhandsinitiative.ke@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-rh-light-blue hover:text-white transition-colors duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-rh-light-blue">&copy; {new Date().getFullYear()} Ready Hands Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

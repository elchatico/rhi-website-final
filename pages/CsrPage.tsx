import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Silver',
    price: '30,000',
    description: 'Sponsor 1 school session and empower a classroom.',
    features: ['Upto 20 Employees', 'Logo on certificates', 'Social media thank you post'],
    color: 'bg-gray-400',
  },
  {
    name: 'Gold',
    price: '80,000',
    description: 'Sponsor 3 full sessions, making a significant impact.',
    features: ['Upto 40 Employees', 'All Silver benefits', 'Logo on session materials', 'Prominent social media mention'],
    color: 'bg-yellow-500',
  },
  {
    name: 'Platinum',
    price: '150,000',
    description: 'Sponsor 5+ sessions and become a key community partner.',
    features: ['Upto 60 Employees', 'All Gold benefits', 'Logo on banners', 'Featured in media releases', 'Partner highlight on our website'],
    color: 'bg-rh-light-blue',
  },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);


const CsrPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="CSR Sponsorship" subtitle="Multiply Your Impact." />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-rh-blue">Link Workplace Training with Child-Focused Programs</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            When you train your team with RHI, you can extend your impact by sponsoring our RH Kids program. It's a powerful way to fulfill your corporate social responsibility and help build safer communities for everyone.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <AnimatedSection key={tier.name} className="flex" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="group relative w-full bg-white rounded-lg shadow-2xl shadow-rh-blue/20 overflow-hidden flex flex-col transform transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-rh-red/25 focus-within:-translate-y-2 focus-within:scale-105 focus-within:shadow-2xl focus-within:shadow-rh-red/25">
                <div className="absolute inset-0 bg-gradient-to-br from-rh-light-blue/20 via-white to-rh-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className={`relative p-6 ${tier.color}`}>
                  <h3 className="text-2xl font-bold text-white text-center">{tier.name}</h3>
                </div>
                <div className="relative p-8 flex flex-col flex-grow">
                  <p className="text-4xl font-extrabold text-rh-blue text-center">KES {tier.price}</p>
                  <p className="mt-4 text-center text-gray-600">{tier.description}</p>
                  <ul className="mt-6 space-y-3 text-gray-700 flex-grow">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <span className="text-rh-red font-bold mr-2" aria-hidden="true">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link 
                      to="/contact" 
                      state={{ prefillMessage: `I'm interested in the '${tier.name}' sponsorship tier and would like more information.` }}
                      className="block w-full text-center bg-rh-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rh-red"
                    >
                        Become a Sponsor
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CsrPage;
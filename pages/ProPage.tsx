import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircleIcon } from '../components/icons';

const trainingPackages = [
  {
    name: 'Basic',
    price: '25,000',
    duration: '2-Hour Session',
    description: 'A concise introduction to essential first aid skills for any workplace.',
    features: [
      'up to 15 Employees',
      'Emergency scene management',
      'Basic life support (CPR)',
      'Choking emergencies',
      'Wound and bleeding care',
    ],
    color: 'bg-rh-light-blue',
  },
  {
    name: 'Standard',
    price: '50,000',
    duration: 'Half-Day Training',
    description: 'Comprehensive training covering a wider range of common workplace incidents.',
    features: [
      'up to 30 Employees',
      'All Basic features',
      'Dealing with shock and fainting',
      'Burns and scalds',
      'Fractures and sprains',
      'Medical emergencies (e.g., seizures)',
    ],
    color: 'bg-rh-blue',
  },
  {
    name: 'Pro',
    price: '90,000',
    duration: 'Full-Day Certification',
    description: 'In-depth, hands-on training tailored to your industry\'s specific risks.',
    features: [
      'up to 50 Employees',
      'All Standard features',
      'Advanced scenario-based practice',
      'Use of AED (Defibrillator)',
      'Head, neck, and spinal injuries',
      'Customized modules for your workplace',
    ],
    color: 'bg-rh-red',
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

const ProPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="RH Pro Workplace Training" subtitle="Safe Teams, Strong Businesses." />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-rh-blue">Invest in Your Team's Safety</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Our certified trainers deliver engaging, practical first aid courses designed for the workplace. Equip your employees with the confidence and skills to respond effectively in an emergency, ensuring a safer environment for everyone.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPackages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} className="flex" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="group relative w-full bg-white rounded-lg shadow-2xl shadow-rh-blue/20 overflow-hidden flex flex-col transform transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-rh-red/25 focus-within:-translate-y-2 focus-within:scale-105 focus-within:shadow-2xl focus-within:shadow-rh-red/25">
                <div className="absolute inset-0 bg-gradient-to-br from-rh-light-blue/20 via-white to-rh-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className={`relative p-6 ${pkg.color}`}>
                  <h3 className="text-2xl font-bold text-white text-center">{pkg.name}</h3>
                  <p className="text-center text-white opacity-90 mt-1">{pkg.duration}</p>
                </div>
                <div className="relative p-8 flex flex-col flex-grow">
                  <p className="text-4xl font-extrabold text-rh-blue text-center">KES {pkg.price}</p>
                  <p className="mt-4 text-center text-gray-600">{pkg.description}</p>
                  <ul className="mt-6 space-y-4 text-gray-700 flex-grow">
                    {pkg.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link 
                      to="/contact" 
                      state={{ prefillMessage: `I'd like to inquire about booking the '${pkg.name}' RH Pro workplace training session for KES ${pkg.price}.` }}
                      className="block w-full text-center bg-rh-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rh-red"
                    >
                        Book Now
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

export default ProPage;
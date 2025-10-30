import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { QuoteIcon } from '../components/icons';

const testimonials = [
  {
    quote: "The training was incredibly practical and engaging. Our staff feels so much more prepared to handle emergencies now. Highly recommended!",
    name: "Amina Yusuf",
    title: "HR Manager, Innovate Solutions",
  },
  {
    quote: "My daughter came home from the RH Kids program so excited. She proudly showed us how to do CPR on her teddy bear. It's a fantastic initiative.",
    name: "David Chen",
    title: "Parent",
  },
  {
    quote: "As a small business owner, the RH Pro training was invaluable. The session was tailored to our workshop environment and gave us great peace of mind.",
    name: "Fatima Al-Jamil",
    title: "Owner, Artisan Carpentry",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-rh-blue">
         <img 
            src="/images/mathurin-napoly-matnapo-mbyWF9rYahI-unsplash.jpg" 
            alt="First aid training session with a group of people." 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        <div className="relative z-10 p-4">
            <AnimatedSection>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                    Confidence. Care. Readiness.
                </h1>
            </AnimatedSection>
            <AnimatedSection className="mt-4">
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-rh-off-white">
                    Empowering every community member with essential first aid knowledge.
                </p>
            </AnimatedSection>
            <AnimatedSection className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/pro" className="w-full sm:w-auto bg-rh-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-offset-rh-blue focus:ring-white">
                    Book Training
                </Link>
                <Link to="/csr" className="w-full sm:w-auto bg-rh-off-white text-rh-blue font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:scale-105 focus:ring-2 focus:ring-rh-red">
                    Sponsor a School
                </Link>
            </AnimatedSection>
        </div>
      </section>

      {/* Highlight Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="w-full">
                 <HighlightCard
                    title="RH Kids"
                    description="Young Hands, Ready Hearts. [Replace later with real stats]."
                    imageUrl="/images/kids.png"
                    linkTo="/kids"
                />
            </AnimatedSection>
            <AnimatedSection className="w-full" style={{transitionDelay: '200ms'}}>
                 <HighlightCard
                    title="RH Pro"
                    description="Safe Teams, Strong Businesses. [Replace later with partner names]."
                    imageUrl="/images/pro.png"
                    linkTo="/pro"
                />
            </AnimatedSection>
             <AnimatedSection className="w-full" style={{transitionDelay: '400ms'}}>
                 <HighlightCard
                    title="CSR Sponsorship"
                    description="Train a Worker. Empower a Child. Save a Community."
                    imageUrl="/images/csr.png"
                    linkTo="/csr"
                />
            </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-rh-light-blue/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold text-rh-blue">Voices of Confidence</h2>
            <p className="mt-2 text-lg text-gray-600">See what our partners and participants are saying about RHI.</p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} style={{ transitionDelay: `${index * 150}ms` }}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

interface HighlightCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkTo: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, imageUrl, linkTo }) => (
    <Link to={linkTo} className="group block bg-white rounded-lg shadow-2xl shadow-rh-blue/15 overflow-hidden transform transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-rh-red/25 hover:-translate-y-2 hover:scale-105 h-full relative focus:outline-none focus-within:shadow-2xl focus-within:shadow-rh-red/25 focus-within:-translate-y-2 focus-within:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-rh-light-blue/20 via-white to-rh-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        <div className="relative">
            <div className="h-48 overflow-hidden">
                <img src={imageUrl} alt={`${title} program promotion.`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-rh-blue">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                <span className="mt-4 inline-block text-rh-red font-semibold group-hover:underline">
                    Learn More &rarr;
                </span>
            </div>
        </div>
    </Link>
);

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title }) => (
  <div className="group relative bg-white rounded-lg shadow-2xl shadow-rh-blue/15 h-full transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-rh-red/25 hover:-translate-y-2 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-rh-light-blue/20 via-white to-rh-off-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
    <div className="relative z-10 p-8 h-full flex flex-col">
      <QuoteIcon className="w-10 h-10 text-rh-light-blue mb-4" aria-hidden="true" />
      <p className="text-gray-600 italic flex-grow">"{quote}"</p>
      <div className="mt-6">
        <p className="font-bold text-rh-blue">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

export default HomePage;
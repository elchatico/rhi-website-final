
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Accordion from '../components/Accordion';

const faqs = [
  {
    title: 'Do students receive certificates after the RH Kids program?',
    content: 'Yes, every participant who completes the RH Kids program earns a certificate of participation. [Replace later with more details on certification type].'
  },
  {
    title: 'How long is the typical workplace training (RH Pro)?',
    content: 'The duration is flexible. Our Basic package is a 2-hour session, the Standard package is a half-day, and the Pro package is a full-day training. We can adjust based on your needs.'
  },
  {
    title: 'Can the workplace training content be customized?',
    content: 'Absolutely. Our Pro package especially focuses on tailoring scenarios to your specific workplace environment, such as construction sites, offices, or manufacturing floors.'
  },
  {
    title: 'What is the ideal age range for the RH Kids program?',
    content: 'Our curriculum is designed for junior high students, typically ages 10-14, but we can adapt it for slightly younger or older school groups.'
  },
  {
    title: 'How do we book a training session?',
    content: 'You can get started by filling out the contact form on our Contact page, or by calling or messaging us directly. We\'ll discuss your needs and schedule a session that works for you.'
  }
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);

const FaqPage: React.FC = () => {
  return (
    <div>
        <PageHeader title="Frequently Asked Questions" subtitle="Your questions, answered." />
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <Accordion items={faqs} />
            </AnimatedSection>
        </div>
    </div>
  );
};

export default FaqPage;

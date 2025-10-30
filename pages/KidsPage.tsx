
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Accordion from '../components/Accordion';

const programWeeks = [
  { title: 'Week 1: First Aid Fundamentals', content: 'Introduction to first aid, safety, and how to call for help. Students learn the basics of assessing a situation calmly and effectively.' },
  { title: 'Week 2: Bandaging & Wound Care', content: 'Hands-on practice with different types of bandages for cuts, scrapes, and minor wounds. Focus on hygiene and preventing infection.' },
  { title: 'Week 3: Burns, Shock & Choking', content: 'Identifying different types of burns and how to treat them. Recognizing signs of shock and learning the Heimlich maneuver for choking emergencies.' },
  { title: 'Week 4: CPR & Respiratory Emergencies', content: 'Introduction to Cardiopulmonary Resuscitation (CPR) for children and adults. Students practice on manikins to build confidence.' },
  { title: 'Week 5: Common Emergencies', content: 'Covering a range of common situations like nosebleeds, fainting, and allergic reactions. Role-playing scenarios to reinforce learning.' },
  { title: 'Week 6: Graduation & Certification', content: 'Review of all skills learned, a final fun quiz, and a graduation ceremony where students receive their official RHI Kids certificate.' },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);


const KidsPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="RH Kids Program" subtitle="Young Hands, Ready Hearts." />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-rh-blue">Our 6-Week School Program</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our RH Kids program introduces students to essential first aid skills in a fun, engaging, and interactive way. We believe that empowering children with this knowledge not only keeps them safer but also builds confidence and a sense of responsibility.
            </p>
            <div className="mt-8">
              <Accordion items={programWeeks} />
            </div>
          </AnimatedSection>
          <AnimatedSection className="w-full h-full">
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
                <img src="public/images/kids11.png" alt="Kids learning first aid" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-rh-red opacity-5"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;

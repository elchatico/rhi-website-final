import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const teamMembers = [
  {
    name: 'Grace Owuor',
    role: 'Founder & Executive Director',
    imageUrl: 'components/Images/1.png',
    bio: 'Grace founded RHI with a passion for community safety and empowerment. His vision drives our mission forward every day.'
  },
  {
    name: 'George Roberts',
    role: 'Co-Founder & Program Coordinator',
    imageUrl: 'components/Images/21.jpeg',
    bio: 'Manages our school and corporate partnerships, ensuring a smooth and impactful experience for all.'
  },
  {
    name: 'Lyndah Nyangasi',
    role: 'Operations Manager',
    imageUrl: 'components/Images/3.jpeg',
    bio: 'Keeps our programs running smoothly and efficiently, handling logistics and coordination.'
  },
  {
    name: '[Replace Name]',
    role: 'Lead Trainer',
    imageUrl: 'https://picsum.photos/seed/lead-trainer-portrait/400/400',
    bio: 'An experienced paramedic and educator, bringing real-world expertise to every training session.'
  },
    {
    name: '[Replace Name]',
    role: 'Marketing & Outreach',
    imageUrl: 'https://picsum.photos/seed/marketing-portrait/400/400',
    bio: 'Spreads the word about RHI\'s mission and connects us with communities in need.'
  },    
  {
    name: '[Replace Name]',
    role: 'Volunteer Coordinator',
    imageUrl: 'https://picsum.photos/seed/volunteer-coordinator-portrait/400/400',
    bio: 'Recruits and manages our dedicated team of volunteers who make our work possible.'
  },
  {
    name: '[Replace Name]',
    role: 'Curriculum Developer',
    imageUrl: 'https://picsum.photos/seed/curriculum-developer-portrait/400/400',
    bio: 'Designs engaging and effective training materials tailored to our diverse audiences.'
  },
  {
    name: '[Replace Name]',
    role: 'Finance & Fundraising',
    imageUrl: 'https://picsum.photos/seed/finance-fundraising-portrait/400/400',
    bio: 'Manages our budget and fundraising efforts to ensure we can continue our vital work.'
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


const TeamCard: React.FC<typeof teamMembers[0]> = ({ name, role, imageUrl, bio }) => (
  <div className="group relative bg-white rounded-lg shadow-2xl shadow-rh-blue/15 overflow-hidden transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-rh-red/25 focus:outline-none focus:ring-2 focus:ring-rh-red" tabIndex={0}>
    <img src={imageUrl} alt={`Photo of ${name}`} className="w-full h-80 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-rh-light-blue">{role}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-rh-blue to-rh-red/80 p-6 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-out">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-rh-light-blue mb-4">{role}</p>
      <p className="text-sm">{bio}</p>
    </div>
  </div>
);

const TeamPage: React.FC = () => {
  return (
    <div>
        <PageHeader title="Meet Our Team" subtitle="The passionate individuals behind our mission." />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <TeamCard key={index} {...member} />
            ))}
            </AnimatedSection>
        </div>
    </div>
  );
};

export default TeamPage;
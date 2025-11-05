import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const teamMembers = [
  {
    name: 'Grace Owuor',
    role: 'Founder & Executive Director',
    imageUrl: '/images/1.png',
    bio: 'Grace provides overall leadership and vision for RHI. Builds partnerships, represents the organization publicly, and ensures mission alignment.'
  },
  {
    name: 'George Roberts',
    role: 'Co-Founder & Program Coordinator',
    imageUrl: '/images/g.jpg',
    bio: 'Handles day-to-day execution of programs, manages staff, and ensures activities align with RHI’s mission.'
  },
  {
    name: 'Lyndah Nyangasi',
    role: 'Executive Assistant',
    imageUrl: '/images/3.jpeg',
    bio: 'Supports both leaders with communication, documentation, and scheduling. Her organizational skills keep us on track.'
  },
   {
    name: 'Mary Wambui',
    role: 'Lead Trainer',
    imageUrl: '/images/mary.jpeg',
    bio: 'An experienced paramedic and educator, bringing real-world expertise to every training session.'
  },  
  {
    name: 'Lydia Waihuini Maina',
    role: 'Lead Trainer',
    imageUrl: '/images/lydia2.jpg',
    bio: 'An experienced paramedic and educator, bringing real-world expertise to every training session.'
  }, 
  {
    name: 'Abigael Achungo',
    role: 'School Liaison Coordinator',
    imageUrl: '/images/abby.jpeg',
    bio:  'Acts as the contact person between RHI and schools. Plans visits, organizes training schedules, and manages communication with teachers.'
  },
  {
    name: 'Angela Muhonja',
    role: 'Finance & Operations Officer',
    imageUrl: '/images/an.jpeg',
    bio: 'Manages RHI’s finances, budgets, and expenditure. Handles logistics, material purchases, and event organization.'
  },
  {
    name: 'Mitshelle Ayuma',
    role: 'Monitoring, Evaluation & Reporting Officer',
    imageUrl: '/images/mi.jpeg',
    bio: 'Tracks project impact, collects data, and prepares progress reports for partners and stakeholders.'
  },
  {
    name: 'Eugene Elvis',
    role: 'Logistics & Operations Officer', 
    imageUrl: '/images/eugo.jpeg',
    bio: 'Coordinates transport, training materials, and event setups.'
  },
  {
    name: 'Valary Akinyi',
    role: 'Volunteer Coordinator',
    imageUrl: '/images/c2.jpeg',
    bio: 'Recruits and manages our dedicated team of volunteers who make our work possible.'
  },
   {
    name: 'Not Available',
    role: 'Marketing & Outreach',
    imageUrl: '/images/t1.jpg',
    bio: 'Spreads the word about RHI\'s mission and connects us with communities in need.'
  }, 
  {
    name: 'Not Available',
    role: 'Partnerships & Outreach Manager',
    imageUrl: '/images/founder1.jpg',
    bio: 'Builds relationships with schools, clinics, sponsors, and media.'
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
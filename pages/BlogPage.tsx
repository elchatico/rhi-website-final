import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const placeholderPosts = [
  { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);

const BlogCard: React.FC = () => (
    <div className="bg-white rounded-lg shadow-2xl shadow-rh-blue/15 overflow-hidden animate-pulse transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-rh-red/25">
        <div className="h-48 bg-gray-300"></div>
        <div className="p-6">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="mt-4 h-4 bg-gray-300 rounded"></div>
            <div className="mt-2 h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="mt-6 h-10 bg-gray-300 rounded-full w-32"></div>
        </div>
    </div>
);


const BlogPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Blog & News" subtitle="Updates, stories, and tips from the RHI team." />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rh-red">Coming Soon!</h2>
            <p className="mt-2 text-lg text-gray-600">We're working on bringing you valuable content. Check back later!</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map(post => (
            <BlogCard key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
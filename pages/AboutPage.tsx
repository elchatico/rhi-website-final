
import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const useAnimatedCounter = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
            }
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            if (start === end) return;

            let total_frames = Math.round(duration / (1000 / 60));
            let increment = end / total_frames;

            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(current));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, target, duration]);

    return { count, ref };
};

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
  const { count: schoolsCount, ref: schoolsRef } = useAnimatedCounter(50); // Replace with real data
  const { count: studentsCount, ref: studentsRef } = useAnimatedCounter(2500); // Replace with real data
  const { count: companiesCount, ref: companiesRef } = useAnimatedCounter(20); // Replace with real data

  return (
    <div className="bg-white">
      <PageHeader title="About RHI" subtitle="Our journey, mission, and vision." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-rh-blue">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              To empower every student, worker, and community member with essential first aid knowledge and confidence to act in emergencies.
            </p>
          </div>
          <div className="h-64 rounded-lg overflow-hidden shadow-lg">
             <img src="public/images/mission.png" alt="Team working together" className="w-full h-full object-cover"/>
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 h-64 rounded-lg overflow-hidden shadow-lg">
             <img src="public/images/vision.jpg" alt="Vision for the future" className="w-full h-full object-cover"/>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-rh-blue">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-600">
              A nation where first aid is second nature.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-rh-blue">Our Story</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Founded in 2025, RHI began as a grassroots program to train junior high students. Today, we partner with schools and companies to build safer communities across the nation.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-rh-off-white rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="border-r border-gray-300 last:border-r-0">
                    <span ref={schoolsRef} className="text-5xl font-extrabold text-rh-red">{schoolsCount}+</span>
                    <p className="mt-2 text-lg font-semibold text-rh-blue">Schools Reached</p>
                </div>
                <div className="border-r border-gray-300 last:border-r-0">
                    <span ref={studentsRef} className="text-5xl font-extrabold text-rh-red">{studentsCount}+</span>
                    <p className="mt-2 text-lg font-semibold text-rh-blue">Students Trained</p>
                </div>
                <div>
                    <span ref={companiesRef} className="text-5xl font-extrabold text-rh-red">{companiesCount}+</span>
                    <p className="mt-2 text-lg font-semibold text-rh-blue">Companies Trained</p>
                </div>
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;

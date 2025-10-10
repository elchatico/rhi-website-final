import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { XIcon } from '../components/icons';

const images = [
  { src: '/images/image1.jpg', caption: 'Students practicing CPR on manikins.' },
  { src: '/images/image2.jpg', caption: 'An instructor demonstrates proper bandaging in a workplace training demo.' },
  { src: '/images/image3.jpg', caption: 'A representative from a CSR sponsor speaks at an event.' },
  { src: '/images/image4.jpg', caption: 'Students engaged in an interactive first aid learning session.' },
  { src: '/images/image5.jpg', caption: 'Happy students on graduation day for the RH Kids program.' },
  { src: '/images/image6.jpg', caption: 'Corporate team building exercise focused on first aid.' },
  { src: '/images/image7.jpg', caption: 'An employee learning to use an automated external defibrillator (AED).' },
  { src: '/images/image8.jpg', caption: 'The RHI team at a community outreach program event.' },
  { src: '/images/image9.jpg', caption: 'Students practicing the Heimlich maneuver on each other.' },
  { src: '/images/image10.jpg', caption: 'A group photo of a successful RH Pro workplace training session.' },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);

const Lightbox: React.FC<{ src: string; caption: string; onClose: () => void }> = ({ src, caption, onClose }) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        
        // Focus the close button on mount
        closeButtonRef.current?.focus();

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" 
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-caption"
    >
        <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img src={src} alt={caption} className="w-full h-full object-contain max-h-[80vh]" />
            <p id="lightbox-caption" className="mt-2 text-center text-rh-blue">{caption}</p>
            <button 
                ref={closeButtonRef}
                onClick={onClose} 
                className="absolute -top-4 -right-4 bg-white text-rh-red p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-rh-red"
                aria-label="Close image viewer"
            >
                <XIcon className="w-6 h-6" aria-hidden="true" />
            </button>
        </div>
    </div>
    );
};

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string, caption: string } | null>(null);

  return (
    <div>
        <PageHeader title="Our Gallery" subtitle="Moments from our training sessions and events." />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((image, index) => (
                    <button key={index} className="group relative block w-full text-left overflow-hidden rounded-lg shadow-2xl shadow-rh-blue/20 cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-rh-red/25 focus:outline-none focus:ring-2 focus:ring-rh-red focus:ring-offset-2" onClick={() => setSelectedImage(image)}>
                        <img src={image.src} alt={image.caption} className="w-full h-auto block" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out"></div>
                        <span className="sr-only">View image: {image.caption}</span>
                    </button>
                ))}
                </div>
            </AnimatedSection>
        </div>
        {selectedImage && <Lightbox src={selectedImage.src} caption={selectedImage.caption} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default GalleryPage;
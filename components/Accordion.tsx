import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-xl shadow-rh-blue/15 transition-shadow duration-300 hover:shadow-2xl hover:shadow-rh-red/20">
          <button
            onClick={() => handleClick(index)}
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-rh-off-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rh-red focus:ring-offset-2"
            id={`accordion-button-${index}`}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
          >
            <span className="font-semibold text-rh-blue">{item.title}</span>
            <ChevronDownIcon className={`w-6 h-6 text-rh-red transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          <div
            id={`accordion-panel-${index}`}
            role="region"
            aria-labelledby={`accordion-button-${index}`}
            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="p-4 bg-white border-t border-gray-200 text-gray-600">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
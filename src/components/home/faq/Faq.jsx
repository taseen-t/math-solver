"use client";
import { useState } from "react";
import { SubHeading } from "@/components/ui/subheading";
import { FaqContent } from "@/constants/home";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-primary-900 py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-y-6 lg:w-1/2">
          <SubHeading content={FaqContent.subHead} textColor="white" />

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {FaqContent.heading}
          </h2>

          <p className="text-lg text-white/80 font-normal leading-relaxed">
            {FaqContent.para}
          </p>

          <button className="px-8 py-3 bg-white text-primary-900 font-bold rounded-full hover:bg-gray-100 transition-colors mt-4">
            {FaqContent.cta}
          </button>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          {FaqContent.questions.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-white/20 last:border-none"
            >
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl font-bold text-white pr-8">
                  {item.question}
                </span>
                <span className="text-white shrink-0">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100 mb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/80 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

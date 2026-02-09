import { SubHeading } from "@/components/ui/subheading";
import { WhyChooseUsContent } from "@/constants/home";

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-primary-900 py-20">
      <div className="container mx-auto flex flex-col items-center gap-y-6 px-4">
        {/* Sub Heading */}
        <SubHeading content={WhyChooseUsContent.subHead} textColor="white" />

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          {WhyChooseUsContent.heading}
        </h2>

        {/* Paragraph */}
        <p className="max-w-2xl text-center text-lg text-white/80 font-normal">
          {WhyChooseUsContent.para}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
          {WhyChooseUsContent.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col gap-4 min-h-[250px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:ring-4 hover:ring-white/20 hover:transform hover:md:-translate-y-2 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-primary-900">
                {card.title.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h3>
              <p className="text-primary-900/70 text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

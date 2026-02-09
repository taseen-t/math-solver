import { CtaContent } from "@/constants/home";

const CtaSection = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="w-full bg-primary-900 rounded-[50px] py-24 px-6 md:px-20 flex flex-col items-center text-center gap-y-6 shadow-2xl border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            {CtaContent.heading}
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
            {CtaContent.para}
          </p>

          <button className="px-8 py-4 bg-white text-primary-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors mt-4">
            {CtaContent.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

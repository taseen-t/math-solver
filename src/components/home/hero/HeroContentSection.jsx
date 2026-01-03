import { MainButton } from "@/components/ui/button";
import { Circle } from "@/components/ui/circle";
import { SubHeading } from "@/components/ui/subheading";
import { HeroContent } from "@/constants/home";
import Image from "next/image";

const HeroContentSection = () => {
  return (
    <div className="order-2 md:order-1 w-full h-1/2 md:w-1/2 md:h-full relative flex flex-col md:gap-y-3 gap-y-4">
      {/* Sub Heading */}
      <SubHeading content={HeroContent.subHead} textColor="white" />

      {/* Main Heading */}
      <div className="flex flex-col">
        <h1 className="text-3xl/tight md:text-5xl/tight font-bold capitalize text-white">
          {HeroContent.heading1}
          <br />
          {HeroContent.heading2}
          <br />
          {HeroContent.heading3}
        </h1>
      </div>

      {/* Paragraph */}
      <p className="max-w-11/12 md:max-w-3/4 text-lg text-white font-normal">
        {HeroContent.para}
      </p>

      {/* Duo Buttons CTA */}
      <div className="flex items-start gap-x-4">
        <MainButton
          content={HeroContent.cta1}
          colors="text-[#03624C] bg-white border-[#03624C]"
        />

        <MainButton
          content={HeroContent.cta2}
          colors="text-white bg-[#03624C] border-white"
        />
      </div>

      {/* Trusted CTA Display */}
      <div className="flex flex-col items-start mt-4">
        <div className="inline-flex gap-2 px-3 py-1 border-2 rounded-full justify-center items-center text-[#03624C] bg-white border-[#03624C]">
          <Image
            src="/images/testimonial.webp"
            alt="testimonial Image"
            width={130}
            height={70}
          />

          <h3 className="capitalize flex flex-col">
            <span className="font-bold">{HeroContent.testimonialNum}</span>
            {HeroContent.testimonialText}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroContentSection;

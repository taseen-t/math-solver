import Image from "next/image";

const HeroImageSection = () => {
  return (
    <div className="order-1 md:order-2 w-full h-1/2 md:w-1/2 md:h-full relative flex justify-center items-center">
      <Image
        src="/images/student.webp"
        alt="Student Image"
        fill
        priority
        className="object-contain md:-ms-[10%] -ms-[6%]"
      />
    </div>
  );
};

export default HeroImageSection;

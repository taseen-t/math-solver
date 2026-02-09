import { SubHeading } from "@/components/ui/subheading";
import { TestimonialsContent } from "@/constants/home";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  // Double the testimonials to ensure smooth infinite scroll without gaps
  const doubledTestimonials = [
    ...TestimonialsContent.testimonials,
    ...TestimonialsContent.testimonials,
  ];

  return (
    <div className="w-full bg-white py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-y-6 px-4 mb-16">
        {/* Sub Heading */}
        <SubHeading
          content={TestimonialsContent.subHead}
          textColor="primary-900"
        />

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-primary-900 text-center">
          {TestimonialsContent.heading}
        </h2>

        {/* Paragraph */}
        <p className="max-w-2xl text-center text-lg text-primary-900/80 font-normal">
          {TestimonialsContent.para}
        </p>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-8">
        {/* Top Row - Scrolls Right (Reverse) */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-6 w-max animate-scroll-reverse group-hover:[animation-play-state:paused] ease-linear">
            {doubledTestimonials.map((testimonial, index) => (
              <div
                key={`top-${index}`}
                className="w-[350px] md:w-[400px] bg-slate-50 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow shrink-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary-900/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 text-primary-900">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>

                <p className="text-primary-900/80 leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Left */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex gap-6 w-max animate-scroll group-hover:[animation-play-state:paused] ease-linear">
            {doubledTestimonials.map((testimonial, index) => (
              <div
                key={`bottom-${index}`}
                className="w-[350px] md:w-[400px] bg-slate-50 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow shrink-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary-900/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 text-primary-900">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>

                <p className="text-primary-900/80 leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

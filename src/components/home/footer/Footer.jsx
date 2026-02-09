import Link from "next/link";
import { FooterContent, LogoText } from "@/constants/home";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-900 pt-20 pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">{LogoText}</h3>
            <p className="text-white/80 leading-relaxed">
              {FooterContent.description}
            </p>
            <button className="w-fit px-6 py-3 bg-white text-primary-900 font-bold rounded-full hover:bg-gray-100 transition-colors">
              {FooterContent.cta}
            </button>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">Resources</h4>
            <ul className="flex flex-col gap-4 text-white/80">
              {FooterContent.resources.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legals */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">Legals</h4>
            <ul className="flex flex-col gap-4 text-white/80">
              {FooterContent.legals.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">
              {FooterContent.contact.heading}
            </h4>
            <p className="text-white/80">{FooterContent.contact.para}</p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder={FooterContent.contact.placeholder}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
              <button className="p-3 bg-white text-primary-900 rounded-lg hover:bg-gray-100 transition-colors">
                <FaPaperPlane />
              </button>
            </div>

            <div className="flex gap-4 mt-2">
              {FooterContent.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="p-2 bg-white text-primary-900 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {social.icon === "FaFacebook" && <FaFacebook size={20} />}
                  {social.icon === "FaInstagram" && <FaInstagram size={20} />}
                  {social.icon === "FaTwitter" && <FaTwitter size={20} />}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>{FooterContent.copyright}</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

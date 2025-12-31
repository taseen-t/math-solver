import Link from "next/link";
import { Navlinks } from "@/constants/home"

const NavLinksMenu = () => {
  return (
    <ul className="hidden md:flex gap-x-7">
      {Navlinks.map((navItem, key) => {
        return (
          <li key={key} className="text-md font-medium">
            <Link href={navItem.link}>{navItem.heading}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinksMenu;

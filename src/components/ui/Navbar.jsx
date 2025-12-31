"use client"
import { useState } from "react"
import NavLogo from "../home/Navbar/Logo";
import NavLinksMenu from "../home/Navbar/Navlinks";
import NavCTA from "../home/Navbar/NavCTA";
import ResMenu from "../home/Navbar/ResMenu";
import MobMenu from "../home/Navbar/MobMenu";

const Navbar = () => {
  const [ isNavOpen , setNavOpen ] = useState(false);

  return <div className="relative w-full h-20 flex justify-center items-center py-3 px-8">
    <div className="relative container h-full rounded-full flex justify-between items-center px-7 py-3 bg-[rgba(255,255,255,0.1)] backdrop-blur-3xl text-white">
      <NavLogo />
      <NavLinksMenu />
      <NavCTA />
      <ResMenu isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </div>

    {/* Responsive Menu */}
    <MobMenu isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
  </div>
}

export default Navbar
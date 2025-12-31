import {  Navlinks } from "@/constants/home"
import Link from "next/link"
import { RxCross1 } from "react-icons/rx";

const MobMenu = (props) => {
  const { isNavOpen , setNavOpen } = props;
  return (
       <div className={`md:hidden ${isNavOpen ? "flex" : "hidden"} flex-col absolute top-0 left-0 w-11/12 h-screen bg-[rgba(255,255,255,0.1)] backdrop-blur-xl text-white py-6 px-4`}>

    {/* Close Icon  */}
    <div onClick={() => setNavOpen(false)} className="w-full flex justify-end text-2xl">
      <RxCross1 />
    </div>

    {/* NavLinks Resposive */}
    <ul className="w-full h-3/4 flex flex-col items-center justify-center gap-y-6">
      {
        Navlinks.map((navItem,key) => {
          return (
            <li key={key}>
              <Link href={navItem.link} className="text-3xl">{navItem.heading}</Link>
            </li>
          )
        })
      }
    </ul>
    </div>
  )
}

export default MobMenu
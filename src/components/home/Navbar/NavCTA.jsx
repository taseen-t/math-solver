const { navCTA } = require("@/constants/home")

const NavCTA = () => {
  return (
    <button className="hidden md:flex bg-white text-primary-900 font-medium px-6 py-1.5 rounded-full">
      {navCTA}
    </button>
  )
}

export default NavCTA
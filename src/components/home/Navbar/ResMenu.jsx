import { LuMenu } from "react-icons/lu";

const ResMenu = (props) => {
  const { isNavOpen , setNavOpen } = props;
  return (
    <div className="md:hidden flex text-2xl text-white font-medium" onClick={() => setNavOpen(!isNavOpen)}>
        <LuMenu />
    </div>
  )
}

export default ResMenu
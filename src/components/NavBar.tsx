import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

const NavBar = () => {
  return (
    <div className="flex justify-between p-2.5">
      <img src={logo} alt="" className="w-12" />
      <SearchInput />
      <ColorModeSwitch />
    </div>
  );
};
export default NavBar;

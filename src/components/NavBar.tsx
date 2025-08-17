import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
  handleOnSubmit: (value: string) => void;
}

const NavBar = ({ handleOnSubmit }: Props) => {
  return (
    <div className="flex justify-between p-2.5">
      <img src={logo} alt="" className="w-12" />
      <SearchInput handleOnSubmit={(value) => handleOnSubmit(value)} />
      <ColorModeSwitch />
    </div>
  );
};
export default NavBar;

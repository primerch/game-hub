import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div className="flex">
      <img src={logo} alt="" className="w-16" />
      <span className="m-auto">NavBar</span>
    </div>
  );
};
export default NavBar;

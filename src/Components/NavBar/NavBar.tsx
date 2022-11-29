import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-center gap-4 p-10 lg:text-lg text-white uppercase lg:font-semibold bg-gray-800 border-b border-b-gray-200/50">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/">Skills</Link>
      <Link to="/technologies">Technologies</Link>
    </div>
  );
};

export default NavBar;

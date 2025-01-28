import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-[#303256]  h-15 w-full ">
      <div className="text-white text-2xl ml-4">Minor</div>
      <div className="flex flex-row justify-around items-center gap-7 mr-7">
        <Link to="/Home"><div className="text-white ml-4 text-2xl ">Home</div></Link>
        <Link to="/Health"><div className="text-white ml-4 text-2xl ">Heath</div></Link>
        <Link to="/About"><div className="text-white ml-4 text-2xl ">About</div></Link>
      </div>
    </div>
  );
};

export default Navbar;

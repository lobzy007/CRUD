import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-10 items-center">
      <NavLink to={"/"}>
        <div className="font-extrabold font-mono">TABLE</div>
      </NavLink>
      <NavLink to={"/"}>
        <div className="font-mono text-7xl text-amber-800">CRUD</div>
      </NavLink>
      <NavLink to={"/add"}>
        <div className="font-extrabold font-mono">ADD ITEM</div>
      </NavLink>
    </div>
  );
};

export default Navbar;

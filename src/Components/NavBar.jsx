import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="NavBar">
      <ul className="NavBarList">
        <Link className="HomeLink" to="">
          <h1 className="ArticlesHeader">NC Articles.</h1>
        </Link>
        {pathname !== "/" ? null : (
          <div>
            <IoMenu className="MenuButton" onClick={() => setMenu(!menu)} />
            {menu ? <DropDown /> : null}
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;

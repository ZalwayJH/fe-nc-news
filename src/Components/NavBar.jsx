import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { useLocation } from "react-router-dom";

import Header from "./Header";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const { search } = useLocation();

  const selectedTopic = search.split("?topic=");

  return (
    <nav className="NavBar">
      <Header />
      <ul className="NavBarList">
        <Link className="HomeLink" to="">
          <h1 className="ArticlesHeader">
            {selectedTopic[1] ? selectedTopic[1] : "All"}
          </h1>
        </Link>
        {pathname !== "/" ? (
          <></>
        ) : (
          <div>
            <IoMenu className="MenuButton" onClick={() => setMenu(!menu)} />
            {menu ? <DropDown /> : <></>}
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;

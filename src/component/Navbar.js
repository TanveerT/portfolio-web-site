import React, { useState } from "react";
import Responsive from "./Responsive.js";

import Backdrop from "./SideDrawer/Backdrop";
import SideDrawer from "./SideDrawer/SideDrawer.js";
import "../css/Navbar.css";

const Navbar = () => {
  const [sideDrawer, setsideDrawer] = useState(false);

  let back;

  const drawerclickHandle = () => {
    setsideDrawer(!sideDrawer);
  };

  const backdropclickHandler = () => {
    setsideDrawer(!sideDrawer);
  };

  if (sideDrawer) {
    back = <Backdrop clickHandler={backdropclickHandler} />;
  }

  return (
    <div className="edu">
      <Responsive clickHandler={drawerclickHandle} />
      <SideDrawer show={sideDrawer} />
      {back}
    </div>
  );
};
export default Navbar;

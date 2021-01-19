import React from "react";
import clsx from "clsx";
import "./index.scss";

const NavItem = (props) => {
  const { Icon, name = "home", notif, active = false } = props;
  return (
    <div className={clsx("nav-item", active && "active")}>
      <div className="icon">
        {Icon}
        {notif && (
          <div className="notification">
            <span>{notif}</span>
          </div>
        )}
      </div>
      <span>{name}</span>
    </div>
  );
};

export default NavItem;

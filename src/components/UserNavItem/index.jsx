import React from "react";
import { ArrowDropDown } from "@material-ui/icons";
// import DefaultAvatar from

import "./index.scss";

const defaultAvatarSrc =
  "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";

const UserNavItem = () => {
  return (
    <div className="user-nav">
      {/* <img src={DefaultAvatar} alt="avatar"/> */}
      <img
        // src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        src={defaultAvatarSrc}
        alt="avatar"
      />
      <div className="content">
        <span>Me</span>
        <ArrowDropDown />
      </div>
    </div>
  );
};

export default UserNavItem;

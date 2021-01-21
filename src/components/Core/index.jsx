import React from "react";

import Post from "../Post";
import PostInput from "../PostInput";

import "./index.scss";

const Core = () => {
  return (
    <div className="core">
      <PostInput />
      <div className="divider" />
      <Post />
    </div>
  );
};

export default Core;

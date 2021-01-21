import React from "react";
import {
  Create,
  Photo,
  YouTube,
  Event,
  VerticalSplit,
} from "@material-ui/icons";

import "./index.scss";

const PostInput = () => {
  return (
    <div className="post-input">
      <div className="input">
        <Create />
        <input type="text" placeholder="Start a post" />
      </div>

      <div className="action">
        <div className="action-item">
          <Photo />
          <span>Photo</span>
        </div>

        <div className="action-item">
          <YouTube />
          <span>Video</span>
        </div>

        <div className="action-item">
          <Event />
          <span>Event</span>
        </div>

        <div className="action-item">
          <VerticalSplit />
          <span>Write article</span>
        </div>
      </div>
    </div>
  );
};

export default PostInput;

import React from "react";

import { Public, MoreHoriz, ThumbUp, Comment, Send } from "@material-ui/icons";

import "./index.scss";

const companyImg =
  "https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||117||contestfile_1&flp=1554116576-13511971185ca1efe0bcd5a0-26602492.jpg";

const Share = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    data-supported-dps="24x24"
    fill="currentColor"
    class="mercado-match"
    width="24"
    height="24"
    focusable="false"
  >
    <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
  </svg>
);

const Post = (props) => {
  return (
    <div className="post">
      <div className="header">
        <div className="avatar">
          <img src={companyImg} alt="post-avatar" />
        </div>

        <div className="info">
          <div className="name">Millenium Co.</div>
          <div className="folower-number">139 followers</div>
          <div className="time">
            <span>1w • </span>
            {/* <span className="mode"> */}
            <Public />
            {/* </span> */}
          </div>
        </div>

        <div className="more">
          <MoreHoriz />
        </div>
      </div>

      <div className="content">
        <p>sadsadsafdasf sf</p>
        <p>sadsadsafdasf sf</p>
        <p>sadsadsafdasf sf</p>
        <p>sadsadsafdasf sf</p>
      </div>

      <div className="post-divider"></div>

      <div className="social-action">
        <div className="social-action-item">
          <ThumbUp />
          <span className="action-name">like</span>
        </div>

        <div className="social-action-item">
          <Comment />
          <span className="action-name">comment</span>
        </div>

        <div className="social-action-item">
          <Share />
          <span className="action-name">share</span>
        </div>

        <div className="social-action-item">
          <Send />
          <span className="action-name">send</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

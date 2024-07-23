import React from "react";
import Js from "./image/What-Is-JavaScript-Used-For.avif";

function Post1() {
  return (
    <div className="post" id="javascript">
      <img src={Js} alt="JavaScript" />
      <h2>JavaScript</h2>
      <p>JavaScript is a versatile and powerful programming language...</p>
      <button>Read More</button>
    </div>
  );
}

export default Post1;

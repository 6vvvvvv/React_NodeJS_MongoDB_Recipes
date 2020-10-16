import React from "react";
import Leftcard from "./Leftcard";
import Showcase from "./Showcase";
import "../../static/css/frontpage.css";

const Frontpage = () => {
  return (
    <div>
      <div className="showcase-container">
        <Showcase />
      </div>

      <div className="recipe-container">
        <Leftcard />
      </div>
    </div>
  );
};

export default Frontpage;

import React from "react";
import Leftcard from "./Leftcard";
import Showcase from "./Showcase";
import "../../static/css/frontpage.css";

<<<<<<< HEAD
const Frontpage = (props) => {
=======
const Frontpage = () => {
>>>>>>> 5d8b3e5... ver16oct2020
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

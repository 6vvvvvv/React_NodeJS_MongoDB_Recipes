import React from "react";
import Recipe from "./Recipe";
// import Searchbar from "./Searchbar";
import Showcase from "./Showcase";

const Frontpage = (props) => {
  return (
    <div>
      <Showcase />
      <Recipe />
    </div>
  );
};

export default Frontpage;

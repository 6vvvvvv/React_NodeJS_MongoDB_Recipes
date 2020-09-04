import React from "react";
import "../../static/css/showcase.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Showcase = () => {
  return (
    <div className="showcase">
      <Carousel autoPlay infiniteLoop width="500px">
        <div>
          <img src={require("../../static/img/3547682.jpg")} alt="img3" />
        </div>
        <div>
          <img src={require("../../static/img/5595252.jpg")} alt="img4" />
        </div>
        <div>
          <img src={require("../../static/img/8100470.jpg")} alt="img5" />
        </div>
        <div>
          <img src="https://s8.gifyu.com/images/Frozen-Zabaglione.jpg" alt="img6" />
        </div>
        <div>
          <img src="https://s8.gifyu.com/images/Garlic-Sesame-Chicken-Thighs.jpg" alt="img7" />
        </div>
        <div>
          <img src="https://s8.gifyu.com/images/Gkai-Kamin.jpg" alt="img8" />
        </div>
      </Carousel>
    </div>
  );
};

export default Showcase;

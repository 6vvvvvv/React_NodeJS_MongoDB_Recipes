import React, { useEffect } from "react";
import "../../static/css/detail.css";
import { useHistory } from "react-router-dom";

const Detail = (props) => {
  let history = useHistory();
  const returnHome = () => {
    history.push("/");
  };

  useEffect(() => {
    console.log("props", props);
  }, [props]);

  return (
    <div>
      {props._id}
      <button onClick={returnHome}>Return</button>
    </div>
  );
};

export default Detail;

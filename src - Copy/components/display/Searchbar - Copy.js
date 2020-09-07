import React, { useState, useEffect } from "react";
import "../../static/css/searchbar.css";

const donnee = ["1", "2", "3"];
const Searchbar = () => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const result = donnee.filter((item) => item.includes(text));
    setDisplay(result);
  }, [text]);

  return (
    <div className="searchbar">
      <input
        type="text"
        id="input"
        className="input"
        onChange={onChange}
        value={text}
      />
      <div>
        {display.map((item) => (
          <li className="searchitem" key={item.toString()}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;

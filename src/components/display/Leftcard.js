import React, { useState, useEffect, useRef } from "react";
import "../../static/css/recipe.css";
import { connect } from "react-redux";
import {
  getPending,
  getRecipes,
  getError,
} from "../../redux/reducers/displayReducer";
import fetchApi from "../../redux/actions/fetchApi";
import Public from "./Public";
import { Link } from "react-router-dom";

const Leftcard = (props) => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);
  const textInput = useRef(null);

  useEffect(() => {
    props.fetchapi();
  }, []);

  useEffect(() => {
    const result = props.recipes.filter((item) => {
      var titleLowerCase = item.title.toLowerCase();
      return titleLowerCase.includes(text.toLocaleLowerCase());
    });
    setDisplay(result);
  }, [text, props.recipes]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const getfocus = () => {
    textInput.current.focus();
  };

  useEffect(() => {
    console.log("searchobject", display);
  }, [display]);

  const searchresult = display.map((searchitem, index) => {
    return (
      <div className="search-result" key={index}>
        <div className="recipe-img">
          <Link to="/user/detail">
            <img
              src={searchitem.imgpath}
              alt={searchitem.title}
              className="recipe-item"
            ></img>
          </Link>
        </div>

        <div className="recipe-discription">
          <div className="discription-container">
            <h5>{searchitem.title}</h5>
            <p>{searchitem.description}</p>
            <p>Author: {searchitem.author}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="search-bar">
        <i className="fas fa-search search-icon" onClick={getfocus}></i>
        <input
          type="text"
          id="input"
          className="searchinput"
          placeholder="Search your recipe here..."
          onChange={onChange}
          value={text}
          ref={textInput}
        />
      </div>
      <div className="show-recipes">
        {display.length > 0 ? (searchresult ): <Public />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pending: getPending(state),
  recipes: getRecipes(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchapi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leftcard);

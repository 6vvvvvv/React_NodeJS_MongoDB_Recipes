import React from "react";
import { connect } from "react-redux";
import {
  getPending,
  getRecipes,
  getError,
} from "../../redux/reducers/displayReducer";
import "../../static/css/recipe.css";
import { Link } from "react-router-dom";

const Public = (props) => {
  return (
    <div>
      {props.recipes.map((item, index) => (
        <div className="recipes" key={index}>
          <div className="recipe-img">
            <Link to={`/user/detail/${item._id}`}>
              <img
                src={item.imgpath}
                alt={item.title}
                className="recipe-item"
              ></img>
            </Link>
          </div>

          <div className="recipe-discription">
            <div className="discription-container">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <p>Author: {item.author}</p>
              <span>Click for detail...</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pending: getPending(state),
  recipes: getRecipes(state),
  error: getError(state),
});

export default connect(mapStateToProps, null)(Public);

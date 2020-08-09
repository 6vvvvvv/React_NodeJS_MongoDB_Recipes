import React from "react";
import "../../static/css/recipe.css";
import { connect } from "react-redux";
import {
  getPending,
  getRecipes,
  getError,
} from "../../redux/reducers/displayReducer";

const Rightcard = (props) => {
  return (
    <div className="box-right">
      <div className="row">
        <div className="col s6 ">
          <div className="discription">
            <p>
              Easy shrimp and sausage bake, delicious, healthier, and gluten
              free, all on one big sheet pan in the oven!
            </p>
            <span>Click for detail...</span>
          </div>
        </div>
        <div className="col s6 ">
          <div className="img-container">
            <img src={require("../../static/img/5595252.jpg")} alt="img2"></img>
          </div>
        </div>
      </div>
      <div>{props.recipes.title}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.recipeReducer.currentUser,
  pending: getPending(state),
  recipes: getRecipes(state),
  error: getError(state),
});

export default connect(mapStateToProps, null)(Rightcard);

import React from "react";
import { connect } from "react-redux";
import {
  getPending,
  getRecipes,
  getError,
} from "../../redux/reducers/displayReducer";

const Public = (props) => {
  return (
    <div>
      <div className="recipes">
        {props.recipes.map((item) => (
          <div key={item._id}>
            <div className="box-left">
              <div className="row">
                <div className="col s6">
                  <div className="img-container">
                    <img src={item.imgpath} alt={item.title}></img>
                  </div>
                </div>

                <div className="discription">
                  <p>{item.description}</p>
                  <p>Author: {item.author}</p>
                  <span>Click for detail...</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pending: getPending(state),
  recipes: getRecipes(state),
  error: getError(state),
});

export default connect(mapStateToProps, null)(Public);

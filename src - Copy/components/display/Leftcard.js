import React, {
  useState,
  useEffect
} from "react";
import "../../static/css/recipe.css";
import {
  connect
} from "react-redux";
import {
  getPending,
  getRecipes,
  getError,
} from "../../redux/reducers/displayReducer";
import fetchApi from "../../redux/actions/fetchApi";
import Public from "./Public";

const Leftcard = (props) => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState([]);

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

  useEffect(() => {
    console.log("change in display", display);
  }, [display]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const searchresult = display.map((searchitem, index) => {
    return (
      <div key={index}>
        <div className="searchresult">
          <div key={searchitem._id}>
            <div className="box-left">
              <div className="row">
                <div className="col s6">
                  <div className="img-container">
                    <img src={searchitem.imgpath} alt={searchitem.title}></img>
                  </div>
                </div>

                <div className="discription">
                  <h5>{searchitem.title}</h5>
                  <p>{searchitem.description}</p>
                  <p>Author: {searchitem.author}</p>
                  <span>Click for detail...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="searchbar">
        <input
          type="text"
          id="input"
          className="input"
          placeholder="Search item here..."
          onChange={onChange}
          value={text}
        />
      </div>
      <div>{display.length > 0 ? searchresult : <Public />}</div>
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
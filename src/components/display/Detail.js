<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "../../static/css/detail.css";
// import { useHistory, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

=======
import React, { useEffect } from "react";
import "../../static/css/detail.css";
import { Link, useParams } from "react-router-dom";
>>>>>>> 5d8b3e5... ver16oct2020
import { connect } from "react-redux";
import { getRecipes } from "../../redux/reducers/displayReducer";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const Detail = (props) => {
<<<<<<< HEAD
  // let history = useHistory();
  let parameter = useParams();
  // //TODO:
  // const returnHome = () => {
  //   history.push("/");
  // };
=======
  let parameter = useParams();
>>>>>>> 5d8b3e5... ver16oct2020

  useEffect(() => {
    console.log("parameterid", parameter.id);
  }, [parameter]);

  useEffect(() => {
    console.log("recipes", props.recipes);
  }, [props.recipes]);

  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, { fullWidth: true });
  }, []);

  const showpic = props.recipes.find((pic) => {
    return pic._id === parameter.id;
  });

  console.log("showpic", showpic);

  return (
    <div className="container">
      <div className="desciption">
        <img src={showpic.imgpath} className="detail-img" alt="4"></img>
        <div className="detail-description">
          <h4>{showpic.title}</h4>
          <p className="long-intro">{showpic.description}</p>
        </div>
        <div className="carousel carousel-step ">
<<<<<<< HEAD
          <a className="carousel-item" href="#one!">
            <img
              src="https://s8.gifyu.com/images/step1.jpg"
              alt="step1"
            ></img>
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://s8.gifyu.com/images/step2.jpg" alt="step2"></img>
          </a>
          <a className="carousel-item" href="#three!">
            <img
              src="https://s8.gifyu.com/images/step3.jpg"
              alt="step3"
            ></img>
          </a>
          <a className="carousel-item" href="#three!">
            <img
              src="https://s8.gifyu.com/images/step4.jpg"
              alt="step4"
            ></img>
          </a>
          <a className="carousel-item" href="#three!">
            <img
              src="https://s8.gifyu.com/images/step5.jpg"
              alt="step5"
            ></img>
          </a>
=======
          <Link className="carousel-item" to="#one!">
            <img src="https://s8.gifyu.com/images/step1.jpg" alt="step1"></img>
          </Link>
          <Link className="carousel-item" to="#two!">
            <img src="https://s8.gifyu.com/images/step2.jpg" alt="step2"></img>
          </Link>
          <Link className="carousel-item" to="#three!">
            <img src="https://s8.gifyu.com/images/step3.jpg" alt="step3"></img>
          </Link>
          <Link className="carousel-item" to="#three!">
            <img src="https://s8.gifyu.com/images/step4.jpg" alt="step4"></img>
          </Link>
          <Link className="carousel-item" to="#three!">
            <img src="https://s8.gifyu.com/images/step5.jpg" alt="step5"></img>
          </Link>
>>>>>>> 5d8b3e5... ver16oct2020
        </div>
      </div>

      <div className="share">
<<<<<<< HEAD
        <ul class="list-social-icons">
          <li class="list-inline-item">
            <a href="#">
              <span>
                <i class="far fa-star"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span>
                <i class="fab fa-pinterest-square"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span>
                <i class="fab fa-facebook-square"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span>
                <i class="fab fa-twitter-square"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span>
                <i class="fab fa-instagram-square"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span>
                <i class="fab fa-whatsapp-square"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span>
                <i class="fas fa-envelope-square"></i>
              </span>
            </a>
=======
        <ul className="list-social-icons">
          <li className="list-inline-item">
            <Link to="#">
              <span>
                <i className="far fa-star" />
              </span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <span>
                <i className="fab fa-pinterest-square" />
              </span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <span>
                <i className="fab fa-facebook-square" />
              </span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <span>
                <i className="fab fa-twitter-square" />
              </span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <span>
                <i className="fab fa-instagram-square" />
              </span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <span>
                <i className="fab fa-whatsapp-square" />
              </span>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#">
              <span>
                <i className="fas fa-envelope-square" />
              </span>
            </Link>
>>>>>>> 5d8b3e5... ver16oct2020
          </li>
        </ul>
      </div>

      <div className="discuss">
        <div className="comment-section">
          <h5>Comment:</h5>
          <ul>
            <li>1</li>
            <hr></hr>
            <li>2</li>
            <hr></hr>
            <li>3</li>
            <hr></hr>
            <li>4</li>
            <hr></hr>
            <li>5</li>
            <hr></hr>
            <li>6</li>
            <hr></hr>
            <li>7</li>
            <hr></hr>
          </ul>
        </div>

        <hr></hr>
        <div className="textarea">
          <h5>What do you like to comment?</h5>
          <textarea></textarea>
          <div className="button-area">
            {" "}
            <button className=" btn-small pink accent-1">
              <i className="material-icons left"></i>Submit
            </button>
            <button className="  btn-small pink accent-1">
              <i className="material-icons left"></i>Clear
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <footer class="page-footer">
        <div class="row">
          <div class="col l4 ">
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Support
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Site Map
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Contact Us
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Customer Support
                </a>
=======
      <footer className="page-footer">
        <div className="row">
          <div className="col l4 ">
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Support
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Site Map
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Customer Support
                </Link>
>>>>>>> 5d8b3e5... ver16oct2020
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: getRecipes(state),
});

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
=======
export default connect(mapStateToProps, null)(Detail);
>>>>>>> 5d8b3e5... ver16oct2020

import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../../redux/actions/recipeActionsCreactor";
import { connect } from "react-redux";
import "./Login.css"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const pswdChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/user/login",
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        localStorage.setItem(`user`, JSON.stringify(response.data));
        props.loginUser(response.data);
        props.history.push("/", { response: response.data });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        localStorage.removeItem(`user`);
      });
  };

  useEffect(() => {
    console.log("currentState to login in navbar", props.currentState);
  }, [props.currentState]);

  return (
    <div className="container">
      <div className="card login">
        <div className="card-content">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    name="email"
                    value={email}
                    onChange={emailChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    name="password"
                    value={password}
                    onChange={pswdChange}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>

              <div className="n-regis">
                <p>
                  Not registered?{" "}
                  <span>
                    <Link to="/user/signup" className="redirect">
                      Create an account
                    </Link>
                  </span>
                </p>
              </div>
              <div className="sigin-btn">
                <button
                  className="btn waves-effect waves-light pink"
                  name="action"
                  onClick={submit}
                >
                  Signin
                  <i className="material-icons right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentState: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userinfo) => dispatch(loginUser(userinfo)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const pswdChange = (e) => {
    setPassword(e.target.value);
  };

  const nameChange = (e) => {
    setUsername(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        props.history.push("/user/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card signup">
      <div className="card-content">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="username"
                  type="text"
                  className="validate"
                  name="username"
                  value={username}
                  onChange={nameChange}
                />
                <label htmlFor="username">Username</label>
              </div>
            </div>

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
            <div className="row">
              <p>
                Already registered?{" "}
                <span>
                  <Link to="/login" className="redirect">
                    Sign In
                  </Link>
                </span>
              </p>
            </div>
            <div className="row">
              <button
                className="btn waves-effect waves-light pink"
                name="action"
                onClick={submit}
              >
                Signup
                <i className="material-icons right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signup);

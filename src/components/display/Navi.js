import React, { Component } from "react";
import "../../static/css/nav.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Navi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedin: "",
      loginState: false,
    };
  }

  componentDidMount = () => {
    if (!localStorage.length) {
      this.setState({
        loginState: false,
      });
      return this.props.history.push("/user/login");
    } else {
      var userinfo = JSON.parse(localStorage.getItem("user"));
      var token = userinfo.token;
      axios
        .get("http://localhost:4000/user/me", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          if (res.data.user) {
            this.setState({
              userLoggedin: res.data.user,
              loginState: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/user/login"> React-Redux-Node-Recipe</Link>

            {this.state.loginState ? (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>Hello,{this.state.userLoggedin.username}</li>
                <li>
                  <Link to="/user/logout">Logout</Link>
                </li>
                <li>
                  <Link to="/user/me">Me</Link>
                </li>
              </ul>
            ) : (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>Welcome, please login!</li>
                <li>
                  <Link to="/user/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/user/login">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navi);

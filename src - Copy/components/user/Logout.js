import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/recipeActionsCreactor";
import { withRouter, Link } from "react-router-dom";
import avatar from "../../static/img/avatar.png";
import "./Logout.css";

const Logout = (props) => {
  const logout = () => {
    const { logoutUser } = props;
    logoutUser();
    props.history.push("/user/login");
    window.location.reload();
  };

  useEffect(() => {
    console.log("currentState to logout in navbar", props.currentState);
    if (!localStorage.length) {
      return props.history.push("/user/login");
    }
  }, [props.currentState, props.history]);

  return (
    <div className="row">
      {" "}
      <div className="col s4"></div>{" "}
      <div className="col s3">
        <div className="card logout">
          <div className="card-content">
            <div className="row">
              <div className="imgcontainer col s12">
                <img src={avatar} alt="Avatar" className="avatar" />
              </div>
              <form className="col s12">
                <div className="row">
                  <p className="return-home">
                    Still want to buy?{" "}
                    <span>
                      <Link to="/" className="redirect">
                        Return to HomePage
                      </Link>
                    </span>
                  </p>
                </div>

                <div className="row">
                  <button
                    className="btn waves-effect waves-light pink logout-btn "
                    name="action"
                    onClick={logout}
                  >
                    Sign Out and Leave
                    <i className="material-icons right"></i>
                  </button>
                </div>
              </form>
            </div>
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
  logoutUser: () => dispatch(logoutUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));

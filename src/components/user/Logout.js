import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/recipeActionsCreactor";
import { withRouter } from "react-router-dom";

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
      <button
        className="btn waves-effect waves-light pink"
        name="action"
        onClick={logout}
      >
        Log Out
        <i className="material-icons right"></i>
      </button>
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

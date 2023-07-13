import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN, selectName } from "../../redux/features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  // For navigating to logout page while clicking the logout button
  const navigate = useNavigate();

  // For Displaying the name of the user
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };
  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">{name} </span>
        </h3>
        <button onClick={logout} className="--btn --btn-danger">
          Logout
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;

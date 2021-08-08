import React, { useState } from "react";
import { useAuth } from "../../Context/Context";
import "./acount.css";
import { NavLink, useHistory } from "react-router-dom";
import BackBtn from "./BackBtn";

const Acount = () => {
  const { currentUser, logout } = useAuth();
  const [error, seterror] = useState("");
  const history = useHistory();
  //Log out form
  const handleLogout = async () => {
    seterror("");
    try {
      await logout();
      history.push("/login");
    } catch {
      seterror("Log out file");
    }
  };
  return (
    <>
      <div className="acount_body">
      <div className="acount_logo">Netflix</div>
      <BackBtn class='arrow_main_div' />
        <section>
          <div className="acount_main_div">
            <div className="acount_information">
              <i className="far fa-user-circle" id="acount_icon"></i>

              <p>
                <strong>Name </strong>: {currentUser.email}
              </p>
              <p>
                <strong>Email </strong>: {currentUser.email}
              </p>
              <p>
                <strong>Joind </strong>: {currentUser.metadata.creationTime}
              </p>
              <p>
                <strong>Last Sign In </strong>:
                {currentUser.metadata.lastSignInTime}
              </p>
            </div>
            <div className="acount_btns">
              <NavLink to="/save">
                <button className='save_btn'>Wish List</button>
              </NavLink>
              <button onClick={handleLogout}>Log out</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Acount;

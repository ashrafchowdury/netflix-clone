import React, { useRef, useState } from "react";
import "./form.css";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../Context/Context";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //call the sign up context from AuthProvider
  const { signup } = useAuth();
  const [error, seterror] = useState(""); //this is for show error
  const history = useHistory(); //using history to push home page

  let notMatch ;
  //submit function call
  const handleSubmit = async (e) => {
    e.preventDefault();
    //pass & confirme pass do not match
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return seterror("password do note match");
    }
    //
    try {
      seterror("Sign up sucsses fully");
      await signup(emailRef.current.value, passwordRef.current.value); //this is push value on firebase
      history.push("/movies");
    } catch {
      seterror("filed to create an acount");
     notMatch = 'password not match'
    }
  };

  return (
    <div className="form_body">
      <div className="form_div">
        <form>
          <h1>Sign Up</h1>
          <input
            type="email"
            placeholder="Email"
            className="input_value"
            ref={emailRef}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input_value"
            ref={passwordRef}
            required
          />
          <input
            type="password"
            placeholder="Confirem Password"
            className="input_value"
            ref={passwordConfirmRef}
            required
          />
          <span>{notMatch}</span>
          <button
            className="form_btn"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <div className="remember_div">
            <span>
              <input type="checkbox" className="checkbox" />
              <label>Remember me</label>
            </span>
            <p>Need help?</p>
          </div>
          <div>
            <button className="facebook_btn">
              <span></span> Sign Up with Facebook
            </button>
            <p className="have_acount">
              You have an acount :
              <strong>
                <NavLink exact to="/login">
                  Log in now.
                </NavLink>
              </strong>
            </p>
            <p className="form_pera">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span>Learn more.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useRef, useState, useEffect } from "react";
import "./form.css";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../Context/Context";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  //call the sign up context from AuthProvider
  const { login } = useAuth();
  const [error, seterror] = useState(""); //this is for show error
  const history = useHistory(); //using history to push home page

  //submit function call
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      seterror("Sign up sucsses fully");
      await login(emailRef.current.value, passwordRef.current.value); //this is push value on firebase
      history.push("/movies");
    } catch {
      seterror("filed to create an acount");
    }
  };
  return (
    <>
      <div className="form_body">
        <div className="form_div">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" className="input_value" ref={emailRef} />
            <input
              type="password"
              placeholder="Password"
              className="input_value"
              ref={passwordRef}
            />
            <button className="form_btn" onClick={handleSubmit}>Sign In</button>
            <div className="remember_div">
              <span>
                <input type="checkbox" className="checkbox" />
                <label>Remember me</label>
              </span>
              <p>Need help?</p>
            </div>
            <div>
              <button className="facebook_btn">
                <span></span> Sign In with Facebook
              </button>
              <p className="have_acount">
                New to Netflix : <strong><NavLink exact to='/signup'>Sign Up now.</NavLink></strong>
              </p>
              <p className="form_pera">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <span>Learn more.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

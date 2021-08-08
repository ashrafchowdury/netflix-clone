import React from "react";
import "./home.css";
import Question from "./Accordion";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const Home = () => {
  return (
    <>
      <Navbar  />

      <div className="header_section">
        <div className="header_heading">
          <h2>Welcome back!</h2>
          <h1>
            Unlimited movies, TV <br />
            shows, and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <NavLink exact to='/signup'>
          <button className="header_btn">
            Finish Sign Up
            <span>
              <i className="fal fa-chevron-right"></i>
            </span>
          </button>
          </NavLink>
        </div>
      </div>

      <div className="line"></div>

      <section className="section1">
        <div className="section1_pera">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, <br />
            Chromecast, Apple TV, Blu- ray players, and <br />
            more.
          </h2>
        </div>
        <div className="section1_image">
          <img src="images/tv.png" alt="image" />
        </div>
      </section>

      <div className="line"></div>

      <section className="section2">
        <div className="section2_image">
          <img
            src="images/mobile-0819.jpg"
            alt="immage"
            className="section2_main_img"
          />
          <div className="child_image">
            <img
              src="images/boxshot.png"
              alt="image"
              className="section2_child_img"
            />
            <div>
              <p>
                <strong>Stranger Things</strong> <br />
                <span>Downloading...</span>
              </p>
            </div>
            <i className="fal fa-arrow-to-bottom"></i>
          </div>
        </div>

        <div className="section2_pera">
          <h1>
            Download your shows 
            to watch offline.
          </h1>
          <h2>
            Save your favorites easily and always have 
            something to watch.
          </h2>
        </div>
      </section>
      <div className="line"></div>

      <section className="mini_section">
      <div>
        <h1>Watch everywhere.</h1>
        <h2>
          Stream unlimited movies and TV shows on <br />
          your phone, tablet, laptop, and TV.
        </h2>
        </div>
      </section>
      <div className="line"></div>


      <section className="section3">
        <img src="images/image.png" alt="image" />
        <div className="section3_pera">
          <h1>
            Create profiles for 
            kids.
          </h1>
          <h2>
            Send kids on adventures with their favorite 
            characters in a space made just for them—free 
            with your membership.
          </h2>
        </div>
      </section>
      <div className="line"></div>
     
      <section className="section4">
        <h1>Frequently Asked Questions</h1>
        <Question />
      </section>

      <div className='footer_signup_btn'>
      <NavLink exact to='/signup'>
          <button className="header_btn">
            Finish Sign Up
            <span>
              <i className="fal fa-chevron-right"></i>
            </span>
          </button>
          </NavLink>
      </div>

      <div className="line"></div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;

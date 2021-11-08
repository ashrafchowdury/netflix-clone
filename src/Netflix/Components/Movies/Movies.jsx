import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/Context"; //context
import { useHistory, NavLink } from "react-router-dom"; //router
import "./movie.css"; //css
import Carts from "./Components/Carts"; //component
import Footer from "../Navbar/Footer";

const Movies = () => {
  const [trending, settrending] = useState([]);
  const [curTrending, setcurTrending] = useState([]);
  const [fictions, setfictions] = useState([]);
  const [tvs, settvs] = useState([]);
  const [top, settop] = useState([]);
  const [poster, setposter] = useState();
  const [title, settitle] = useState();
  const [name, setname] = useState();
  const [btns, setbtns] = useState("none");
  const [wishList, setwishList] = useState([
    {
      id: "",
      Namedata: "",
      posterData: "",
    },
  ]);

  const { logout } = useAuth();
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

  //cll all apis in here
  let trend = `https://api.themoviedb.org/3/trending/all/week?api_key=4bb0a98d9a5c90ff1399c3a8937544a7&language=en`;
  let trendName = "Trending Movies";
  const getData = async (api) => {
    let res = await fetch(api);
    let callData = await res.json();
    settrending(callData.results);
    setcurTrending(callData.results[0]);
  };
  let fictionsApi = `https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&api_key=4bb0a98d9a5c90ff1399c3a8937544a7`;
  let ficName = "Fictions Movies";
  const fiction = async (api) => {
    let res = await fetch(api);
    let callData = await res.json();
    setfictions(callData.results);
  };
  let top_rated = `https://api.themoviedb.org/3/trending/all/week?api_key=4bb0a98d9a5c90ff1399c3a8937544a7&language=en&page=2`;
  let topName = "Top Movise";
  const topRate = async (api) => {
    let res = await fetch(api);
    let callData = await res.json();
    settop(callData.results);
  };
  let tv = `https://api.themoviedb.org/3/discover/tv?api_key=4bb0a98d9a5c90ff1399c3a8937544a7&with_networks=213`;
  let tvName = "Tv Shows";
  const topTv = async (api) => {
    let res = await fetch(api);
    let callData = await res.json();
    settvs(callData.results);
  };

  useEffect(() => {
    getData(trend);
    fiction(fictionsApi);
    topRate(top_rated);
    topTv(tv);
  }, []);

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(wishList));
  }, [wishList]);

  const handleSavedata = () => {
    setwishList([...wishList, { posterData: poster, Namedata: name }]);
  };

  let IMAGE_API = `https://image.tmdb.org/t/p/w500`;
  return (
    <>
      <nav className="movie_navbar">
   
        <div className="movies_logo">Netflix</div>

        <div>
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="far fa-user-circle"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <NavLink exact to="/acount">
                  <button className="dropdown-item">Acount</button>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/save">
                  <button className="dropdown-item">Wish List</button>
                </NavLink>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="image_blur"></div>
      
      <div className="movie_header_image">
    
        <img
          src={IMAGE_API + curTrending.poster_path}
          className="cur_header_image"
        />
        <img
          src={IMAGE_API + poster}
          className="header_image"
          style={{ display: btns }}
        />

        <div>
          <h1>{name}</h1>
          <button style={{ display: btns }}>Play</button>
          <button onClick={handleSavedata} style={{ display: btns }}>
            Wish list
          </button>
          <p>{title}</p>
        </div>
      </div>

      <Carts
        movie={trending}
        setposter={setposter}
        heading={trendName}
        setname={setname}
        setbtns={setbtns}
        settitle={settitle}
      />
      <Carts
        movie={fictions}
        setposter={setposter}
        heading={ficName}
        setname={setname}
        setbtns={setbtns}
        settitle={settitle}
      />
      <Carts
        movie={top}
        setposter={setposter}
        heading={topName}
        setname={setname}
        setbtns={setbtns}
        settitle={settitle}
      />
      <Carts
        movie={tvs}
        setposter={setposter}
        heading={tvName}
        setname={setname}
        setbtns={setbtns}
        settitle={settitle}
      />
      <Footer />
    </>
  );
};

export default Movies;

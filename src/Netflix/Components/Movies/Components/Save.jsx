import React, { useState } from "react";
import '../movie.css'
import BackBtn from "./BackBtn";
const getData = () => {
  let movies = localStorage.getItem("movie");
  if (movies) {
    return JSON.parse(localStorage.getItem("movie"));
  } else {
    return [];
  }
};
const Save = () => {
  const [state, setstate] = useState(getData());

const handleDeleteMovies = (id) => {
    setstate((state) => {
        return state.filter((ele, index) => {
          return index !== id ;
        });
      });
}

  let IMAGE_API = `https://image.tmdb.org/t/p/w300`;
  return (
    <>
    <BackBtn class='save_back' />
    <div className='save_main_div'>
    <h1>Save Movies</h1>
      {state ? (
        <div>
          {state.length > 0 &&
            state.map((value, index) => {
              return (
                <div key={index} id={index} className='save_movis_div'>
                  <img src={IMAGE_API + value.posterData} alt="image" />
                  <h3>{value.Namedata}</h3>
                  <div className='save_trash' onClick={() => handleDeleteMovies(index)}><i className="fas fa-trash-alt"></i></div>
                </div>
              );
            })}
        </div>
      ) : (
        <div>no data found</div>
      )}
    </div>
    </>
  );
};

export default Save;

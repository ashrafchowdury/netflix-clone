import React from "react";

const Carts = ({ movie, setposter, heading, settitle, setname, setbtns }) => {
    
    let IMAGE_API = `https://image.tmdb.org/t/p/w300`;

  return (
    <>
      <div className="movies_main_div" id="first_component">
        <h1>{heading}</h1>
        {movie ? (
          <div className="movies_section">
            {movie.length > 0 &&
              movie.map((value) => {
                return (
                  <div key={value.id} className="box" onClick={() => {
                      setposter(value.poster_path)
                      settitle(value.overview)
                      setname(value.original_title)
                      setbtns('block')
                  }  } >
                    <img src={IMAGE_API + value.poster_path} alt="image" />
                  </div>
                );
              })}
          </div>
        ) : (
          <div>not found</div>
        )}
      </div>
    </>
  );
};

export default Carts;

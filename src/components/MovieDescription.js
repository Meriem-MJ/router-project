import React, { useState, useRef, useEffect } from "react";
import Iframe from 'react-iframe'
import { Link } from "react-router-dom";

function MovieDescription ({match}) {
  const [displayTrailer, setDisplayTrailer] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView();
  }, [displayTrailer]);


  const handleShow = () => {
    setDisplayTrailer(true);
  };

  return (
    <React.Fragment>
      <Link to="/">
        <button className="btn">
          Go Back Home
        </button>
      </Link>

      <div className="movie">
        <div className="movie-image">
          <img src={match.params.posterUrl} alt="movieposter" />
        </div>
        <div className="movie-decription">
          <h2>{match.params.title}</h2>
          <p>{match.params.description}</p>
          <button className="btn-trailer" onClick={handleShow}>
            <span>watch trailer</span>
          </button>
        </div>
      </div>
      <div
        className="movie-trailer"
        style={displayTrailer ? { display: "block" } : { display: "none" }}
        ref={myRef}
      >
        <Iframe
          title="movie trailer"
          width="956"
          height="538"
          src={match.params.trailer}
          allowfullscreen
        ></Iframe>
      </div>
    </React.Fragment>
  );
};

export default MovieDescription;
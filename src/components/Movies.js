import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesContent = movies.map((mov) =>
    <div key={mov.time}>
      <h2>{mov.title}</h2>
      <p>{mov.time}</p>
      <ul>
        <li>{mov.genres}</li>
      </ul>
    </div>
  )
  return (
    <>
      <h1>Movies Page</h1>
      <div>{moviesContent}</div>
    </>





  )


}

export default Movies;

import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsContent = directors.map((dir) =>
    <div key={dir.name}>
      <h2>{dir.name}</h2>
        <ul>
        <li>{dir.movies}</li>
      </ul>
    </div>
  )

  return (
        <>
      <h1>Directors Page</h1>
      <>{directorsContent}</>
    </>
  )
    
    
}

export default Directors;

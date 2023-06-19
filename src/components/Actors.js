import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsContent = actors.map((act) =>
    <div key={act.name}>
      <h2>{act.name}</h2>
        <ul>
        <li>{act.movies}</li>
      </ul>
    </div>
  )
  return (
    <>
      <h1>Actors Page</h1>
      <>{actorsContent}</>
    </>





  )
}

export default Actors;

import React from "react";
import "./genre-item.scss";

export default function GenreItem(props) {
  return (
    <div className="genre">
      <div className="genre__content">
        <img className="genre__cover" src={props.genre.img} alt="" />

        <h2 className="genre__title">{props.genre.name}</h2>
      </div>
    </div>
  );
}

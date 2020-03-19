import React from "react";
import genres from "../../utils/genres";
import GenreItem from "./GenreItem";
import "./genres.scss";

export default function Genres(props) {
  return (
    <div>
      <p>Hello </p>
      <div className="genres">
        {genres.map(genre => (
          <GenreItem genre={genre} key={genre.id} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./search.scss";

export default function Search(props) {
  return (
    <div className="search">
      <ion-icon name="search-outline"></ion-icon>
      <input
        className="search__input"
        type="search"
        placeholder="Search for songs, artists etc..."
      />
    </div>
  );
}

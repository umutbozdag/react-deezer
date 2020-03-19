import React from "react";
import "./search.scss";

export default function Search(props) {
  return (
    <div className="search">
      <i style={{ color: "white", paddingLeft: 12 }} class="fas fa-search"></i>
      <input className="search__input" type="search" placeholder="Search..." />
    </div>
  );
}

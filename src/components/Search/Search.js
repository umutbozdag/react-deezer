import React from "react";
import "./search.scss";
import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
  return (
    <div className="search">
      <SearchIcon style={{ color: "white", paddingLeft: 12 }} />
      <input className="search__input" type="search" placeholder="Search..." />
    </div>
  );
}

import React from "react";

export default function ArtistDetail(props) {
  return (
    <div>
      <h1>Artist detail for {props.match.params.id}</h1>
    </div>
  );
}

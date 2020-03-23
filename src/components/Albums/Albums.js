import React from "react";
import AlbumItem from "./AlbumItem";
import "./albums.scss";
import Loading from "../Loading";
import ScrollMenu from "react-horizontal-scrolling-menu";

export default function Albums(props) {
  const Arrow = ({ name, className }) => {
    return (
      <div className={className}>
        <ion-icon name={name}></ion-icon>
      </div>
    );
  };

  const ArrowLeft = Arrow({
    name: "chevron-back-outline",
    className: "arrow-prev"
  });
  const ArrowRight = Arrow({
    name: "chevron-forward-outline",
    className: "arrow-next"
  });
  return (
    <div className="albums">
      <h1 className="albums__title">Trending Albums</h1>
      <div className="albums__container">
        <div className="albums__content">
          {props.isPending ? (
            <div className="albums__loading">LOADING</div>
          ) : (
            <ScrollMenu
              arrowClass="arrow"
              itemClass="CardOffset"
              alignCenter={false}
              data={
                props.albums &&
                props.albums.map(album => (
                  <AlbumItem album={album} key={album.id} />
                ))
              }
              arrowRight={ArrowRight}
              arrowLeft={ArrowLeft}
              dragging={true}
              wheel={true}
              alignOnResize={true}
            />
          )}

          {/* {props.isPending ? (
            <div>
              <Loading />
            </div>
          ) : (
            props.albums &&
            props.albums.map(album => (
              <AlbumItem album={album} key={album.id} />
            ))
          )} */}
        </div>
      </div>
    </div>
  );
}

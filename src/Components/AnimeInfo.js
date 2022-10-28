import React from "react";

export const AnimeInfo = (props) => {
  const {
    title,
    images: {
      jpg: { large_image_url },
    },
    source,
    score,
    popularity,
    status,
    rating,
    duration,
  } = props.animeInfo;
  return (
    <>
      <div className="anime-content">
        <h1>{title}</h1>
        <hr />
        <br />
        {/* <img src={props.animeInfo.images.jpg.large_image_url} alt="" /> */}
        <img src={large_image_url} alt="" />
        <br />
        <br />
        <hr />
        <br />
        <div className="info">
          <h4>평점: {score}</h4>
          <h4>인기도: {popularity}</h4>
          <h4>원작:{source}</h4>
          <h4>에피소드 길이:{duration}</h4>
          <h4>방영 유무:{status}</h4>
          <h4>등급:{rating}</h4>
          <br />
          <hr />
        </div>
      </div>
    </>
  );
};

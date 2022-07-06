import React from "react";
import Thumbnail from "./react-js.png";

const YoutubeComp = (props) => {
  return (
    <div className="container">
      <img
        src={Thumbnail}
        alt="React Js Thubnail"
        width={300}
        className="img-thumbnail mb-3"
      />
      <div className="h5">{props.title}</div>
      <div className="text-muted">{props.desc}</div>
    </div>
  );
};

YoutubeComp.defaultProps = {
  tittle: "No tittle",
  desc: "NO description",
};

export default YoutubeComp;

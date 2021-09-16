import React from "react";
// video file import
import VG from "../Video/bg-video.mp4";
import "./Video.css";
import Title from "../Title/Title";

function VideoBg() {
  return (
    <div className="video__bg">
      <video autoPlay loop muted className="video">
        <source src={VG} type="video/mp4" />
      </video>
      <Title />
    </div>
  );
}

export default VideoBg;

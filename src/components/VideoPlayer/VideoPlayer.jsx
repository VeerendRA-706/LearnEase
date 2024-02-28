import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer =(e)=>{
    if(e.target === player.current){
      setPlayState(false)
    }
  }

  return (
    <>
      <div className={`VideoPlayer ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
        <video
          controls
          muted
          autoPlay
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        ></video>
      </div>
    </>
  );
};

export default VideoPlayer;

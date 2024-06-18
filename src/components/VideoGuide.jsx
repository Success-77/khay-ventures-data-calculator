import React from "react";
import videoGuide from "../assets/videos/calculator_video_guide.mp4";

const VideoGuide = () => {
  return (
    <div className="video-guide">
      <div className="video-description">
        <h1>Video Guide</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          nostrum maiores nesciunt aperiam iure aliquid architecto facilis quos
          odio veniam deleniti aut blanditiis dignissimos quas quam, quibusdam
          error ab asperiores.
        </p>
      </div>
      <div className="video-container">
        <video controls autoPlay mute loop autoFocus>
          <source src={videoGuide} />
        </video>
      </div>
    </div>
  );
};

export default VideoGuide;

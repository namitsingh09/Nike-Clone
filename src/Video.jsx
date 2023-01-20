import React, { useRef } from 'react';
import Vid from "./s.mp4"
import "./video.css"

function VideoPlayer() {
    return (
        <div>
            <h1 id='ksl'>Nike Blast Pack</h1>
        <div className='sx'>
            
      <video id="xz" autoPlay>
        <source src={Vid} type="video/mp4" />
      </video>
      </div>
      </div>
    );
  }
  export default VideoPlayer;
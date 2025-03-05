import React from 'react';

const Video = () => {
  return (
    <div>
      <video width="400" controls>
        <source src="http://localhost:5000/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

import React from 'react';
import datastructures from './image/intro-data-structure-–-1.png';

function Post2() {
  return (
    <div className="post" id="datastructures">
      <img src={datastructures} alt="Data Structures" />
      <h2>Data Structures</h2>
      <p>Data structures are a way of organizing and storing data...</p>
      <button>Read More</button>
    </div>
  );
}

export default Post2;

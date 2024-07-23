import React from "react";
import { Link } from "react-router-dom";
import js from './image/What-Is-JavaScript-Used-For.avif'
import datastructures from './image/intro-data-structure-–-1.png';
import Algorithms from './image/algorithm ieee seminar topics for computer science.webp'
import networkk from  './image/computer-networking.webp'

function Posts() {
  return (
    <div className="posts">
      <div className="post">
        <img src={js} alt="JavaScript" />
        <h2>JavaScript</h2>
        <p>JavaScript is a versatile and powerful programming language...</p>
        <Link to="/post1">
          <button>Read More</button>
        </Link>
      </div>
      <div className="post">
        <img src={datastructures} alt="Data Structures" />
        <h2>Data Structures</h2>
        <p>Data structures are a way of organizing and storing data...</p>
        <Link to="/post2">
          <button>Read More</button>
        </Link>
      </div>
      <div className="post" id="Algorithms">
        <img src={Algorithms} alt="Algorithms" />
        <h2>Algorithms</h2>
        <p>Algorithms are a way of organizing and storing data...</p>
        <Link to="/post3">
          <button>Read More</button>
        </Link>
      </div>
      <div className="post" id="Computer Networks">
        <img src={networkk} alt="Computer Networks" />
        <h2>Computer Networks</h2>
        <p>Computer Networks are a way of organizing and storing data...</p>
        <Link to="/post4">
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default Posts;

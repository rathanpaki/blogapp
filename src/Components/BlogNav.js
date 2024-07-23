import React from "react";
import { Link } from "react-router-dom";
import "./BlogNav.css";
import logo from "./image/blogger_B-logo-47610B2F87-seeklogo.com.png";

function BlogNav() {
  return (
    <nav className="blog-nav">
      <div className="logo">
        <Link to="/blogapp">
          <img src={logo} alt="logo"></img>
        </Link>
        Blog Platform
      </div>
      <ul>
        <li>
          <Link to="/post1">JavaScript</Link>
        </li>
        <li>
          <Link to="/post2">Data Structures</Link>
        </li>
        <li>
          <Link to="/Post3">Algorithms</Link>
        </li>
        <li>
          <Link to="/Post4">Computer Networks</Link>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default BlogNav;

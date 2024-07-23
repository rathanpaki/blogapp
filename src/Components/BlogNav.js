import React from 'react';
import './BlogNav.css';  
import logo from './image/blogger_B-logo-47610B2F87-seeklogo.com.png'

function BlogNav() {
  return (
    <nav className="blog-nav">
      <div className="logo"><img src={logo} alt='logo'></img>Blog Platform</div>
      <ul>
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#datastructures">Data Structures</a></li>
        <li><a href="#algorithms">Algorithms</a></li>
        <li><a href="#computernetworks">Computer Networks</a></li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default BlogNav;

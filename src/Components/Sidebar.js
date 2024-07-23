import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Create CSS file for styling if needed

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Recent Posts</h2>
      <ul>
        <li><Link to="/post1">JavaScript</Link></li>
        <li><Link to="/post2">Data Structures</Link></li>
        <li><Link to="/post3">Algorithms</Link></li>
        <li><Link to="/post4">Computer Networks</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

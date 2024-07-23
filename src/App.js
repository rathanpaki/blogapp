import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogNav from './Components/BlogNav';
import Posts from './Components/Posts';
import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';
import Sidebar from './Components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BlogNav />
        <div className="content">
         
          <Routes>
            <Route path="/blogapp" element={<Posts />} />
            <Route path="/post1" element={<Post1 />} />
            <Route path="/post2" element={<Post2 />} />
            <Route path="/post3" element={<Post3 />} />
            <Route path="/post4" element={<Post4 />} />
          </Routes>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
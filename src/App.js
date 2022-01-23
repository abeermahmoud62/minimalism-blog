import React from 'react';
import {
  BrowserRouter as Router,
 
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import RecentPosts from './components/RecentPosts';
function App() {
  return(
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/recent" element={<RecentPosts />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;

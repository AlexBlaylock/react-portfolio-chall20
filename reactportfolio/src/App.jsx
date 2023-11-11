//importing react instead of just useState
import React from 'react';
// destructure BrowserRouter
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// imports css
import './App.css'
import 'bulma/css/bulma.min.css'; //importing bulma
import './colors.css'
// import './Border.css';


// importing the components I will be using
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Border from './components/Border';
// these components will show on every page
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // sets up the route
    <Router>
      {/* will add class later */}
      <div className="full-height primaryBGC">
        <main className="section justify-content-center">
        {/* displays header */}
        <div className="container is-centered fourthBGC" id="contentContainer">
        <Header/>
            <Routes className="">
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            
        </div>
        
        {/* displays footer */}
        <Footer/>
        </main>
      </div>
    </Router>
  );
}

//exporting app
export default App

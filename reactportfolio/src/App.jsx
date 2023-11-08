//importing react instead of just useState
import React from 'react';
// destructure BrowserRouter
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// imports css
import './App.css'

// importing the components I will be using
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// these components will show on every page
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // sets up the route
    <Router>
      {/* will add class later */}
      <div className="app">
        {/* displays header */}
        <Header/>
        <main>
          <Routes>
            {/* routing to the components since this is single page*/}
            <Route path="/"  element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </main>
        {/* displays footer */}
        <Footer/>
      </div>
    </Router>
  );
}

//exporting app
export default App

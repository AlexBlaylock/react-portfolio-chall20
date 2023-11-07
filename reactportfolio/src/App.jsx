//importing react instead of just useState
import React from 'react';
// destructure BrowserRouter
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
      <div className="app">
        {/* displays header */}
        <Header/>
        <main>
          <Switch>
            {/* routing to the components since this is single page */}
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/" component={About}/>
          </Switch>
        </main>
        {/* displays footer */}
        <Footer/>
      </div>
    </Router>
  );
}

//exporting app
export default App

import React from 'react';
// importing custom colors
import "../colors.css"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Game Pop!',
      description: 'My last group project, focused on building a fullstack application. A higher/lower browser game. Built in React. I did the styling, using MUI.',
      githubLink: 'https://github.com/wyattbarger/gamepop-over-under',
      deployedLink: 'https://game-pop-0133abbe0985.herokuapp.com/',
      image: '/gamepop.png',
    },
    {
      id: 2,
      title: 'Music Explorer',
      description: 'My 1st group project, focused on using APIs. I was tasked with some of the HTML and styling. Used Tailwind as the CSS library.',
      githubLink: 'https://github.com/bycait27/music-exploration',
      deployedLink: 'https://bycait27.github.io/music-exploration/',
      image: '/groupchallss1.png',
    },
    {
      id: 3,
      title: 'Liftr',
      description: 'My 2nd group project focused on using Handlebars and Ajax. I was tasked with styling. We used Bulma as a CSS library. ',
      githubLink: 'https://github.com/btsmith1212/Workout-Tracker',
      deployedLink: 'https://lifter-6a5bb4529987.herokuapp.com/login',
      image: '/liftrss.png',
    },
    {
      id: 4,
      title: 'React Portfolio',
      description: 'This project, my first application built using React. Built from scratch within 1 week of learning React. Used Bulma and custom styling.',
      githubLink: 'https://github.com/AlexBlaylock/react-portfolio-chall20',
      // placeholder for now deployedLink: 'https://lifter-6a5bb4529987.herokuapp.com/login',
      image: '/reactportfolioss1.png',
    },
  ];

  // template for the cards, use array above to fill them
  return (
    <div className="container">
      <div className="columns is-centered is-multiline">
        {projects.map((project) => (
          <div className="column is-12-mobile is-6-tablet is-3-desktop" key={project.id}>
            <div className="card secondaryBGC">
              <div className="card-image is-hidden-mobile">
                {/* hides image on mobile */}
                <figure className="image is-4by3">
                  <img src={project.image} alt={project.title} />
                </figure>
              </div>
              <div className="card-content has-text-centered is-clipped">
                <p className="title is-4-desktop is-7-mobile">{project.title}</p>
                <p className="is-hidden-mobile">{project.description}</p>
              </div>
              <footer className="card-footer has-text-centered">
                <a
                  href={project.githubLink}
                  className="card-footer-item"
                  target="_blank"
                >
                  View Repository
                </a>
                <a
                  href={project.deployedLink}
                  className="card-footer-item"
                  target="_blank"
                >
                  View Application
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

// mobile viewing here is not very good. would need to fix in the future
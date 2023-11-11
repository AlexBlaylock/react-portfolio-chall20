import React from 'react';
import "../colors.css"
function About() {

    return (
        <div className="container has-text-centered">
            <div className="has-text-warning-light is-size-5">
            {/* <h1 className="title is-size-1"></h1> */}
                <p>
                   Finishing my bootcamp in December 2023, I am ready to hit the ground running with
                   my new knowledge, and push my capabilities and improve my quality as a developer. I strive to have a positive
                   and hard working attitude, and will continue this mindset pushing forward in a new environment. 

                </p>
            <img src="./MeCircle.png" alt="Picture of me" className="m-0 p-0 is-hidden-mobile" id="mePicture"/>
                
            </div>
        </div>
    );
}

export default About;
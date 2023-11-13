import React from 'react';
import "../colors.css"

function Footer() {
    return(
        <footer className="fourthBGC">
            <div className="" id="gradientBottom" >

                <a href="https://github.com/AlexBlaylock"  target="_blank" className="mx-3">
                    <img src="/githublogo.png" alt="GitHub Logo" className="mb-2" id="githubLogo"/>
                    </a>

                <a href="https://www.linkedin.com/in/alex-blaylock-40318828b/"  target="_blank" className="" >
                <img src="/linkedinlogo.png" alt="LinkedIn Logo" id="linkedinLogo"/>
                    </a>
                {/* adding _blank makes it so the link opens in a new tab */}
            
            </div>

            
        </footer>
    )
}

export default Footer;
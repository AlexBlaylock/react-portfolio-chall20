import React from 'react';
// importing custom colors
import "../colors.css"

function Resume() {
    const resumeFileName = 'AlexBlaylockResume.pdf';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/public/AlexBlaylockResume.pdf'; 
        link.download = resumeFileName;
        link.click();
    };

    return (
        <div className="section mt-5">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-half has-text-centered">
                        <p className="is-size-4">Please click the image below to download my resume.</p>
                    </div>
                </div>

            <div className="columns is-centered">
                <div className="column is-half has-text-centered">
                    <a href="./AlexBlaylockResume.pdf" download={resumeFileName} onClick={handleDownload}>
                    <img src="./resumepic.png" alt="resume"className="image mt-3"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
);
}


export default Resume; 
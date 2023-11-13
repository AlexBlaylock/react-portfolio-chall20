import React, { useState } from 'react';
import "../colors.css"

// switched to using a google form, easier for me to track responses + safer
const Contact = () => {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          {/* google forms has an iframe embed you can use, pretty easy to implement */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwfAPB1InalnZg-NUJ4UteTSLU0SmBU4_hAADWyidTmxtClA/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>

      </div>
  );
};
  
  export default Contact;
import React from '../../../node_modules/react';

const ImagesHomepage = () => {
    return(
        <section className="container">
        <div className="row">
        <div className="container col-md-4 align-self-start">
          <img
            src="https://bit.ly/2JUIH1C"
            alt="necklace" className="image" />
          <div className="overlay"><a id="overlayWords" href="/Products#Necklace">NECKLACES</a></div>
        </div>

        <div className="container col-md-4 align-self-center">
          <img
            src="https://bit.ly/2YpFzTh"
            alt="rings" className="image" />
          <div className="overlay"><a id="overlayWords" href="/Products">RINGS</a></div>
        </div>

        <div className="container col-md-4 align-self-end">
          <img
            src="https://bit.ly/2JUHXJS"
            alt="watch" className="image"/>
          <div className="overlay"><a id="overlayWords" href="/Products#Watches">WATCHES</a></div>
        </div>
        </div>
       </section>
    
    );
}

export default ImagesHomepage;
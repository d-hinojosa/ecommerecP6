import React from '../../../node_modules/react';

function Carousel() {
    return(
        <div id="carouselFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="https://bit.ly/2YoTRPX" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://bit.ly/2JTlAnW" alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://bit.ly/2LH8L2r" alt="Third slide"/>
            </div>
        </div>
      <a className="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    )
}
export default Carousel;
import React from "react";
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const Slider = () => {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={slide1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={slide2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={slide3} alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}
export default Slider;
import "./Slider.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // permet d'utiliser la balise carousel
import { Carousel } from 'react-responsive-carousel';



const Slider = () => {    // utilisation de la balise carousel qu'on importe avant
    
    return(
        <Carousel className="carousel">
            <img src='/Image/luffy.jpeg' alt=""/>
            <img src='/Image/zoro.jpeg' alt=""/>
        </Carousel>
    )
}

export default Slider;
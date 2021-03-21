import SimpleImageSlider from "react-simple-image-slider";
import React, { Component } from "react";

import image1 from '../public/images/1.jpg'
import image2 from '../public/images/2.jpeg'
import image3 from '../public/images/3.jpg'
import image4 from '../public/images/4.jpg'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../components/slider.css';
export default class Slider extends Component{
    render() {
      const images = [
        './images/1.jpg' ,
        './images/2.jpeg' ,
        './images/3.jpg' ,
        './images/4.jpg' 
      ]
      const sliderOpt = {
        arrows: false,
        indicators: true
      }
        return (
          <div className="slider-wrap">
            <div className="slide-container">
          <Fade {...sliderOpt}>
            <div className="each-fade">
              <div className="image-slide">
                <img height="500px" width="500px" src={images[0]} />
              </div>
              
            </div>
            <div className="each-fade">
              <div className="image-slide">
                <img height="500px" width="500px" src={images[1]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-slide">
                <img height="500px" width="500px" src={images[2]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-slide">
                <img height="500px" width="500px" src={images[3]} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
        );
    }
}

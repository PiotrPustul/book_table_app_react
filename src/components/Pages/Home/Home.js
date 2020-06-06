import React from 'react';
import './_Home.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import logo from '../../images/logo.png';

const Home = () => {
  return (
    <div className="container">
      {/* <h1>Pomorie Pearl</h1> */}
      <div className="logo">
        <img src={logo} alt="Page logo" />
      </div>
      <Carousel>
        <div className="main__home">
          <img src={img1} alt="Page" />
        </div>
        <div className="main__home">
          <img src={img2} alt="Page" />
        </div>
        <div className="main__home">
          <img src={img3} alt="Page" />
        </div>
        <div className="main__home">
          <img src={img4} alt="Page" />
        </div>
        <div className="main__home">
          <img src={img5} alt="Page" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;


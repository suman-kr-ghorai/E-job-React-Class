import React from 'react';

const Content = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="d-block" 
            style={{ width: '100vw', height: '80vh' }} 
            alt="Slide 1" 
          />
        </div>
        <div className="carousel-item">
        <img 
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="d-block" 
            style={{ width: '100vw', height: '80vh' }} 
            alt="Slide 2" 
          />
        </div>
        <div className="carousel-item">
          <img 
            src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="d-block" 
            style={{ width: '100vw', height: '80vh' }} 
            alt="Slide 3" 
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Content;

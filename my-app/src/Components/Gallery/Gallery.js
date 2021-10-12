import React from "react";
import "./Gallery.css";
// link to seperate gallery based on the selected photo
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery-container">
      <Link to="/gallery-one">
        <div className="gallery">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1527419934-d5d106b09bf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2thdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="image-one"
          />
          <div className="image-overlay">
            <div className="image-title">Gallery 1</div>
            <p className="image-description">Here is our description</p>
          </div>
        </div>
      </Link>
      <Link to="/gallery-two">
        <div className="gallery">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1522602398-e378288fe36d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNrYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="image-two"
          />
          <div className="image-overlay">
            <div className="image-title">Gallery 2</div>
            <p className="image-description">Here is our description</p>
          </div>
        </div>
      </Link>
      <Link to="/gallery-three">
        <div className="gallery">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1597769906771-dd0471091782?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNrYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="image-three"
          />
          <div className="image-overlay">
            <div className="image-title">Gallery 3</div>
            <p className="image-description">Here is our description</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Gallery;

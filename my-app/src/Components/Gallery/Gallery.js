import React from "react";
import "./Gallery.css";

function Gallery() {
  // works with inline styling but not in css file? css conflictions.
  return (
    <div className="gallery-container">
      <div className="gallery">
        <img
          className="gallery-image"
          src="https://images.unsplash.com/photo-1517582837435-fdb3ccb5bb41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
          alt="image1"
        />
        <div className="image-overlay">
          <div className="image-title"> Gallery</div>
          <p className="image-description">Here is our description</p>
        </div>
      </div>
      {/* <div className="gallery">
        <img
          className="gallery-image"
          src="https://images.unsplash.com/photo-1517582837435-fdb3ccb5bb41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
          alt="image1"
        />
        <div className="image-overlay">
          <div className="image-title"> Gallery</div>
          <p className="image-description">Here is our description</p>
        </div>
      </div> */}
      {/* <div className="gallery">
        <img
          className="gallery-image"
          src="https://images.unsplash.com/photo-1517582837435-fdb3ccb5bb41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
          alt="image1"
        />
        <div className="image-overlay">
          <div className="image-title"> Gallery</div>
          <p className="image-description">Here is our description</p>
        </div>
      </div> */}
    </div>
  );
}

export default Gallery;

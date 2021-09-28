import React, { useState } from "react";
import "./Home.css";
import { homeImages } from "../../assets/homeImages";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

function Home() {
  const [imageModel, setImageModel] = useState(false);
  const [tempingImageSource, setTempingImageSource] = useState("");

  const getSingleImage = (image) => {
    setTempingImageSource(image);
    setImageModel(true);
  };

  return (
    <>
      <div className={imageModel ? "model open" : "model"}>
        <img src={tempingImageSource} />
        <CloseIcon onClick={() => setImageModel(false)} />
      </div>
      <div className="home-images">
        {homeImages.map((item, id) => {
          return (
            <div className="images" onClick={() => getSingleImage(item.image)}>
              <img key={id} src={item.image} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

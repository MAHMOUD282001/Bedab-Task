import React, { useContext } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import closeImg from "../../assets/close.svg";
import leftIcon from "../../assets/left-arrow.svg";
import rightIcon from "../../assets/right-arrow.svg";
import "./lightbox-main-content.scss";

function LightboxMainContent() {
  const { images, selectedIndex, closeLightbox, showNextImage, showPrevImage } =
    useContext(GalleryContext);

  return (
    <div className="lightbox-main-content" onClick={(e) => e.stopPropagation()}>
      <span className="close-button" onClick={closeLightbox}>
        <img src={closeImg} alt="Close Button" />
      </span>

      <span className="prev-button" onClick={showPrevImage}>
        <img src={leftIcon} alt="Left Icon" />
      </span>
      <img src={images[selectedIndex]} alt="Selected" className="main-img" />
      <span className="next-button" onClick={showNextImage}>
        <img src={rightIcon} alt="Right Icon" />
      </span>
    </div>
  );
}

export default LightboxMainContent;

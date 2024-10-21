import React, { useContext } from "react";
import "./lightbox-alternative-img.scss";
import { GalleryContext } from "../../context/GalleryContext";

function LightboxAlternativeImg({ index, image }) {
  const { selectedIndex, openLightbox } = useContext(GalleryContext);

  const handleImgClick = (e) => {
    e.stopPropagation();
    openLightbox(index);
  };

  return (
    <div
      className="alternative-img"
      style={{ opacity: selectedIndex === index ? 1 : 0.5 }}
    >
      <img
        src={image}
        loading="lazy"
        alt="LightBox img"
        onClick={handleImgClick}
      />
    </div>
  );
}

export default LightboxAlternativeImg;

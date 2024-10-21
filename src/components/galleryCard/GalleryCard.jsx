import React from "react";

function GalleryCard({ index, image, openLightbox }) {
  return (
    <div className="gallery-item" key={index}>
      <img
        src={image}
        alt={`Gallery ${index}`}
        onClick={() => openLightbox(index)}
        loading="lazy"
      />
    </div>
  );
}

export default GalleryCard;

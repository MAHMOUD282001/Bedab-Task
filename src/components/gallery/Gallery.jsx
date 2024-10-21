import { useContext } from "react";
import "./gallery.scss";
import { GalleryContext } from "../../context/GalleryContext";
import GalleryCard from "../galleryCard/GalleryCard";

function Gallery() {
  const { images, openLightbox } = useContext(GalleryContext);

  return (
    <div>
      <div className="container">
        <div className="gallery-container">
          {images.map((image, index) => (
            <GalleryCard
              key={index}
              index={index}
              image={image}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

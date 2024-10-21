import { useContext } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import "./lightbox-alternative-imgs.scss";
import LightboxAlternativeImg from "../lightboxAlternativeImg/LightboxAlternativeImg";

function LightBoxAlternativeImgs() {
  const { images } = useContext(GalleryContext);

  return (
    <div className="container">
      <div className="alternative-imgs">
        {images.map((image, index) => (
          <LightboxAlternativeImg key={index} index={index} image={image} />
        ))}
      </div>
    </div>
  );
}

export default LightBoxAlternativeImgs;

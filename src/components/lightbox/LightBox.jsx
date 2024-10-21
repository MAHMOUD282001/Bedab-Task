import { useContext } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import "./lightbox.scss";
import LightboxMainContent from "../lightboxMainContent/LightboxMainContent";
import LightBoxAlternativeImgs from "../lightboxAlternativeImgs/LightBoxAlternativeImgs";

function LightBox() {
  const { selectedIndex, closeLightbox } = useContext(GalleryContext);

  return (
    <div>
      <div
        className={`lightbox ${selectedIndex === null ? "closing" : "opening"}`}
        onClick={closeLightbox}
      >
        {selectedIndex === null ? (
          ""
        ) : (
          <div className="lightbox-content">
            <LightboxMainContent />
            <LightBoxAlternativeImgs />
          </div>
        )}
      </div>
    </div>
  );
}

export default LightBox;

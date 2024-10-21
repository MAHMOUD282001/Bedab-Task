import { createContext, useEffect, useState } from "react";
import car1 from "../assets/1.webp";
import car2 from "../assets/2.webp";
import car3 from "../assets/3.webp";
import car4 from "../assets/4.webp";
import car5 from "../assets/5.webp";
import car6 from "../assets/6.webp";
import car7 from "../assets/7.webp";
import car8 from "../assets/8.webp";
import car9 from "../assets/9.webp";
import car10 from "../assets/10.webp";
import car11 from "../assets/11.webp";
import car12 from "../assets/12.webp";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const images = [
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12,
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);
  return (
    <GalleryContext.Provider
      value={{
        images,
        selectedIndex,
        openLightbox,
        closeLightbox,
        showNextImage,
        showPrevImage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

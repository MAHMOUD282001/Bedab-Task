// import "./App.css";
import { useContext } from "react";
import Gallery from "./components/gallery/Gallery";
import LightBox from "./components/lightbox/LightBox";
import Navbar from "./components/navbar/Navbar";
import { LanguageContext } from "./context/LanguageContext";

function App() {
  const { direction } = useContext(LanguageContext);

  return (
    <div dir={direction}>
      <Navbar />
      <Gallery />
      <LightBox />
    </div>
  );
}

export default App;

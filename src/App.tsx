import React, { useEffect } from "react";
import HeroImage from "./components/HeroImage";
import GetAppSection from "./components/GetAppSection";
import InfoSection from "./components/InfoSection";
import Citat from "./components/Citat";
import Terms from "./components/Terms";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="font-lato">
      <HeroImage />
      <GetAppSection />
      <InfoSection />
      <Citat />
      <Footer />
    </div>
  );
};

export default App;

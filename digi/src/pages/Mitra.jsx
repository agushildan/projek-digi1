import React from "react";
import "./Mitra.css";
import { useState, useEffect } from "react";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Mitra() {

    const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const t = (key) => i18n.t(key);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);


  const daftarMitra = [
    { id: 1, nama: "JAPA", logo: "japa.png" },        
    { id: 2, nama: "Dwitama", logo: "dwitama.png" },   
    { id: 5, nama: "Katalis", logo: "katalis.png" },  
    { id: 6, nama: "TAKA", logo: "taka.png" },      
    { id: 3, nama: "ICA", logo: "ica.png" },           
    { id: 4, nama: "PLN", logo: "pln.png" },        
    { id: 7, nama: "SIP", logo: "sosi.png" },         
    { id: 8, nama: "Tamaris", logo: "tamaris.png" },  
  ];

  return (
    <div className="mitra-container">
      <h1 className="mitra-title">{t("judul_mitra")}</h1>

      <div className="mitra-slider-wrapper">
        <div className="mitra-track">
          
          {daftarMitra.map((mitra) => (
            <div key={`mitra-1-${mitra.id}`} className="mitra-card">
              <div className="mitra-card-header">
                <div className="mitra-window-controls">
                  <span className="control-btn">&minus;</span>
                  <span className="control-btn">&#9744;</span>
                  <span className="control-btn">&times;</span>
                </div>
              </div>
              <div className="mitra-card-body">
                <img src={mitra.logo} alt={`Logo ${mitra.nama}`} className="mitra-logo" />
              </div>
            </div>
          ))}

          {daftarMitra.map((mitra) => (
            <div key={`mitra-2-${mitra.id}`} className="mitra-card">
              <div className="mitra-card-header">
                <div className="mitra-window-controls">
                  <span className="control-btn">&minus;</span>
                  <span className="control-btn">&#9744;</span>
                  <span className="control-btn">&times;</span>
                </div>
              </div>
              <div className="mitra-card-body">
                <img src={mitra.logo} alt={`Logo ${mitra.nama}`} className="mitra-logo" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Mitra;
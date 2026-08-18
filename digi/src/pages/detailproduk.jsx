import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Detaill.css";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Detailproduk() {

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

  const [isDenganMIS, setIsDenganMIS] = useState(true);

  return (
    <div className="dp-page-container">
      
      <Link to="/" className="dp-btn-kembali">
        ❮ {t("btn_kembali")}
      </Link>
      
      <div className="dp-hero-box">        
        <div className="konten-teks">
          <div className="judul-detail">
            <h1>Management Information System DIGI</h1>
          </div>
          <div className="textp">
            <p>
            {t("mis_digi")}
            </p>  
          </div>
        </div>

        <div className="konten-gambar">
          <img src="gambar1.png" alt="Tiga HP" className="img-hp" />
          <img src="gambar2.png" alt="Tablet" className="img-tablet" />
          <img src="gambar3.png" alt="Laptop" className="img-laptop" />
        </div>
      </div>

      <div className="dp-toggle-wrapper">
        <button 
          className={`dp-toggle-btn ${isDenganMIS ? 'active' : ''}`}
          onClick={() => setIsDenganMIS(true)}
        >
          {t("dengan_mis")}
        </button>
        <button 
          className={`dp-toggle-btn ${!isDenganMIS ? 'active' : ''}`}
          onClick={() => setIsDenganMIS(false)}
        >
          {t("tanpa_mis")}
        </button>
      </div>

      <div className="dp-cards-grid">    
        <div className="dp-card">
          <div className={`dp-icon ${isDenganMIS ? 'icon-check' : 'icon-cross'}`}>
            {isDenganMIS ? '✓' : '✗'}
          </div>
        </div>

        <div className="dp-card">
          <div className={`dp-icon ${isDenganMIS ? 'icon-check' : 'icon-cross'}`}>
            {isDenganMIS ? '✓' : '✗'}
          </div>
        </div>

        <div className="dp-card">
          <div className={`dp-icon ${isDenganMIS ? 'icon-check' : 'icon-cross'}`}>
            {isDenganMIS ? '✓' : '✗'}
          </div>
        </div>
      </div>

     
      <div className="dp-action-wrapper">
        <button className="dp-btn-beli">{t("btn_beli")}</button>
      </div>
    </div>
  );
}

export default Detailproduk;
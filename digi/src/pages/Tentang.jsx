import React, { useState, useEffect } from "react";
import "./tentang.css";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Tentang() {
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

  return (
    <div className="tentang-page">
      <div className="tentang-top-header">
        <h1 className="tentang-title-text">
          {t("hero_title_4")}
        </h1>
      </div>

      <div className="browser-card">
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-blue-light"></span>
            <span className="dot dot-blue"></span>
          </div>

          <div className="browser-arrows">
            <span>‹</span>
            <span>›</span>
          </div>

          <div className="browser-address-bar">
            <span>PT Digi Tekno Indonesia</span>
            <span className="search-icon">
<svg width="28" height="28" viewBox="0 0 24 24">
  <circle
    cx="10.5"
    cy="10.5"
    r="6.5"
    fill="none"
    stroke="#806F65"
    strokeWidth="2.5"
  />

  <path
    d="M15.5 15.5L21 21"
    stroke="#806F65"
    strokeWidth="2.5"
    strokeLinecap="round"
  />
</svg>            </span>
          </div>

          <div className="browser-home-icon">
    <svg width="28" height="28" viewBox="0 0 24 24">
  <path
    d="M2.5 10.5L12 2.5L21.5 10.5V20C21.5 21.1 20.6 22 19.5 22H4.5C3.4 22 2.5 21.1 2.5 20V10.5Z"
    fill="#806F65"
  />
</svg>
          </div>
        </div>

        <div className="browser-body">
          <div className="browser-text-content">
            <p>{t("isi_1")}</p>

            <div className="browser-image-content">
              <img
                src="depan digi.png"
                alt="Gedung Digi"
                className="browser-img-gedung"
              />
            </div>

            <p>{t("isi_2")}</p>
            <p>{t("isi_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
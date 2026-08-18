import React, { useState, useEffect } from "react";
import "./layananberanda.css";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function LBeranda(){
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

    return(
          <div className="layanan-container">
      <div className="produk-header">
        <h1 className="produk-title-layanan">{t("judul_layanan")}</h1>
      </div>


      <div className="services-list">
        
        {/* 1. Software Development */}
        <div className="service-card">
          <div className="service-info">
            <h2>{t("layanan1")}</h2>
            <p>{t("isi_layanan1")}</p>
          </div>
          <img src="Software Development.png" alt="Software Development" className="service-image" />
        </div>

        {/* 2. Services and Maintenance */}
        <div className="service-card">
          <div className="service-info">
            <h2>{t("layanan2")}</h2>
            <p>{t("isi_layanan2")}</p>
          </div>
          <img src="Services and Maintanance.png" alt="Services and Maintenance" className="service-image" />
        </div>

        {/* 3. IT Equipment/Hardware & Networking */}
        <div className="service-card">
          <div className="service-info">
            <h2>{t("layanan3")}</h2>
            <p>{t("isi_layanan3")}</p>
          </div>
          <img src="IT EquipmentHardware & Networking.png" alt="IT Equipment" className="service-image" />
        </div>

        {/* 4. IT Consultant & Problem Solving */}
        <div className="service-card">
          <div className="service-info">
            <h2>{t("layanan4")}</h2>
            <p>{t("isi_layanan4")}</p>
          </div>
          <img src="IT Consultant & Problem Solving.png" alt="IT Consultant" className="service-image" />
        </div>

        {/* 5. Procurement of Engine... (BISA DIKLIK) */}
         <div className="service-card">
            <div className="service-info">
              <h2>{t("layanan5")}</h2>
              <p>{t("isi_layanan5")}</p>
            </div>
            <img src="Procurement of Engine.png" alt="Procurement" className="service-image" />
          </div>
       

        {/* 6. Installation Electrical and Automation Equipment */}
        <div className="service-card">
          <div className="service-info">
            <h2>{t("layanan6")}</h2>
            <p>{t("isi_layanan6")}</p>
          </div>
          <img src="Installlation Electrical.png" alt="Installation" className="service-image" />
        </div>
      </div>
    </div>
    )
}

export default LBeranda;
import React, { useState, useEffect } from "react";
import "./kkontak.css";
import { Link } from "react-router-dom";
import i18n from "../i18n"; 
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Kontak() {
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
    <div className="kontak-container">
      <h1 className="kontak-title">{t("judul_kontak")}</h1>

      <p className="kontak-subtitle">
        {t("subtitle_kontak")}<br />
        {t("subtitle_kontak2")}
      </p>

      <form className="kontak-form">
        <div className="form-group">
          <label>{t("nama")}</label>
          <input type="text" placeholder={t("isi_nama")} />
        </div>

        <div className="form-group">
          <label>{t("email")}</label>
          <input type="email" placeholder={t("isi_email")} />
        </div>

        <div className="form-group">
          <label>{t("pesan")}</label>
          <textarea placeholder={t("isi_pesan")} rows="5"></textarea>
        </div>

        <div className="form-submit">
          <Link to="/Tentang">
            <button type="button" className="btn-kirim">
              {t("kirim")}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Kontak;
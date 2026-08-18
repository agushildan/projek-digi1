import React, { useState, useEffect } from "react";
import "./visimisi.css";
import i18n from "../i18n"; 
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function VisiMisi() {
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
    <section className="visimisi">
      <div className="card">
        <div className="judul visi-title">
          <h1>{t("judul_visi")}</h1>
        </div>

        <div className="isi">
          <span className="clip">
            <img src="icons8-clip-50(1).png" alt="clip" />
          </span>

          <p>{t("isi_visi")}</p>
        </div>
      </div>

      <div className="card">
        <div className="judul misi-title">
          <h1>{t("judul_mis")}</h1>
        </div>

        <div className="isi">
          <span className="clip merah">
            <img src="icons8-clip-50(2).png" alt="clip" />
          </span>

          <ul>
            <li>{t("isi_misi1")}</li>
            <li>{t("isi_misi2")}</li>
            <li>{t("isi_misi3")}</li>
            <li>{t("isi_misi4")}</li>
            <li>{t("isi_misi5")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default VisiMisi;
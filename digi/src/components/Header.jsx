import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from '../i18n';

export default function Header({ title, fallbackPath = '/' }) {
  const navigate = useNavigate();

  const handleBack = () => {
    const btn = document.querySelector(".conveyor-btn-kembali1");
    if (btn) {
      btn.classList.add("clicked");
    }

    setTimeout(() => {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate(fallbackPath);
      }
    }, 200);
  };

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
    <div className="header-section mechanic-header">
      <button className="conveyor-btn-kembali1" onClick={handleBack}>
        ❮ {t("btn_kembali")}
      </button>
      <h1 className="page-title1">{title}</h1>
    </div>
  );
}
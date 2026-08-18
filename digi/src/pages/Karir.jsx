import { useState,useEffect } from "react";
import "./karir.css"
import Footer from "./footer";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Karir() {

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
    <>
    <div className="karir-container">
      
   <div className="karir-left">
  
  <h1 className="karir-greeting">{t("halo")}</h1>
  
  <div className="karir-title-group">
    <h2 className="karir-title">{t("mulai")}</h2>
  </div>
  
  <h2 className="karir-title inline-di">
    {t("di")} <img src="digilogo.png" alt="Logo Digi" className="karir-logo-inline" />
  </h2>

        <p className="karir-subtitle">{t("subjudul")}</p>

        <ul className="karir-jobs-list">
          <li>
            <strong className="karir-job-title">Marketing</strong>
            <p className="karir-job-desc">
              {t("isi_marketing")}
            </p>
          </li>
          <li>
            <strong className="karir-job-title">Purchasing</strong>
            <p className="karir-job-desc">
              {t("isi_purchasing")}
            </p>
          </li>
        </ul>

<button 
  className="karir-btn-lamar" 
  onClick={() => window.open('https://wa.me/6283186405391?text=Halo%20saya%20ingin%20melamar', '_blank')}
>
  {t("btn_lamar")}
</button>
 </div>


      <div className="karir-right">
        <div className="karir-image-wrapper">

          <img src="fotokarir.png" alt="Ilustrasi Karir" className="karir-image" />
        </div>
      </div>
    </div>

<section className="footer-karir">
  <Footer />
</section>


    </>
  );
}

export default Karir;
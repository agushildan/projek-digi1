import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./serti.css";
import Footer from "./footer";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Sertifikasi() {

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



  const [zoomedImage, setZoomedImage] = useState(null);

  const tutupZoom = () => {
    setZoomedImage(null);
  };

  return (
    <>
    <div className="sertifikasi-container">
      
      <h1 className="sertifikasi-title">{t("sertifikasi")}</h1>

      <div className="sertifikasi-grid">
        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("sertifikat.jp")}>
            <img src="sertifikat.jp" alt="Sertifikat 1" className="sertifikasi-img" />
          </div>
        </div>

        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-2.jpg")}>
            <img src="gambar-sertifikat-2.jpg" alt="Sertifikat 2" className="sertifikasi-img" />
          </div>
        </div>

        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-3.jpg")}>
            <img src="gambar-sertifikat-3.jpg" alt="Sertifikat 3" className="sertifikasi-img" />
          </div>
        </div>

        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-4.jpg")}>
            <img src="gambar-sertifikat-4.jpg" alt="Sertifikat 4" className="sertifikasi-img" />
          </div>
        </div>

        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-5.jpg")}>
            <img src="gambar-sertifikat-5.jpg" alt="Sertifikat 5" className="sertifikasi-img" />
          </div>
        </div>

        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-6.jpg")}>
            <img src="gambar-sertifikat-6.jpg" alt="Sertifikat 6" className="sertifikasi-img" />
          </div>
        </div>
      </div>

      <div className="sertifikasi-floor"></div>

      <Link to="/" className="sertifikasi-btn-kembali">
        ❮ {t("btn_kembali")}
      </Link>
      
      {zoomedImage && (
        <div className="sertifikasi-modal" onClick={tutupZoom}>
          <span className="sertifikasi-modal-close">✖</span>
          <img src={zoomedImage} alt="Sertifikat Zoom" className="sertifikasi-modal-img" />
        </div>
      )}

    </div>


<section className="footer bagian sertifikasi">
<Footer />
</section>


    </>
  );
}

export default Sertifikasi;
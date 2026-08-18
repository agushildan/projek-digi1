import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./produklain.css";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function ProdukLain() {

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
    <div className="pl-container">
      
      <div className="pl-header">
        
        <Link to="/" className="pl-btn-kembali">
          ❮ {t("btn_kembali")}
        </Link>
      
        <div className="pl-title-wrapper">
          <h1 className="pl-title">{t("judul_produk")}</h1>
        </div>
         </div>

      <div className="pl-grid">  
        
        
        <div className="pl-card">
          <h3 className="pl-card-title">MIS DIGI</h3>
          <p className="pl-card-subtitle">( Management Information System DIGI )</p>
          
         
          <div className="pl-img-wrapper">
            <img src="kanan.png" alt="MIS DIGI" className="pl-card-img" />
          </div>
                                                             
         <Link to="/detailproduk" className="pl-btn-detail">
          {t("detail_produk")}
        </Link>

          <hr className="pl-divider" />

     
          <div className="pl-specs">
            <div className="spec-label"><strong>{t("lama_pengerjaan")}</strong></div>
            <div className="spec-colon">:</div>
            <div className="spec-value">{t("isi_waktu")}</div>

            <div className="spec-label"><strong>{t("keunggulan")}</strong></div>
            <div className="spec-colon">:</div>
            <div className="spec-value">
              {t("isi_keunggulan")}
            </div>
          </div>
        </div>

     
        <div className="pl-card pl-card-empty"></div>

       
        <div className="pl-card pl-card-empty"></div>

      </div>

     
      <div className="pl-pagination">
        <button className="page-btn">❮</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <button className="page-btn">❯</button>
      </div>

    </div>
  );
}

export default ProdukLain;
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./conveyor.css";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Install() {
  const navigate = useNavigate();

  const itemsData = [
    { id: 1, title: "Chain", image: "chain1.webp" },
    { id: 2, title: "Chain", image: "chain2.webp" },
    { id: 3, title: "Chain", image: "chain3.webp" },
    { id: 4, title: "Chain", image: "chail4.webp" },
    { id: 5, title: "Chain", image: "chain5.webp" },
    { id: 6, title: "Chain", image: "chain6.webp" },
  ];

  const handleBack = () => {
    const btn = document.querySelector(".conveyor-btn-kembali");

    btn.classList.add("clicked");

    setTimeout(() => {
      navigate("/Layanan");
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
    <div className="page-wrapper">
      <main className="content-container">

       <div className="top-bar">
         <button
          className="conveyor-btn-kembali"
          onClick={handleBack}
        >
          ❮ {t("btn_kembali")}
        </button>
       </div>

        <h1 className="judul-halaman">Produk</h1>

        <div className="card-konten">
          <h2 className="judul-produk">Installation Electrical and Automation Equipment</h2>
          <div className="deskripsi-produk">
            <p>
              {t("isi_layanann6")}
            </p>
            <p>
              {t("isi_paragraft66")}
            </p>
          </div>  
        </div>

        <div className="galeri-section">
          <div className="badge-title">Fabrikasi Chain</div>
                           
          <div className="cards-grid">
            {itemsData.map((item) => (
              <div key={item.id} className="card-item">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="card-divider"></div>

                <p className="card-label">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

export default Install;
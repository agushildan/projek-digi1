import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./produklain.css";
import i18n from "../i18n";
import Footer from "./footer";
   

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

  const products = [
    {
      id: 1,
      title: "MIS DIGI",
      subtitle: "( Management Information System DIGI )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 2,
      title: "ERP SYSTEM",
      subtitle: "( Enterprise Resource Planning )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 3,
      title: "POS APP",
      subtitle: "( Point of Sale Application )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 4,
      title: "HRIS DIGI",
      subtitle: "( Human Resource Information System )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 5,
      title: "CRM SYSTEM",
      subtitle: "( Customer Relationship Management )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 6,
      title: "INVENTORY APP",
      subtitle: "( Warehouse & Stock Management )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 7,
      title: "FINANCE DIGI",
      subtitle: "( Financial Accounting System )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 8,
      title: "E-COMMERCE PLATFORM",
      subtitle: "( Online Store Solutions )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 9,
      title: "LOGISTICS TRACKER",
      subtitle: "( Supply Chain Management )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
    {
      id: 10,
      title: "SMART DASHBOARD",
      subtitle: "( Business Intelligence Analytics )",
      img: "kanan.png",
      waktuKey: "isi_waktu",
      keunggulanKey: "isi_keunggulan",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

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
        {currentProducts.map((product) => (
          <div key={product.id} className="pl-card">
            <h3 className="pl-card-title">{product.title}</h3>
            <p className="pl-card-subtitle">{product.subtitle}</p>

            <div className="pl-img-wrapper">
              <img src={product.img} alt={product.title} className="pl-card-img" />
            </div>

            <Link to="/detailproduk" className="pl-btn-detail">
              {t("detail_produk")}
            </Link>

            <hr className="pl-divider" />

            <div className="pl-specs">
              <div className="spec-label">
                <strong>{t("lama_pengerjaan")}</strong>
              </div>
              <div className="spec-colon">:</div>
              <div className="spec-value">{t(product.waktuKey)}</div>

              <div className="spec-label">
                <strong>{t("keunggulan")}</strong>
              </div>
              <div className="spec-colon">:</div>
              <div className="spec-value">{t(product.keunggulanKey)}</div>
            </div>
          </div>
        ))}

        {Array.from({ length: itemsPerPage - currentProducts.length }).map((_, idx) => (
          <div key={`empty-${idx}`} className="pl-card pl-card-empty"></div>
        ))}
      </div>

      <div className="pl-pagination">
        <button
          className="page-btn"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          ❮
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            className={`page-btn ${currentPage === number ? "active" : ""}`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}

        <button
          className="page-btn"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          ❯
        </button>
      </div>

      <section className="section-footer"><Footer /></section>


    </div>
  );
}




export default ProdukLain;
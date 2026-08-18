import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Faq.css";
import Footer from "./footer";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

const Faq = () => {
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

  const dataFaq = [
    {
      id: 1,
      pertanyaan: t("pertanyaan1"),
      jawaban: t("jawaban1"),
    },
    {
      id: 2,
      pertanyaan: t("pertanyaan2"),
      jawaban:t("jawaban2"),
    },
    {
      id: 3,
      pertanyaan: t("pertanyaan3"),
      jawaban:t("jawaban3"),
    },
    {
      id: 4,
      pertanyaan: t("pertanyaan4"),
      jawaban: t("jawaban4"),
    },
  ];

  return (
    <div className="faq-page-wrapper">
      <h1 className="faq-title">FAQ</h1>
      <div className="faq-container">
        {dataFaq.map((item) => (
          <details key={item.id}>
            <summary>
              {item.pertanyaan}
              <svg
                className="ikon-panah"
                fill="none"
                stroke="#1a2634"
                strokeWidth="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <div className="jawaban">
              <p>{item.jawaban}</p>
            </div>
          </details>
        ))}
      </div>

      <Link to="/" className="btn-kembali">
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="#1a2634"
          strokeWidth="3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        {t("btn_kembali")}
      </Link>

      <Footer />
    </div>
  );
};

export default Faq;
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import './Kegiatan.css'; 
import Footer from './footer';
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Kegiatan() {

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



  const [isLiked, setIsLiked] = useState(true); 
  const [isSaved, setIsSaved] = useState(true); 

  return (
    
    <div className="kegiatan-container">
      
      <div className="kegiatan-kiri">
        <h1 className="judul-biru">{t("judul_kegiatan")}</h1>
        <div className="textp">
          <p>{t("isi_kegiatan")}</p>
        </div>
        <div className="btn-liakegiatanlain">
          <Link to="/kegiatanlainnya.jsx" className="btn-untuk-berpindah-halamana">
          {t("btn_kegiatan")}
          </Link>
        </div>
      </div>

      <div className="kegiatan-kanan ig-card">
        
        <div className="image-icon-digi">
          <div className="ig-header-kiri">
            <img src="digilogo.png" alt="logo" className="ig-avatar" />
            <p className="nama-ig">digiteknoindo</p>
          </div>
          <MoreHorizontal color="#262626" style={{ cursor: 'pointer' }} />
        </div>

        <div className="gambar-kegiatan">
          <img src="kegiatan.jpg" alt="kegiatan" />
        </div>

        <div className="icon-dibawah-gambar">
          <div className="left-icons">
            <Heart 
              onClick={() => setIsLiked(!isLiked)}
              color={isLiked ? "#ed4956" : "#262626"} 
              fill={isLiked ? "#ed4956" : "none"} 
              size={24} 
              style={{ cursor: 'pointer', transition: 'transform 0.1s' }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <MessageCircle color="#262626" size={24} style={{ cursor: 'pointer' }} />
            <Send color="#262626" size={24} style={{ cursor: 'pointer' }} />
          </div>
          
          <div className="right-icons">
            <Bookmark 
              onClick={() => setIsSaved(!isSaved)}
              color="#262626" 
              fill={isSaved ? "#262626" : "none"} 
              size={24} 
              style={{ cursor: 'pointer', transition: 'transform 0.1s' }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </div>

        <div className="ig-details">
          <p className="ig-likes">2,022 likes</p>
          <p className="ig-caption">
            <strong>digiteknoindo</strong> {t("isi_kegiatan")}
          </p>
          <p className="ig-date">July 15, 2026</p>
        </div>
      </div>
 </div>
 
 
  );
}

export default Kegiatan;
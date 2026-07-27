import React from "react";
import "./Produk.css";

function Produk() {
  return (
    <div className="produk-container">
      
      {/* BAGIAN HEADER (JUDUL) */}
      <div className="produk-header">
        <h1 className="produk-title">Produk</h1>
        
        <img src="digilogo.png"alt="Logo Digi" className="produk-logo" />
      </div>

      <div className="produk-content-wrapper">
        
       
        <div className="produk-left">
      
          <a 
            href="/produklain" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="produk-btn-merah"
          >
            Lihat produk lainnya disini
          </a>

          
          <div className="produk-speech-bubble">
            <span className="quote-icon">❝</span>
            <p>Take Your Business<br/>To The Next Level</p>
          </div>

   
        
          <img src="bergerak2.gif" alt="Karakter Megaphone" className="produk-karakter" />
        </div>


        <div className="produk-right-card">
          
    
          <div className="produk-text-section">
            <ul className="produk-list">
<li>Produk dan jasa PT Digi Tekno Indonesia dapat digunakan di berbagai macam industri dan bisnis</li>
<li>PT Digi Tekno Indonesia dapat menyesuaikan produk kami sesuai dengan kebutuhan anda</li>
<li>Kami juga berkomitmen untuk untuk menyediakan layanan dan produk yang efektif,Hemat biaya dan cepat.</li>
<li>PT Digi Tekno Indonesia terdiri dari tim yang berdedikasi untuk memastikan semua produk dan jasa  yang  diberikan memenuhi kebutuhan spesifik anda</li>
<li>kami pun berfokus memberikan layanan dan solusi di bisnis anda  untuk meningkatkan kinerja bisnis</li>
            </ul>
          </div>

         
          <div className="produk-slider-section">
            <div className="produk-slider-box">
             
              <img src="kanan.png" alt="MIS DIGI Preview" className="produk-slider-img" />
              
              <div className="produk-slider-controls">
                <button className="slider-arrow">❮</button>
                <button className="slider-arrow">❯</button>
              </div>
              
              <h3 className="produk-slider-title">MIS DIGI</h3>
              <p className="produk-slider-subtitle">( Management Information System DIGI )</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Produk;
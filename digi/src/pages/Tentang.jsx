import React from "react";
import "./tentang.css";

function Tentang() {
  return (
    <div className="tentang-page">
      
    
      <div className="tentang-top-header">
        <h1 className="tentang-title-text">Tentang</h1>
        <img src="digilogo.png" alt="Logo Digi" className="tentang-top-logo" />
      </div>

      <div className="browser-card">
        
      
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-blue-light"></span>
            <span className="dot dot-blue"></span>
          </div>

          <div className="browser-arrows">
            <span>‹</span>
            <span>›</span>
          </div>

          <div className="browser-address-bar">
            <span>PT Digi Tekno Indonesia</span>
            <span className="search-icon">🔍</span>
          </div>

          <div className="browser-home-icon">
            🏠
          </div>
        </div>

       
        <div className="browser-body">
          
        
          <div className="browser-text-content">
            <p>
              PT Digi Tekno Indonesia didirikan pada tahun 2022 yang beralamat di Summarecon Gedebage Bandung.
            </p>
            <p>
              PT Digi Tekno Indonesia terdiri dari tim yang inovatif, berdedikasi tinggi dan cerdas untuk membantu pelaku bisnis dalam menjalankan operasional menjadi lebih mudah dan cepat, sehingga dapat meningkatkan profitabilitas.
            </p>
            <p>
              Kami berfokus untuk memberikan kelebihan yang kompetitif bagi pelanggan dengan teknologi yang dimiliki dan dapat menumbuhkan bisnis dengan sumber daya yang optimal. Hal ini akan menghasilkan kepuasan bagi masyarakat dengan pelayanan yang baik serta aman.
            </p>
          </div>

       
          <div className="browser-image-content">
            <img src="depan digi.png" alt="Gedung Digi" className="browser-img-gedung" />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Tentang;
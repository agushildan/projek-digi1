import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Detaill.css";

function Detailproduk() {

  const [isDenganMIS, setIsDenganMIS] = useState(true);

  return (
    <div className="dp-page-container">
      
      <Link to="/" className="dp-btn-kembali">
        ❮ Kembali
      </Link>

      
      <div className="dp-hero-box">
        
        <div className="konten-teks">
          <div className="judul-detail">
            <h1>Management Information System DIGI</h1>
          </div>
          <div className="textp">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ornare nisl. 
              Nam congue sed nulla in blandit. Vivamus quis odio sodales, molestie metus in, 
              dignissim enim. Nunc urna lacus, fringilla quis tempus et, aliquet sagittis turpis. 
              Aenean sed fringilla orci, in pretium nulla. Phasellus dictum massa feugiat dapibus 
              viverra. Donec molestie eros urna, vitae gravida leo placerat eget. Cras semper mauris 
              eu nunc commodo auctor.
            </p>  
          </div>
        </div>

        <div className="konten-gambar">
          <img src="gambar1.png" alt="Tiga HP" className="img-hp" />
          <img src="gambar2.png" alt="Tablet" className="img-tablet" />
          <img src="gambar3.png" alt="Laptop" className="img-laptop" />
        </div>

      </div>

      <div className="dp-toggle-wrapper">
        <button 
          className={`dp-toggle-btn ${isDenganMIS ? 'active' : ''}`}
          onClick={() => setIsDenganMIS(true)}
        >
          Dengan MIS
        </button>
        <button 
          className={`dp-toggle-btn ${!isDenganMIS ? 'active' : ''}`}
          onClick={() => setIsDenganMIS(false)}
        >
          Tanpa MIS
        </button>
      </div>

   
      <div className="dp-cards-grid">
        
        <div className="dp-card">
          <div className={`dp-icon ${isDenganMIS ? 'icon-check' : 'icon-cross'}`}>
            {isDenganMIS ? '✓' : '✗'}
          </div>
        </div>

        <div className="dp-card">
          <div className={`dp-icon ${isDenganMIS ? 'icon-check' : 'icon-cross'}`}>
            {isDenganMIS ? '✓' : '✗'}
          </div>
        </div>

        <div className="dp-card">
          <div className={`dp-icon ${isDenganMIS ? 'icon-check' : 'icon-cross'}`}>
            {isDenganMIS ? '✓' : '✗'}
          </div>
        </div>

      </div>

     
      <div className="dp-action-wrapper">
        <button className="dp-btn-beli">Beli Sekarang</button>
      </div>

    </div>
  );
}

export default Detailproduk;
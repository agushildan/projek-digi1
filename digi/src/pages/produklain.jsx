import React from "react";
import { Link } from "react-router-dom";
import "./produklain.css";

function ProdukLain() {
  return (
    <div className="pl-container">
      
      
      <div className="pl-header">
        
        <Link to="/" className="pl-btn-kembali">
          ❮ Kembali
        </Link>

      
        <div className="pl-title-wrapper">
          <h1 className="pl-title">Produk</h1>
        
          <img src="digilogo.png" alt="Logo Digi" className="pl-logo" />
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
          Detail Produk
        </Link>

          <hr className="pl-divider" />

     
          <div className="pl-specs">
            <div className="spec-label"><strong>Lama Pengerjaan</strong></div>
            <div className="spec-colon">:</div>
            <div className="spec-value">Lorem ipsum</div>

            <div className="spec-label"><strong>Keunggulan MIS</strong></div>
            <div className="spec-colon">:</div>
            <div className="spec-value">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ornare nisl. Nam congue sed nulla in blandit.
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
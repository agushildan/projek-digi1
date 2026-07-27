import React from "react";
import "./karir.css"
import Footer from "./footer";

function Karir() {
  return (
    <div className="karir-container">
      
   <div className="karir-left">
  
  <h1 className="karir-greeting">Hallo!</h1>
  
  <div className="karir-title-group">
    <h2 className="karir-title">Mulai Karir</h2>
    <h2 className="karir-title">Anda</h2>
  </div>
  
  <h2 className="karir-title inline-di">
    di <img src="digilogo.png" alt="Logo Digi" className="karir-logo-inline" />
  </h2>

        <p className="karir-subtitle">Kami sedang membuka lowongan di bagian :</p>

        <ul className="karir-jobs-list">
          <li>
            <strong className="karir-job-title">Marketing</strong>
            <p className="karir-job-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ornare nisl.
            </p>
          </li>
          <li>
            <strong className="karir-job-title">Purchasing</strong>
            <p className="karir-job-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ornare nisl.
            </p>
          </li>
        </ul>

        <button className="karir-btn-lamar">Lamar Sekarang</button>
      </div>


      <div className="karir-right">
        <div className="karir-image-wrapper">

          <img src="fotokarir.png" alt="Ilustrasi Karir" className="karir-image" />
        </div>
      </div>
    </div>
  );
}

export default Karir;
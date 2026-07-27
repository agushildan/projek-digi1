import React from 'react';
import "./kkontak.css"
import { Link } from "react-router-dom";


function Kontak() {
  return (
    <div className="kontak-container">
      <h1 className="kontak-title">Kontak</h1>
      
      <p className="kontak-subtitle">
        Kami akan menghubungi Anda untuk mengatur jadwal<br/>
        konsultasi awal secara gratis, tanpa persyaratan.
      </p>

      <form className="kontak-form">
        <div className="form-group">
          <label>Nama</label>
          <input type="text" placeholder="Masukkan Nama Anda" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Masukkan Email Anda" />
        </div>

        <div className="form-group">
          <label>Pesan</label>
          <textarea placeholder="Masukkan Pesan" rows="5"></textarea>
        </div>

        <div className="form-submit">
      <Link to="/Tentang">
        <button type="button" className="btn-kirim">
          Kirim
        </button>
      </Link>
    </div>
      </form>
    </div>
  );
}

export default Kontak;
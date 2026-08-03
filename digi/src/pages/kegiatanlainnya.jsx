import React from 'react';
import './Lainnya.css'; 
import { Link } from 'react-router-dom';

function Lainnya() {
  return (
    <div className="halaman-kegiatan">
      
      <div className="header-kegiatan">
        <div className="papan-kayu">
          <h1>Kegiatan</h1>
        </div>
      </div>

      <div className="area-gantungan">
        <img src="tambang.png" alt="tambang" className="gambar-tambang" />

        <div className="kumpulan-polaroid">
          
          <div className="kartu-polaroid sembunyi-di-hp" style={{ transform: "rotate(15deg)", marginTop: "110px"}}>
            <img src="capitan.png" alt="capitan" className="gambar-capitan" />
            <div className="konten-polaroid">
              <img src="foto1.jpg" alt="Foto Kegiatan" className="foto-kegiatan" />
              <p className="tanggal">24 / 03 / 2025</p>
              <p className="teks-judul">Buka Bersama PT. Digi Tekno Indonesia</p>
            </div>
          </div>

          <div className="kartu-polaroid sembunyi-di-hp" style={{ transform: "rotate(-3deg)", marginTop: "150px" }}>
            <img src="capitan.png" alt="capitan" className="gambar-capitan" />
            <div className="konten-polaroid">
              <img src="foto2.jpg" alt="Foto Kegiatan" className="foto-kegiatan" />
              <p className="tanggal">02 / 01 / 2025</p>
              <p className="teks-judul">Body Rafting Grand Citumang</p>
            </div>
          </div>

          <div className="kartu-polaroid sembunyi-di-hp" style={{ transform: "rotate(7deg)", marginTop: "165px" }}>
            <img src="capitan.png" alt="capitan" className="gambar-capitan" />
            <div className="konten-polaroid">
              <img src="foto3.jpg" alt="Foto Kegiatan" className="foto-kegiatan" />
              <p className="tanggal">01 / 02 / 2025</p>
              <p className="teks-judul">Rafting Situ Cileunca</p>
            </div>
          </div>

          <div className="kartu-polaroid" style={{ transform: "rotate(-5deg)", marginTop: "155px" }}>
            <img src="capitan.png" alt="capitan" className="gambar-capitan" />
            <div className="konten-polaroid">
              <img src="foto4.jpg" alt="Foto Kegiatan" className="foto-kegiatan" />
              <p className="tanggal">01 / 02 / 2025</p>
              <p className="teks-judul">Body Rafting Grand Citumang</p>
            </div>
          </div>

        
          <div className="kartu-polaroid" style={{ transform: "rotate(-5deg)", marginTop: "115px" }}>
            <img src="capitan.png" alt="capitan" className="gambar-capitan" />
            <div className="konten-polaroid">
              <img src="foto5.jpg" alt="Foto Kegiatan" className="foto-kegiatan" />
              <p className="tanggal">01 / 02 / 2025</p>
              <p className="teks-judul">Body Rafting Grand Citumang</p>
            </div>
          </div>

        </div>
      </div>

      <div className="area-bawah">
        <Link to="/" className='tombol-kembali'>
          <span className='ikon-panah'>‹</span>
          Kembali
        </Link>
      </div>

    </div>
  );
}

export default Lainnya;
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './conveyor.css';

function Conveyor() {
  const itemsData = [
    { id: 1, title: 'Chain', image: 'chain1.jpg' },
    { id: 2, title: 'Chain', image: 'chain2.jpg' },
    { id: 3, title: 'Chain', image: 'https://via.placeholder.com/300x300?text=Gambar+3' },
    { id: 4, title: 'Chain', image: 'https://via.placeholder.com/300x300?text=Gambar+4' },
    { id: 5, title: 'Chain', image: 'https://via.placeholder.com/300x300?text=Gambar+5' },
    { id: 6, title: 'Chain', image: 'https://via.placeholder.com/300x300?text=Gambar+6' },
  ];

  return (
    <div className="page-wrapper">
      <main className="content-container">
        
       
        <Link to="/Layanan" className="blog-btn-kembali">
          ❮ Kembali
        </Link>

       
        <h1 className="judul-halaman">Produk</h1>

       
        <div className="card-konten">
          <h2 className="judul-produk">Repair Sparepart Conveyor</h2>

          <div className="deskripsi-produk">
            <p>
              PT. Digi Tekno Indonesia bergerak di bidang pemeliharaan, produksi, dan perbaikan, dengan menyediakan berbagai produk dan layanan teknis yang andal dan berkualitas. PT. Digi Tekno Indonesia memproduksi komponen seperti fabrikasi chain untuk kebutuhan industri, serta menyediakan layanan instalasi sistem seperti cooling tower yang mendukung efisiensi operasional pembangkit dan fasilitas industri lainnya.
            </p>
            <p>
              Dalam bidang perawatan dan perbaikan, kami ahli dalam overhaul pompa BFP dan rewinding motor, memastikan peralatan pelanggan kami selalu dalam kondisi optimal. Selain itu, kami juga menyediakan berbagai tools dan alat ukur presisi sebagai pendukung utama dalam proses instalasi, monitoring, dan maintenance.
            </p>
          </div>
        </div>

       
        <div className="galeri-section">
          <div className="badge-title">Fabrikasi Chain</div>

          <div className="cards-grid">
            {itemsData.map((item) => (
              <div key={item.id} className="card-item">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-divider"></div>
                <p className="card-label">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

export default Conveyor;
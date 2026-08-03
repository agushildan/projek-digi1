import React from 'react';
import Header from '../components/Header';
import './procurement.css';

export default function Procurement() {

  // 1. Data Galeri Pompa BFP
  const pompaGalleryTop = [
    { id: 1, image: 'pompa1.webp', title: 'Pompa BFP' },
    { id: 2, image: 'pompa2.webp', title: 'Pompa BFP' },
    { id: 3, image: 'pompa3.webp', title: 'Pompa BFP' },
  ];

  const pompaGalleryBottom = [
    { id: 4, image: 'pompa4.webp', title: 'Pompa BFP' },
    { id: 5, image: 'pompa5.jpg', title: 'Pompa BFP' },
    { id: 6, image: 'pompa6.webp', title: 'Pompa BFP' },
    { id: 7, image: 'pompa7.webp', title: 'Pompa BFP' },
  ];

  // 2. Data Galeri Turbin
  const turbinGalleryTop = [
    { id: 1, image: 'turbin1.jpg', title: 'Pemasangan Sealstrip Turbin' },
    { id: 2, image: 'turbin2.jpg', title: 'Pemasangan Sealstrip Turbin' },
    { id: 3, image: 'turbin3.jpg', title: 'Pemasangan Sealstrip Turbin' },
  ];

  const turbinGalleryBottom = [
    { id: 4, image: 'turbin4.jpg', title: 'Pemasangan Sealstrip Turbin' },
    { id: 5, image: 'turbin5.jpg', title: 'Pemasangan Sealstrip Turbin' },
  ];

  // 3. Data Galeri Rewinding Motor
  const rewindingGalleryTop = [
    { id: 1, image: 'motor1.jpg', title: 'Rewinding Motor' },
    { id: 2, image: 'motor2.jpg', title: 'Rewinding Motor' },
    { id: 3, image: 'motor3.jpg', title: 'Rewinding Motor' },
  ];

  const rewindingGalleryBottom = [
    { id: 4, image: 'motor4.jpg', title: 'Rewinding Motor' },
    { id: 5, image: 'motor5.jpg', title: 'Rewinding Motor' },
    { id: 6, image: 'motor6.jpg', title: 'Rewinding Motor' },
    { id: 7, image: 'motor7.jpg', title: 'Rewinding Motor' },
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">

        {/* Header Section - sekarang pakai komponen shared */}
        <Header title="Produk" fallbackPath="/" />

        {/* Main Info Card */}
        <div className="main-card">
          <h2 className="card-title">Procurement of Engine and Turbine Components and Spare Part</h2>
          <div className="card-body">
            <p>
              PT Digi tekno indonesia bergerak di bidang pemeliharaan produksi dan perbaikan dengan menyediakan berbagai produk dan layanan teknis yang andal dan berkualitas PT Digi Tekno indonesia memproduksi komponen seperti fabrikasi chain untuk kebutuhan industri serta menyediakan layanan instalasi sistem seperti cooling tower yang mendukung efisiensi operasioanal pembangkit dan fasilitas industri lainnya.
            </p>
            <p>
              Dalam bidang perawatan dan perbaikan kami ahli dalam overhaul pompa BFP dan rewinding motor memastikan peralatan pelanggan kami selalu dalam kondisi optimal Selain itu kami juga menyediakan berbagai tools dan alat ukur presisi sebagai pendukung utama dalam proses instalasi monitoring dan maintenance.
            </p>
          </div>
        </div>

        {/* Section 1: Overhaul Pompa BFP */}
        <div className="gallery-section">
          <div className="header-badges">
            <div className="badge-main">
              <h2>Overhaul Pompa BFP</h2>
            </div>
            <div className="badge-location">
              <span className="pin-icon">📍</span>
              <span>PT. Japa Indotama</span>
            </div>
          </div>

          <div className="gallery-grid-3">
            {pompaGalleryTop.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="image-wrapper img-tall">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-footer">
                  <p className="card-caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-grid-2" style={{ marginTop: '24px' }}>
            {pompaGalleryBottom.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-footer">
                  <p className="card-caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Pemasangan Sealstrip Turbin */}
        <div className="gallery-section" style={{ marginTop: '80px' }}>
          <div className="header-badges">
            <div className="badge-main text-multiline">
              <h2>Pemasangan Sealstrip<br/>Turbin 15 MW</h2>
            </div>
          </div>

          <div className="gallery-grid-3">
            {turbinGalleryTop.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="image-wrapper img-tall">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-footer">
                  <p className="card-caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-grid-2" style={{ marginTop: '24px' }}>
            {turbinGalleryBottom.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-footer">
                  <p className="card-caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Rewinding Motor */}
        <div className="gallery-section" style={{ marginTop: '80px' }}>
          <div className="header-badges">
            <div className="badge-main text-multiline">
              <h2>Rewinding Motor<br/>180Kw High Volt</h2>
            </div>
          </div>

          <div className="gallery-grid-3">
            {rewindingGalleryTop.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="image-wrapper img-tall">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-footer">
                  <p className="card-caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-grid-2" style={{ marginTop: '24px' }}>
            {rewindingGalleryBottom.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-footer">
                  <p className="card-caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

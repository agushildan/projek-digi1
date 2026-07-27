import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./serti.css";

function Sertifikasi() {
  // State untuk menyimpan gambar yang sedang di-zoom (diperbesar)
  const [zoomedImage, setZoomedImage] = useState(null);

  // Fungsi untuk menutup gambar besar
  const tutupZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="sertifikasi-container">
      
      <h1 className="sertifikasi-title">Sertifikasi</h1>

      <div className="sertifikasi-grid">
        {/* Bingkai 1 */}
        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat")}>
            <img src="gamabr sertifikat" alt="Sertifikat 1" className="sertifikasi-img" />
          </div>
        </div>

        {/* Bingkai 2 */}
        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-2.jpg")}>
            <img src="" alt="Sertifikat 2" className="sertifikasi-img" />
          </div>
        </div>

        {/* Bingkai 3 */}
        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-3.jpg")}>
            <img src="" alt="Sertifikat 3" className="sertifikasi-img" />
          </div>
        </div>

        {/* Bingkai 4 */}
        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-4.jpg")}>
            <img src="gambar-sertifikat-4.jpg" alt="Sertifikat 4" className="sertifikasi-img" />
          </div>
        </div>

        {/* Bingkai 5 */}
        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-5.jpg")}>
            <img src="gambar-sertifikat-5.jpg" alt="Sertifikat 5" className="sertifikasi-img" />
          </div>
        </div>

        {/* Bingkai 6 */}
        <div className="sertifikasi-frame">
          <div className="sertifikasi-frame-inner" onClick={() => setZoomedImage("gambar-sertifikat-6.jpg")}>
            <img src="gambar-sertifikat-6.jpg" alt="Sertifikat 6" className="sertifikasi-img" />
          </div>
        </div>
      </div>

      <div className="sertifikasi-floor"></div>

      <Link to="/" className="sertifikasi-btn-kembali">
        ❮ Kembali
      </Link>
      
      {/* ==========================================
          MODAL (POP-UP) UNTUK GAMBAR BESAR
          ========================================== */}
      {zoomedImage && (
        <div className="sertifikasi-modal" onClick={tutupZoom}>
          <span className="sertifikasi-modal-close">✖</span>
          <img src={zoomedImage} alt="Sertifikat Zoom" className="sertifikasi-modal-img" />
        </div>
      )}

    </div>
  );
}

export default Sertifikasi;
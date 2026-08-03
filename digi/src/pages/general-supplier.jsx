import React from "react";
import { useNavigate } from "react-router-dom";
import "./general-supplier.css";

function General() {
  const navigate = useNavigate();

  const itemsData = [
    { id: 1, title: "Chain", image: "chain1.webp" },
    { id: 2, title: "Chain", image: "chain2.webp" },
    { id: 3, title: "Chain", image: "chain3.webp" },
    { id: 4, title: "Chain", image: "chail4.webp" },
    { id: 5, title: "Chain", image: "chain5.webp" },
    { id: 6, title: "Chain", image: "chain6.webp" },
  ];

  const handleBack = () => {
    const btn = document.querySelector(".conveyor-btn-kembali");

    btn.classList.add("clicked");

    setTimeout(() => {
      navigate("/Layanan");
    }, 200);
  };

  return (
    <div className="page-wrapper">
      <main className="content-container">

        <button
          className="conveyor-btn-kembali"
          onClick={handleBack}  
        >
          ❮ Kembali
        </button>

        <h1 className="judul-halaman">Produk</h1>

        <div className="card-konten">
          <h2 className="judul-produk">General Suplier</h2>

          <div className="deskripsi-produk">
            <p>
              PT Digi Tekno Indonesia bergerak di bidang pemeliharaan produksi dan perbaikan dengan menyediakan berbagai produk dan layanan teknis dan andal yang berkualaitas PT Digi Tekno Indonesia memproduksi komponen seperti fablikasi chaim untuk kebutuhan industri serta menyediakan layanan instalasi siste seperti cooling tower yang mendukung efisiensi operasional pembangkit dan fasilitas industri lainnya.
            </p>

            <p>
              Dalam bidang perawatan dan perbaikan kami ahli dalam overhaul pompa BFP dan rewinding motor,memastikan peralatan pelanggan kami selalu dalam kondisi optimal. selain itu, kami juga menyediakan berbagai tools dan alat ukur presisi sebagai pendukung utama dalam proses,instalasi  monitoring dan maintenence
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

export default General;
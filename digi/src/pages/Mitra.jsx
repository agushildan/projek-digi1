import React from "react";
import "./Mitra.css";

function Mitra() {
  
  const daftarMitra = [
    { id: 1, nama: "JAPA", logo: "japa.png" },
    { id: 2, nama: "Dwitama", logo: "dwitama.png" },
    { id: 3, nama: "ICA", logo: "ica.png" },
    { id: 4, nama: "PLN", logo: "pln.png" },
    { id: 5, nama: "Katalis", logo: "katalis.png" },
    { id: 6, nama: "TAKA", logo: "taka.png" },
    { id: 7, nama: "SIP", logo: "sosi.png" },
    { id: 8, nama: "Tamaris", logo: "tamaris.png" },
  ];

  return (
    <div className="mitra-container">
      <h1 className="mitra-title">Mitra Kami</h1>

      <div className="mitra-grid">
 
        {daftarMitra.map((mitra) => (
          <div key={mitra.id} className="mitra-card">
            
           
            <div className="mitra-card-header">
              <div className="mitra-window-controls">
                <span className="control-btn">&minus;</span> {/* Ikon Minimize */}
                <span className="control-btn">&#9744;</span> {/* Ikon Maximize */}
                <span className="control-btn">&times;</span> {/* Ikon Close (X) */}
              </div>
            </div>

            
            <div className="mitra-card-body">
            
              <img src={mitra.logo} alt={`Logo ${mitra.nama}`} className="mitra-logo" />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Mitra;
import React from "react";
import "./Layanan.css"

function LBeranda(){
    return(
          <div className="layanan-container">
      <div className="produk-header">
        <h1 className="produk-title-layanan">Layanan</h1>
        <img src="digilogo.png" alt="Logo Digi" className="produk-logo1" />
      </div>


      <div className="services-list">
        
        {/* 1. Software Development */}
        <div className="service-card">
          <div className="service-info">
            <h2>Software Development</h2>
            <p>Mengembangkan aplikasi perangkat lunak dengan teknologi informasi berbasis web dan mobile aplikasi.</p>
          </div>
          <img src="Software Development.png" alt="Software Development" className="service-image" />
        </div>

        {/* 2. Services and Maintenance */}
        <div className="service-card">
          <div className="service-info">
            <h2>Services and Maintenance</h2>
            <p>Memberikan jasa perbaikan dan pemeliharaan baik untuk software, hardware ataupun infrastruktur.</p>
          </div>
          <img src="Services and Maintanance.png" alt="Services and Maintenance" className="service-image" />
        </div>

        {/* 3. IT Equipment/Hardware & Networking */}
        <div className="service-card">
          <div className="service-info">
            <h2>IT Equipment/Hardware & Networking</h2>
            <p>Memasok barang dan suku cadang barang IT untuk bisnis dan produk anda dengan misi kepuasan pelanggan dan pengiriman cepat. Pengadaan barang atau perangkat dan infrastruktur.</p>
          </div>
          <img src="IT EquipmentHardware & Networking.png" alt="IT Equipment" className="service-image" />
        </div>

        {/* 4. IT Consultant & Problem Solving */}
        <div className="service-card">
          <div className="service-info">
            <h2>IT Consultant & Problem Solving</h2>
            <p>Memberikan solusi masukan dan mengevaluasi sistem IT di perusahaan anda untuk meningkatkan kinerja perusahaan.</p>
          </div>
          <img src="IT Consultant & Problem Solving.png" alt="IT Consultant" className="service-image" />
        </div>

        {/* 5. Procurement of Engine... (BISA DIKLIK) */}
         <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Procurement of Engine and Turbine Components and Spare Part</h2>
              <p>Kami siap membantu dalam pengadaan komponen industri baik berupa komponen yang sudah jadi ataupun masih berupa bahan baku atau material. Adapun bahan material dapat berupa bahan dari dalam negeri atau luar negeri.</p>
            </div>
            <img src="Procurement of Engine.png" alt="Procurement" className="service-image" />
          </div>
       

        {/* 6. Installation Electrical and Automation Equipment */}
        <div className="service-card">
          <div className="service-info">
            <h2>Installation Electrical and Automation Equipment</h2>
            <p>Dengan semakin berkembangnya teknologi kelistrikan dan otomasi, maka kami siap membantu semua pengadaaan produk-produk otomasi dan IoT (Internet of Thing).</p>
          </div>
          <img src="Installlation Electrical.png" alt="Installation" className="service-image" />
        </div>
      </div>
    </div>
    )
}

export default LBeranda;
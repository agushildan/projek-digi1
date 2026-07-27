import React from 'react'; 
import { Link } from 'react-router-dom';
import './Layanan.css'; 

function Layanan() {
  return (
    <div className="layanan-container">
      <div className="produk-header">
        <h1 className="produk-title-layanan">Layanan</h1>
        <img src="digilogo.png" alt="Logo Digi" className="produk-logo" />
      </div>

      <img src="latar digi.jepg" alt="" />   

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
        <Link to="/procurement" className="service-link">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Procurement of Engine and Turbine Components and Spare Part</h2>
              <p>Kami siap membantu dalam pengadaan komponen industri baik berupa komponen yang sudah jadi ataupun masih berupa bahan baku atau material. Adapun bahan material dapat berupa bahan dari dalam negeri atau luar negeri.</p>
            </div>
            <img src="Procurement of Engine.png" alt="Procurement" className="service-image" />
          </div>
        </Link>

        {/* 6. Installation Electrical and Automation Equipment */}
        <div className="service-card">
          <div className="service-info">
            <h2>Installation Electrical and Automation Equipment</h2>
            <p>Dengan semakin berkembangnya teknologi kelistrikan dan otomasi, maka kami siap membantu semua pengadaaan produk-produk otomasi dan IoT (Internet of Thing).</p>
          </div>
          <img src="Installlation Electrical.png" alt="Installation" className="service-image" />
        </div>
        
        {/* 7. Mechanical Electrical (BISA DIKLIK) */}
        <Link to="/mechanical-electrical" className="service-link">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Mechanical Electrical</h2>
              <p>Layanan Mechanical Electical dari Pt Digi Tekno Indonesia mencakup instalasi,perawatan,hingga troubleshooting sistem mekanik dan elektrikal pada berbagai fasilitas industri dan bangunan komersial</p>
            </div>
            <img src="Mechanical Electrical.png" alt="Installation" className="service-image" />
          </div>
        </Link>

        {/* 8. Repair Sparepart Conveyor (BISA DIKLIK) */}
        <Link to="/conveyordetail" className="service-link">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Repair Sparepart Conveyor</h2>
              <p>Layanan berfokus pada perbaikan dan rekondisi komponen conveyor yang rusak atau aus akibat penggunaan industri yang intensif Kami Menangani berbagai jenis sistem conveyor,termasuk belt,roller,chain,dan screw convetor</p>
            </div>
            <img src="Repair Sparepart Conveyor.png" alt="Installation" className="service-image" />
          </div>
        </Link>
        
        {/* 9. General Supplier (BISA DIKLIK) */}
        <Link to="/general-supplier" className="service-link">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>General Supplier</h2>
              <p>Kami menjembatani kebutuhan klien terhadap Mesin,Tools,Belt,PC,Server,dll,dengan Kualitas terbaik dan waktu pengadaan yang efisien berasal dar lokal maupun import Dengan jaringan mitra yang luas, kami mampu menyediakan solusi pengadaan yang sesuai dengan spesifikasi yang dibutuhan,mulai dari item standar hingga produk khusus sesuai permintaan </p>
            </div>
            <img src="General Supplier.png" alt="Installation" className="service-image" />
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Layanan;
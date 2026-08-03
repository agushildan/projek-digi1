import React, { useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import './Layanan.css'; 

function Layanan() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [location]);

  return (
    <div className="layanan-container">
      <div className="produk-header">
        <h1 className="produk-title-layanan">Layanan</h1>
        <img src="digilogo.png" alt="Logo Digi" className="produk-logo1" />
      </div>

      <div className="services-list">
        
        <div className="service-card" id="software-development">
          <div className="service-info">
            <h2>Software Development</h2>
            <p>Mengembangkan aplikasi perangkat lunak dengan teknologi informasi berbasis web dan mobile aplikasi.</p>
          </div>
          <img src="sofware developent.png" alt="Software Development" className="service-image" />
        </div>

        <div className="service-card" id="services-maintenance">
          <div className="service-info">
            <h2>Services and Maintenance</h2>
            <p>Memberikan jasa perbaikan dan pemeliharaan baik untuk software, hardware ataupun infrastruktur.</p>
          </div>
          <img src="service and maintanance.png" alt="Services and Maintenance" className="service-image" />
        </div>

        <div className="service-card" id="it-equipment">
          <div className="service-info">
            <h2>IT Equipment/Hardware & Networking</h2>
            <p>Memasok barang dan suku cadang barang IT untuk bisnis dan produk anda dengan misi kepuasan pelanggan dan pengiriman cepat. Pengadaan barang atau perangkat dan infrastruktur.</p>
          </div>
          <img src="hardware and networking.png" alt="IT Equipment" className="service-image" />
        </div>

        <div className="service-card" id="it-consultant">
          <div className="service-info">
            <h2>IT Consultant & Problem Solving</h2>
            <p>Memberikan solusi masukan dan mengevaluasi sistem IT di perusahaan anda untuk meningkatkan kinerja perusahaan.</p>
          </div>
          <img src="it consultan.png" alt="IT Consultant" className="service-image" />
        </div>

        <Link to="/procurement" className="service-link" id="procurement-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Procurement of Engine and Turbine Components and Spare Part</h2>
              <p>Kami siap membantu dalam pengadaan komponen industri baik berupa komponen yang sudah jadi ataupun masih berupa bahan baku atau material. Adapun bahan material dapat berupa bahan dari dalam negeri atau luar negeri.</p>
            </div>
            <img src="procurement.png" alt="Procurement" className="service-image" />
          </div>
        </Link>

        <div className="service-card" id="electrical-automation">
          <div className="service-info">
            <h2>Installation Electrical and Automation Equipment</h2>
            <p>Dengan semakin berkembangnya teknologi kelistrikan dan otomasi, maka kami siap membantu semua pengadaaan produk-produk otomasi dan IoT (Internet of Thing).</p>
          </div>
          <img src="Installlation Electrical.png  " alt="Installation" className="service-image" />
        </div>
        
        <Link to="/mechanic" className="service-link" id="mechanical-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Mechanical Electrical</h2>
              <p>Layanan Mechanical Electrical dari PT Digi Tekno Indonesia mencakup instalasi, perawatan, hingga troubleshooting sistem mekanik dan elektrikal pada berbagai fasilitas industri dan bangunan komersial.</p>
            </div>
            <img src="electrical.png" alt="Mechanical Electrical" className="service-image" />
          </div>
        </Link>

        <Link to="/conveyordetail" className="service-link" id="conveyor-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Repair Sparepart Conveyor</h2>
              <p>Layanan berfokus pada perbaikan dan rekondisi komponen conveyor yang rusak atau aus akibat penggunaan industri yang intensif. Kami menangani berbagai jenis sistem conveyor, termasuk belt, roller, chain, dan screw conveyor.</p>
            </div>
            <img src="conveyor.png" alt="Repair Conveyor" className="service-image" />
          </div>
        </Link>
        
        <Link to="/general-supplier" className="service-link" id="supplier-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>General Supplier</h2>
              <p>Kami menjembatani kebutuhan klien terhadap Mesin, Tools, Belt, PC, Server, dll, dengan kualitas terbaik dan waktu pengadaan yang efisien berasal dari lokal maupun import. Dengan jaringan mitra yang luas, kami mampu menyediakan solusi pengadaan yang sesuai dengan spesifikasi yang dibutuhkan.</p>
            </div>
            <img src="General Supplier.png" alt="General Supplier" className="service-image" />
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Layanan;
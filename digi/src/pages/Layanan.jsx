import React, { useEffect,useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import './Layanan.css'; 
import i18n from '../i18n';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

function Layanan() {

  const [currentLang, setCurrentLang] = useState(i18n.language || "id");
  const t = (key) => i18n.t(key);
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);


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
        <h1 className="produk-title-layanan">{t("judul_layanan")}</h1>
      </div>

      <div className="services-list">
       
        <Link to="/software defelopment" className="service-link" id="procurement-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Sofware Development</h2>
              <p>{t("subjudul1")}</p>
            </div>
            <img src="Software Development.webp" alt="software developent" className="service-image" />
          </div>
        </Link>

        <Link to="/service" className="service-link" id="procurement-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Services and Maintenance</h2>
              <p>
                {t("subjudul2")}
              </p>
            </div>
            <img src="service and maintanance.webp" alt="Services and Maintenance" className="service-image" />
          </div>
        </Link>


        <Link to="/hardware" className="service-link" id="procurement-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>IT Equipment/Hardware & Networking</h2>
              <p>
                {t("subjudul3")}
              </p>
            </div>
            <img src="hardware and networking.webp" alt="IT Equipment" className="service-image" />
          </div>
        </Link>

        <Link to="/itconsultan" className="service-link" id="procurement-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>IT Consultant & Problem Solving</h2>
              <p>{t("subjudul4")}</p>
            </div>
            <img src="it consultan.webp" alt="IT Consultant" className="service-image" />
          </div>
        </Link>


        <Link to="/procurement" className="service-link" id="procurement-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Procurement of Engine and Turbine Components and Spare Part</h2>
              <p>{t("subjudul5")}</p>
            </div>
            <img src="procurement.webp" alt="Procurement" className="service-image" />
          </div>
        </Link>



        <Link to="/installation" className="service-link" id="procurement-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Installation Electrical and Autmatic Equipment</h2>
              <p>{t("subjudul6")}</p>
            </div>
            <img src="electrical.webp" alt="Insallation" className="service-image" />
          </div>
        </Link>

       
        
        <Link to="/mechanicalnew" className="service-link" id="mechanical-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Mechanical Electrical</h2>
              <p>{t("subjudul7")}</p>
            </div>
            <img src="Mechanical Electrical.webp" alt="Mechanical Electrical" className="service-image" />
          </div>
        </Link>

        <Link to="/conveyordetail" className="service-link" id="conveyor-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>Repair Sparepart Conveyor</h2>
              <p>{t("subjudul8")}nten</p>
            </div>
            <img src="conveyor.webp" alt="Repair Conveyor" className="service-image" />
          </div>
        </Link>
        
        <Link to="/general-supplier" className="service-link" id="supplier-card">
          <div className="service-card clickable-card">
            <div className="service-info">
              <h2>General Supplier</h2>
              <p>{t("subjudul9")}</p>
            </div>
            <img src="General Supplier.webp" alt="General Supplier" className="service-image" />
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Layanan;
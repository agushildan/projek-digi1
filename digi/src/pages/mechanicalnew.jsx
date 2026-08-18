import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './mechanicalnes.css';
import i18n from '../i18n';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

export default function Mechanicalnew() {
  const navigate = useNavigate();

  const handleBack = () => {
    const btn = document.querySelector(".mechanic-btn-kembali");

    btn.classList.add("clicked");

    setTimeout(() => {
      navigate("/Layanan");
    }, 200);
  };

  const coolingTowerGallery = [
    { id: 1, image: 'cooling1.jpg', title: 'Cooling Tower' },
    { id: 2, image: 'cooling2.jpg', title: 'Cooling Tower' },
    { id: 3, image: 'cooling3.jpg', title: 'Cooling Tower' },
    { id: 4, image: 'cooling4.jpg', title: 'Cooling Tower' },
  ];

  const pompaGalleryTop = [
    { id: 1, image: 'pompa1.jpg', title: 'Pompa BFP' },
    { id: 2, image: 'pompa2.jpg', title: 'Pompa BFP' },
    { id: 3, image: 'pompa3.jpg', title: 'Pompa BFP' },
  ];

  const pompaGalleryBottom = [
    { id: 4, image: 'pompa4.jpg', title: 'Pompa BFP' },
    { id: 5, image: 'pompa5.jpg', title: 'Pompa BFP' },
    { id: 6, image: 'pompa6.jpg', title: 'Pompa BFP' },
    { id: 7, image: 'pompa7.jpg', title: 'Pompa BFP' },
  ];

  const turbinGalleryTop = [
    { id: 1, image: 'turbin1.jpg', title: 'Pemasangan Sealstrip Turbin' },
    { id: 2, image: 'turbin2.jpg', title: 'Pemasangan Sealstrip Turbin' },
    { id: 3, image: 'turbin3.jpg', title: 'Pemasangan Sealstrip Turbin' },
  ];

  const turbinGalleryBottom = [
    { id: 4, image: 'turbin4.jpg', title: 'Pemasangan Sealstrip Turbin' },
    { id: 5, image: 'turbin5.jpg', title: 'Pemasangan Sealstrip Turbin' },
  ];

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

  const toolsSmallGallery = [
    { id: 1, image: '/tools1.jpg', title: 'Tools' },
    { id: 2, image: '/tools2.jpg', title: 'Tools' },
    { id: 3, image: '/tools3.jpg', title: 'Tools' },
    { id: 4, image: '/tools4.jpg', title: 'Tools' },
    { id: 5, image: '/tools5.jpg', title: 'Tools' },
    { id: 6, image: '/tools6.jpg', title: 'Tools' },
    { id: 7, image: '/tools7.jpg', title: 'Tools' },
    { id: 8, image: '/tools8.jpg', title: 'Tools' },
    { id: 9, image: '/tools9.jpg', title: 'Tools' },
    { id: 10, image: '/tools10.jpg', title: 'Tools' },
    { id: 11, image: '/tools11.jpg', title: 'Tools' },
    { id: 12, image: '/tools12.jpg', title: 'Tools' },
    { id: 13, image: '/tools13.jpg', title: 'Tools' },
    { id: 14, image: '/tools14.jpg', title: 'Tools' },
    { id: 15, image: '/tools15.jpg', title: 'Tools' },
    { id: 16, image: '/tools16.jpg', title: 'Tools' },
    { id: 17, image: '/tools17.jpg', title: 'Tools' },
    { id: 18, image: '/tools18.jpg', title: 'Tools' },
    { id: 19, image: '/tools19.jpg', title: 'Tools' },
    { id: 20, image: '/tools20.jpg', title: 'Tools' },
  ];

  const toolsBigGallery = [
    { id: 21, image: '1.jpg', title: 'Tools' },
    { id: 22, image: '2.jpg', title: 'Tools' },
    { id: 23, image: '3.jpg', title: 'Tools' },
    { id: 24, image: '4.jpg', title: 'Tools' },
  ];

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

  return (
    <div className="page-container">
      <div className="content-wrapper">

        <div className="top-bar">
          <button
            className="mechanic-btn-kembali"
            onClick={handleBack}
          >
            ❮ {t("btn_kembali")}
          </button>
        </div>

        <div className="header-section mechanic-header">
          <h1 className="page-title1">{t("judul_produk")}</h1>
        </div>

        <div className="main-card">
          <h2 className="card-title">Mechanical & Electrical</h2>

          <div className="card-body">
            <p>
              {t("isi_layanann7")}
            </p>
            <p>
              {t("isi_paragraft77")}
            </p>
          </div>
        </div>

        <div className="gallery-section">
          <div className="header-badges">
            <div className="badge-main">
              <h2>Instalasi Cooling Tower</h2>
            </div>
            <div className="badge-location">
              <span className="pin-icon">
                <img src="icons8-location-48.png" alt="icon-lokasi" className='icon-location'/>
              </span>
              <span>PT. Japa Indotama</span>
            </div>
          </div>
          <div className="gallery-grid-2">
            {coolingTowerGallery.map((item) => (
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

        <div className="gallery-section" style={{ marginTop: '80px' }}>
          <div className="header-badges">
            <div className="badge-main">
              <h2>Overhaul Pompa BFP</h2>
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

        <div className="gallery-section" style={{ marginTop: '80px' }}>
          <div className="header-badges">
            <div className="badge-main">
              <h2>Tools & Alat Ukur</h2>
            </div>
          </div>

          <div className="gallery-grid-4">
            {toolsSmallGallery.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="image-wrapper img-square">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-footer">
                  <p className="card-caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-grid-2" style={{ marginTop: '24px' }}>
            {toolsBigGallery.map((item) => (
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
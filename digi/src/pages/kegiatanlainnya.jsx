import { useState,useEffect } from 'react';
import './Lainnya.css'; 
import { Link } from 'react-router-dom';
import Footer from './footer';
import i18n from '../i18n';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Lainnya() {
  const dataKegiatan = [
    { id: 1, img: "foto1.jpg", date: "24 / 03 / 2025", title: "Buka Bersama PT. Digi Tekno Indonesia", rotate: 15 },
    { id: 2, img: "foto2.jpg", date: "02 / 01 / 2025", title: "Body Rafting Grand Citumang", rotate: -3 },
    { id: 3, img: "foto3.jpg", date: "01 / 02 / 2025", title: "Rafting Situ Cileunca", rotate: 7 },
    { id: 4, img: "foto4.jpg", date: "01 / 02 / 2025", title: "Body Rafting Grand Citumang", rotate: -5 },
    { id: 5, img: "foto5.jpg", date: "01 / 02 / 2025", title: "Body Rafting Grand Citumang", rotate: -5 },
    { id: 6, img: "foto1.jpg", date: "10 / 05 / 2025", title: "Gathering Perusahaan 2025", rotate: 4 },
    { id: 7, img: "foto2.jpg", date: "15 / 08 / 2025", title: "Workshop & Training", rotate: -6 },
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
    <>
      <div className="halaman-kegiatan">
        
        <div className="header-kegiatan">
          <div className="papan-kayu">
            <h1>{t("judul_kegiatan")}</h1>
          </div>
        </div>

        <div className="area-gantungan">
          <img src="tambang.png" alt="tambang" className="gambar-tambang" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1} 
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 48,
              },
            }}
            className="swiper-container-kegiatan"
          >
            {dataKegiatan.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide-kegiatan">
                <div
                  className="kartu-polaroid"
                  style={{
                    transform: `rotate(${item.rotate}deg)`,
                    '--tilt-offset': `${Math.abs(item.rotate) * 3}px`,
                  }}
                >
                  <img src="capitan.png" alt="capitan" className="gambar-capitan" />
                  <div className="konten-polaroid">
                    <img src={item.img} alt={item.title} className="foto-kegiatan" />
                    <p className="tanggal">{item.date}</p>
                    <p className="teks-judul">{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="area-bawah">
          <Link to="/" className='tombol-kembali'>
            <span className='ikon-panah'>‹</span>
            {t("btn_kembali")}
          </Link>
        </div>

      </div>

      <section className='footer-kegiatan2'>
        <Footer />
      </section>
    </>
  );
}

export default Lainnya;
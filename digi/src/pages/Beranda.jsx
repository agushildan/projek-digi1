import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useLocation } from "react-router-dom"; 
import i18n from "../i18n"; 
import LatarDigi from "../assets/latar digi.png"; 
import "./Beranda.css";
import Tentang from "./Tentang";
import VisiMisi from "./VisiMisi";
import Produk from "./Produk";
import LBeranda from "./layananberanda";
import Mitra from "./Mitra";
import Kontak from "./kontak";
import Footer from "./footer";
import Kegiatan from "./Kegiatan";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function Model3D() {
  const { scene, animations } = useGLTF("/models/animasipertama.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.keys(actions).forEach((key) => {
        actions[key]?.reset().fadeIn(0.5).play();
      });
    }
  }, [actions, animations]);

  return (
    <primitive 
      object={scene} 
      scale={2.2}             
      position={[-1, -2, 1]}
      rotation={[0, 1, 0]}    
    />
  );
}

function Beranda() {
  const location = useLocation();

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

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");

      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="beranda-container">
      <div className="beranda-hero">
         
        <div className="beranda-left">
          <div className="beranda-judul"> 
            <h1 className="teks-biru">{t("hero_title_1")}</h1>
            <h1 className="teks-merah">{t("hero_title_2")}</h1>
            <h1 className="teks-biru">{t("hero_title_3")}</h1>
          </div>

          <div className="beranda-textp">
            <p>{t("hero_desc_1")}</p>
            <p>{t("hero_desc_2")}</p>
          </div>

          <a 
            href="https://wa.me/6285924101807?text=Halo,%20saya%20ingin%20bertanya?"
            className="beranda-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t("contact_us")}
          </a>
        </div>

        <div className="beranda-right">
          <div className="hero-3d-wrapper">
              
            <img src={LatarDigi} alt="Latar Digi" className="beranda-latar" />

            <div className="canvas-layer">
              <Canvas camera={{ position: [0, 0.5, 10], fov: 50 }}>
                <ambientLight intensity={1.8} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Suspense fallback={null}>
                  <Model3D />
                </Suspense>

                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>

          </div>
        </div>

      </div>

      <section className="section-tentang" id="tentang"><Tentang /></section>  
      <section className="section-visi-misi" id="visi-misi"><VisiMisi /></section>
      <section className="section-product" id="produk"><Produk /></section>
      <section className="section-layanan-beranda" id="layanan-beranda"><LBeranda /></section>
      <section className="keegiatan" id="kegiatan"><Kegiatan /></section>
      <section className="section-mitra" id="mitra"><Mitra /></section>
      <section className="section-kontak" id="kontak"><Kontak /></section>
      <section className="section-footer"><Footer /></section>
    </div>
  );
}

export default Beranda;
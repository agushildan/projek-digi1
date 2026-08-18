import React, { useEffect, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import "./Produk.css";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

const dataProduk = [
  {
    id: 1,
    title: "MIS DIGI",
    subtitle: "( Management Information System DIGI )",
    image: "kanan.png",
  },
  {
    id: 2,
    title: "ERP System",
    subtitle: "( Enterprise Resource Planning )",
    image: "1.jpg", 
  },
  {
    id: 3,
    title: "Custom App",
    subtitle: "( Tailor-made Business Solution )",
    image: "2.jpg", 
  },
];

function ModelProduk() {
  const { scene, animations } = useGLTF("/models/animasiProduk(2).glb");
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
      scale={3} 
      position={[-0.5, -3.9, 3]} 
    />
  );
}

function Produk() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataProduk.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataProduk.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  const currentItem = dataProduk[currentIndex];
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
    <div className="produk-container">
      
      <div className="produk-header">
        <h1 className="produk-title-layanan1">{t("judul_produk")}</h1>
      </div>

      <div className="produk-btn-mobile">
        <a 
          href="/produklain" 
          rel="noopener noreferrer" 
          className="produk-btn-merah"
        >
        {t("produk_lainnya")}
        </a>
      </div>

      <div className="produk-content-wrapper">
        
        <div className="produk-left-desktop">
          <a 
            href="/produklain" 
            rel="noopener noreferrer" 
            className="produk-btn-merah"
          >
            {t("produk_lainnya")}
          </a>

          <div className="produk-speech-bubble">
            <span className="quote-icon">❝</span>
            <p>Take Your Business<br/>To The Next Level</p>
          </div>

          <div className="produk-3d-wrapper">
            <Canvas 
              camera={{ position: [0, 0.5, 8], fov: 45 }}
              gl={{ localClippingEnabled: true }}
            >
              <ambientLight intensity={1.8} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <pointLight position={[-10, -10, -10]} intensity={1} />

              <Suspense fallback={null}>
                <ModelProduk />
              </Suspense>

              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>

        <div className="produk-right-card">
          
          <div className="produk-text-section">
            <ul className="produk-list">
              <li>{t("produk1")}</li>
              <li>{t("produk2")}</li>
              <li>{t("produk3")}</li>
              <li>{t("produk4")}</li>
              <li>{t("produk5")}</li>
            </ul>
          </div>

          <div className="produk-slider-section">
            <div className="produk-slider-box">
              <img 
                src={currentItem.image} 
                alt={currentItem.title} 
                className="produk-slider-img" 
              />
              
              <div className="produk-slider-controls">
                <button className="slider-arrow" onClick={handlePrev}>❮</button>
                <button className="slider-arrow" onClick={handleNext}>❯</button>
              </div>          

              <h3 className="produk-slider-title">{currentItem.title}</h3>
              <p className="produk-slider-subtitle">{currentItem.subtitle}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Produk;
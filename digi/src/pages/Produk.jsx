import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import "./Produk.css";

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
      position={[-0.5, -4, 3]} 
    />
  );
}

function Produk() {
  return (
    <div className="produk-container">
      
      <div className="produk-header">
        <h1 className="produk-title-layanan1">Produk</h1>
        <img src="digilogo.png" alt="Logo Digi" className="produk-logo" />
      </div>

      <div className="produk-btn-mobile">
        <a 
          href="/produklain" 
          rel="noopener noreferrer" 
          className="produk-btn-merah"
        >
          Lihat produk lainnya disini
        </a>
      </div>

      <div className="produk-content-wrapper">
        
        <div className="produk-left-desktop">
          <a 
            href="/produklain" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="produk-btn-merah"
          >
            Lihat produk lainnya disini
          </a>

          <div className="produk-speech-bubble">
            <span className="quote-icon">❝</span>
            <p>Take Your Business<br/>To The Next Level</p>
          </div>

          <div className="produk-3d-wrapper">
            <Canvas camera={{ position: [0, 0.5, 8], fov: 45 }}
            gl={{localClippingEnabled: true}}>
              
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
              <li>Produk dan jasa PT Digi Tekno Indonesia dapat digunakan di berbagai macam industri dan bisnis.</li>
              <li>PT Digi Tekno Indonesia dapat menyesuaikan produk kami sesuai dengan kebutuhan anda.</li>
              <li>Kami juga berkomitmen untuk menyediakan layanan dan produk yang efektif, hemat biaya dan cepat.</li>
              <li>PT Digi Tekno Indonesia terdiri dari tim yang berdedikasi untuk memastikan semua produk dan jasa yang diberikan memenuhi kebutuhan spesifik anda.</li>
              <li>Kami pun berfokus memberikan layanan dan solusi di bisnis anda untuk meningkatkan kinerja bisnis.</li>
            </ul>
          </div>

          <div className="produk-slider-section">
            <div className="produk-slider-box">
              <img src="kanan.png" alt="MIS DIGI Preview" className="produk-slider-img" />
              
              <div className="produk-slider-controls">
                <button className="slider-arrow">❮</button>
                <button className="slider-arrow">❯</button>
              </div>
              
              <h3 className="produk-slider-title">MIS DIGI</h3>
              <p className="produk-slider-subtitle">( Management Information System DIGI )</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Produk;
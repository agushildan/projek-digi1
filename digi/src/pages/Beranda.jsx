import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
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
      position={[-1, -2, 0]}
rotation={[0, 1, 0]}    
/>
  );
}

function Beranda() {
  return (
    <div className="beranda-container">
      <div className="beranda-hero">
        
        <div className="beranda-left">
          <div className="beranda-judul"> 
            <h1 className="teks-biru">WE MAKE</h1>
            <h1 className="teks-merah">YOUR BUSINESS</h1>
            <h1 className="teks-biru">BETTER THAN OTHER</h1>
          </div>

          <div className="beranda-textp">
            <p>
              PT Digi Tekno Indonesia adalah perusahaan yang bergerak di bidang
              konsultan IT, jasa service mesin manufaktur, pengadaan sparepart dan material.
            </p>
            <p>
              Kami berkomitmen memberikan pelayanan dan kualitas produk yang terbaik
              untuk Anda.
            </p>
          </div>
            
          <a 
            href="https://wa.me/6289519808548?text=Halo,%20saya%20ingin%20bertanya?"
            className="beranda-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Contact Us
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

      <section className="section-tentang"><Tentang /></section>  
      <section className="section-visi-misi"><VisiMisi /></section>
      <section className="section-product"><Produk /></section>
      <section className="section-layanan-beranda"><LBeranda /></section>
      <section className="keegiatan"><Kegiatan /></section>
      <section className="section-mitra"><Mitra /></section>
      <section className="section-kontak" id="/kontak"><Kontak /></section>
      <section className="section-footer"><Footer /></section>
    </div>
  );
}

export default Beranda;
import Animasi from "../assets/karakter.gif";
import Latar from "../assets/latar digi.jpeg";
import "./Beranda.css";
import Tentang from "./Tentang";
import VisiMisi from "./VisiMisi";
import Produk from "./Produk";
import LBeranda from "./layananberanda";
import Mitra from "./Mitra";
import Kontak from "./kontak";
import Footer from "./footer";
import Kegiatan from "./Kegiatan";

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
            href="https://wa.me/6283186405391?text=Halo,%20saya%20ingin%20bertanya?"
            className="beranda-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>

        <div className="beranda-right">
          <img src={Latar} alt="Latar Digi" className="beranda-latar" />
          <img src={Animasi} alt="Karakter" className="beranda-karakter" />
        </div>
      </div>

      <section className="section-tentang">
        <Tentang />
      </section>  

     
<section className="section-visi-misi">
<VisiMisi />
</section>



<section className="section-product">
  <Produk />
</section>

<section className="section-layanan-beranda">
<LBeranda />
</section>

<section className="keegiatan">
<Kegiatan />
</section>

<section className="section-mitra">
<Mitra />
</section>

<section className="section-kontak">
<Kontak />
</section>

<section className="section-footer">
<Footer />
</section>
    </div>
  );
}

export default Beranda;
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import Navbar from "./components/navbar";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Produk from "./pages/Produk";
import Layanan from "./pages/Layanan";
import Mitra from "./pages/Mitra";
import Kegiatan from "./pages/Kegiatan";
import Info from "./pages/Info";
import VisiMisi from "./pages/VisiMisi";
import Sertifikasi from "./pages/Sertifikasi";
import Karir from "./pages/Karir";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import Produklain from "./pages/produklain";
import Detailproduk from "./pages/detailproduk";
import Kontak from "./pages/kontak";
import Footer from "./pages/footer";
import Conveyor from "./pages/conveyordetail";
import Mechanic from "./pages/mechanic";
import General from "./pages/general-supplier";
import Procurement from "./pages/procurement";


function App() {
  return (
    <BrowserRouter>

     <ScrollToTop />
     
      <Navbar />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/mitra" element={<Mitra />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/info" element={<Info />} />
     


       
        <Route path="/Sertifikasi" element={<Sertifikasi />} />
        
       <Route path="/visi-misi" element={<VisiMisi />} /> 
        
        {/* Submenu dari Info */}
        <Route path="/Karir" element={<Karir />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Blog" element={<Blog />} />

         <Route path="/produklain" element={<Produklain />}/>
        <Route path="/detailproduk" element={<Detailproduk />} />
        <Route  path="/kontak" element={<Kontak />}/>
        <Route path="/footer" element={<Footer />} />
        <Route path="/conveyordetail" element={<Conveyor />} />
        <Route path="/mechanic" element={<Mechanic />} />
        <Route path="/general-supplier" element={<General />} />
        <Route path="/procurement" element={<Procurement />} />



        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
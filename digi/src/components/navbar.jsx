import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; 

function Navbar() {
  const [keyword, setKeyword] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isTentangAktif = ["/sertifikasi", "/visi-misi"].includes(location.pathname);
  const isInfoAktif = ["/karir", "/faq", "/blog"].includes(location.pathname);

  const menuRoutes = [
    { keywords: ["beranda", "home", "utama"], route: "/" },
    { keywords: ["produk", "product", "barang"], route: "/produk" },
    { keywords: ["layanan", "service", "jasa"], route: "/layanan" },
    { keywords: ["mitra", "partner", "kerjasama"], route: "/mitra" },
    { keywords: ["kegiatan", "activity", "event", "acara"], route: "/kegiatan" },

    { keywords: ["sertifikasi", "sertifikat", "certificate"], route: "/sertifikasi" },
    { keywords: ["visi", "misi", "visi misi", "purpose"], route: "/visi-misi" },
    { keywords: ["tentang", "about", "profile", "profil"], route: "/#tentang-section" },

    { keywords: ["karir", "career", "lowongan", "kerja", "job", "loker"], route: "/karir" },
    { keywords: ["faq", "pertanyaan", "bantuan", "help"], route: "/faq" },
    { keywords: ["blog", "artikel", "berita", "news"], route: "/blog" },

    { keywords: ["software", "development", "aplikasi", "web", "mobile"], route: "/layanan#software-development" },
    { keywords: ["maintenance", "services", "perbaikan", "pemeliharaan"], route: "/layanan#services-maintenance" },
    { keywords: ["hardware", "iq equipment", "networking", "barang", "suku cadang"], route: "/layanan#it-equipment" },
    { keywords: ["konsultan", "it consultant", "problem solving", "solusi", "masukan", "mengevaluasi"], route: "/layanan#it-consultant" },
    { keywords: ["procurement", "enggine", "turbine", "spare part"], route: "/procurement" },
    { keywords: ["automation", "installation", "electrical", "equipment"], route: "/layanan#electrical-automation" },
    { keywords: ["mechanical", "instalasi", "perawatan", "troubleshooting"], route: "/mechanical" },
    { keywords: ["repair", "conveyor", "komponen conveyor"], route: "/conveyordetail" },
    { keywords: ["supplier", "general", "belt", "server", "mesin"], route: "/general-supplier" },
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const kataKunci = keyword.trim().toLowerCase();
    if (!kataKunci) return;

    const match = menuRoutes.find((item) =>
      item.keywords.some((key) => kataKunci.includes(key))
    );

    if (match) {
      if (match.route.includes("#")) {
        const [path, hash] = match.route.split("#");
        navigate(path);

        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 200);
      } else {
        navigate(match.route);
      }
    } else {
      alert(`Kata kunci "${keyword}" tidak ditemukan.`);
    }

    setKeyword("");
    closeAllMenus();
  };

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="digilogo.png" alt="Logo" />
      </div>

      <button className="hp-btn" onClick={() => setIsMobileMenuOpen(true)}>
        ☰
      </button>

      {isMobileMenuOpen && (
        <div className="backdrop" onClick={closeAllMenus}></div>
      )}

      <div className={`nav-menu-wrapper ${isMobileMenuOpen ? "open" : ""}`}>
        
        <div className="mobile-header">
          <img src="digilogo.png" alt="Logo" className="mobile-logo" />
          <button className="close-btn" onClick={closeAllMenus}>
            ✕
          </button>
        </div>

        <ul className="menu" ref={menuRef}>
          <li><NavLink to="/" onClick={closeAllMenus}>Beranda</NavLink></li>

          <li>
            <span 
              className={`dropdown-trigger ${activeMenu === "tentang" || isTentangAktif ? "menu-aktif" : ""}`} 
              onClick={() => toggleMenu("tentang")}
            >
              Tentang Digi
            </span>
            <ul className={`submenu ${activeMenu === "tentang" ? "show" : ""}`}>
              <li><NavLink to="/sertifikasi" onClick={closeAllMenus}>Sertifikasi</NavLink></li>
              <li><NavLink to="/visi-misi" onClick={closeAllMenus}>Visi Misi</NavLink></li>
            </ul>
          </li>
                        
          <li><NavLink to="/produk" onClick={closeAllMenus}>Produk</NavLink></li>
          <li><NavLink to="/layanan" onClick={closeAllMenus}>Layanan</NavLink></li>
          <li><NavLink to="/mitra" onClick={closeAllMenus}>Mitra</NavLink></li>
          <li><NavLink to="/kegiatan" onClick={closeAllMenus}>Kegiatan</NavLink></li>

          <li>
            <span 
              className={`dropdown-trigger ${activeMenu === "info" || isInfoAktif ? "menu-aktif" : ""}`} 
              onClick={() => toggleMenu("info")}
            >
              Info
            </span>
            <ul className={`submenu ${activeMenu === "info" ? "show" : ""}`}>
              <li><NavLink to="/karir" onClick={closeAllMenus}>Karir</NavLink></li>
              <li><NavLink to="/faq" onClick={closeAllMenus}>FAQ</NavLink></li>
              <li><NavLink to="/blog" onClick={closeAllMenus}>Blog</NavLink></li>
            </ul>
          </li>
        </ul>

        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Cari menu, info, layanan..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">Cari</button>
        </form>

      </div>
    </nav>
  );
}

export default Navbar;
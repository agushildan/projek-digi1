import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; 

function Navbar() {
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  
  const menuRef = useRef(null);
  const location = useLocation();

  const isTentangAktif = ["/sertifikasi", "/visi-misi"].includes(location.pathname);
  const isInfoAktif = ["/karir", "/faq", "/blog"].includes(location.pathname);

  const handleSearch = () => {
    alert("Mencari: " + search);
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

      <ul className="menu" ref={menuRef}>

        <li><NavLink to="/">Beranda</NavLink></li>

        <li>
          <span 
            className={`dropdown-trigger ${activeMenu === "tentang" || isTentangAktif ? "menu-aktif" : ""}`} 
            onClick={() => toggleMenu("tentang")}
          >
            Tentang Digi
          </span>
          <ul className={`submenu ${activeMenu === "tentang" ? "show" : ""}`}>
            <li><NavLink to="/sertifikasi" onClick={() => setActiveMenu(null)}>Sertifikasi</NavLink></li>
            <li><NavLink to="/visi-misi" onClick={() => setActiveMenu(null)}>Visi Misi</NavLink></li>
          </ul>
        </li>
                      
        <li><NavLink to="/produk">Produk</NavLink></li>
        <li><NavLink to="/layanan">Layanan</NavLink></li>
        <li><NavLink to="/mitra">Mitra</NavLink></li>
        <li><NavLink to="/kegiatan">Kegiatan</NavLink></li>

        <li>
          <span 
            className={`dropdown-trigger ${activeMenu === "info" || isInfoAktif ? "menu-aktif" : ""}`} 
            onClick={() => toggleMenu("info")}
          >
            Info
          </span>
          <ul className={`submenu ${activeMenu === "info" ? "show" : ""}`}>
            <li><NavLink to="/karir" onClick={() => setActiveMenu(null)}>Karir</NavLink></li>
            <li><NavLink to="/faq" onClick={() => setActiveMenu(null)}>FAQ</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setActiveMenu(null)}>Blog</NavLink></li>
          </ul>
        </li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      
        <button onClick={handleSearch}>Cari</button>
      </div>
    </nav>
  );
}

export default Navbar;
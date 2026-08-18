import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; 
import i18n from "../i18n";

function Navbar() {
  const [keyword, setKeyword] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const t = (key) => i18n.t(key);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  const isTentangAktif = ["/sertifikasi", "/visi-misi"].includes(location.pathname);
  const isInfoAktif = ["/karir", "/faq", "/blog"].includes(location.pathname);

  const isSectionActive = (hash) => {
    return location.pathname === "/" && location.hash === `#${hash}`;
  };

  const menuRoutes = [
    { keywords: ["beranda", "home", "utama","halaman utama","homepage","menu utama","menu","dashbord"], route: "/" },
    { keywords: ["produk", "product", "barang","produk kami","item","equipment","peralatan","sparepart","spare part","componen","daftar barang","produk list"], route: "/#produk" },
    { keywords: ["layanan", "service", "jasa","services","pelayanan","layanan kami","service kami","jasa kami","support","dukungan"], route: "/layanan" },
    { keywords: ["mitra", "partner", "kerjasama","mitra kami","kerja sama","partners","kolaborasi","rekan"], route: "/#mitra" },
    { keywords: ["kegiatan", "activity", "event", "acara","event","events","aktivitas","dokumentasi","agenda","kegiatan perusahaan","event perusahaan"], route: "/#kegiatan" },
    { keywords: ["sertifikasi", "sertifikat","penghargaan","sertifikasi perusahaan","dokumen","certifikasi","certifikasi"], route: "/sertifikasi" },
    { keywords: ["visi", "misi","visi misi","visison mission","vision","mission"], route: "/visi-misi" },
    { keywords: ["tentang", "about","tentang kami","about us","profil","company profile","company"], route: "/#tentang" },
    { keywords: ["karir", "career","job","jobs","lowongan","lowongan kerja","rekrutmen","recruitment","join us","bekerja"], route: "/karir" },
    { keywords: ["faq","help","bantuan","tanya jawab","question","informasi umum","bantuan"], route: "/faq" },
    { keywords: ["blog","tes","artikel","articles","berita","news","informasi","berita perusahaan","tips","update"], route: "/blog" },
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const scrollToBerandaSection = (sectionId) => {
    closeAllMenus();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      window.location.hash = `#${sectionId}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
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
        navigate(path + "#" + hash);

        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
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
    setActiveMenu(activeMenu === menuName ? null : menuName);
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
          <li>
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => (isActive && !location.hash ? "menu-aktif" : "")}
              onClick={closeAllMenus}
            >
              {t("beranda")}
            </NavLink>
          </li>

          <li>
            <span 
              className={`dropdown-trigger ${activeMenu === "tentang" || isTentangAktif ? "menu-aktif" : ""}`} 
              onClick={() => toggleMenu("tentang")}
            >
              {t("tentang_digi")}
            </span>
            <ul className={`submenu ${activeMenu === "tentang" ? "show" : ""}`}>
              <li><NavLink to="/sertifikasi" onClick={closeAllMenus}>{t("sertifikasi")}</NavLink></li>
              <li><NavLink to="/visi-misi" onClick={closeAllMenus}>{t("visi_misi")}</NavLink></li>
            </ul>
          </li>
          
          <li>
  <NavLink 
    to="/produklain" 
    className={({ isActive }) => (isActive ? "menu-aktif" : "")} 
    onClick={closeAllMenus}
  >
    {t("produk")}
  </NavLink>
</li>
          
          <li>
            <NavLink 
              to="/layanan" 
              className={({ isActive }) => (isActive ? "menu-aktif" : "")} 
              onClick={closeAllMenus}
            >
              {t("layanan")}
            </NavLink>
          </li>

          <li>
            <span 
              className={`dropdown-trigger ${isSectionActive("mitra") ? "menu-aktif" : ""}`} 
              onClick={() => scrollToBerandaSection("mitra")}
            >
              {t("mitra")}
            </span>
          </li>

          <li>
            <span 
              className={`dropdown-trigger ${isSectionActive("kegiatan") ? "menu-aktif" : ""}`} 
              onClick={() => scrollToBerandaSection("kegiatan")}
            >
              {t("kegiatan")}
            </span>
          </li>

          <li>
            <span 
              className={`dropdown-trigger ${activeMenu === "info" || isInfoAktif ? "menu-aktif" : ""}`} 
              onClick={() => toggleMenu("info")}
            >
              {t("info")}
            </span>
            <ul className={`submenu ${activeMenu === "info" ? "show" : ""}`}>
              <li><NavLink to="/karir" onClick={closeAllMenus}>{t("karir")}</NavLink></li>
              <li><NavLink to="/faq" onClick={closeAllMenus}>{t("faq")}</NavLink></li>
              <li><NavLink to="/blog" onClick={closeAllMenus}>{t("blog")}</NavLink></li>
            </ul>
          </li>
        </ul>

        <div className="nav-right-container">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder={t("cari_placeholder")}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">{t("cari_btn")}</button>
          </form>

          <div className="language-switcher">
            <button
              type="button"
              className={`lang-btn ${currentLang.startsWith("id") ? "active" : ""}`}
              onClick={() => changeLanguage("id")}
            >
{/**benra indonesia */}

              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circle">
      <circle cx="16" cy="16" r="16"/>
    </clipPath>
  </defs>

  <g clip-path="url(#circle)">
    <rect width="32" height="16" fill="#FF0000"/>
    <rect y="16" width="32" height="16" fill="#FFFFFF"/>
  </g>
</svg>
            </button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={`lang-btn ${currentLang.startsWith("en") ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
            >

{              /** bendera uk */
}             <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="ukCircle">
      <circle cx="16" cy="16" r="16"/>
    </clipPath>
  </defs>

  <g clip-path="url(#ukCircle)">
    <rect width="32" height="32" fill="#012169"/>

    <path d="M0 0 L4 0 L32 28 L32 32 L28 32 L0 4 Z" fill="#FFFFFF"/>
    <path d="M32 0 L28 0 L0 28 L0 32 L4 32 L32 4 Z" fill="#FFFFFF"/>

    <path d="M0 0 L2 0 L32 30 L32 32 L30 32 L0 2 Z" fill="#C8102E"/>
    <path d="M32 0 L30 0 L0 30 L0 32 L2 32 L32 2 Z" fill="#C8102E"/>

    <rect x="12" width="8" height="32" fill="#FFFFFF"/>
    <rect y="12" width="32" height="8" fill="#FFFFFF"/>

    <rect x="14" width="4" height="32" fill="#C8102E"/>
    <rect y="14" width="32" height="4" fill="#C8102E"/>
  </g>
</svg>
                
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
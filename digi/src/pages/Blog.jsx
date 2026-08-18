import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Footer from "./footer";
import i18n from "../i18n";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
function Blog() {

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
    <div className="blog-container">

      <div className="bagian-putih">
      
      <div className="blog-content-wrapper">
        
        <div className="blog-main">
          
          <h1 className="blog-page-title">BLOG</h1>
        
          <div className="blog-card">
            <img src="beranda.webp" alt="Blog 1" className="blog-img-main" />
            
            <div className="blog-meta">
              <span className="blog-category">{t("blog1")}</span>
              <h2 className="blog-title">{t("subtitle1")}</h2>
              <span className="blog-date">05 Mei 2025 | 10.00 Admin digi</span>
            </div>
            
            <p className="blog-excerpt">
              {t("isi_blog1")}
            </p>
          </div>
          
        </div>

        <div className="blog-sidebar">
         
          <div className="blog-card">
            <img src="Login_admin.webp" alt="Blog 2" className="blog-img-sub" />
            <div className="blog-meta">
              <span className="blog-category">{t("blog2")}</span>
              <h3 className="blog-title">{t("subtitle2")}</h3>
              <span className="blog-date">05 Mei 2025 | 10.00 Admin digi</span>
            </div>
            <p className="blog-excerpt">
              {t("isi_blog2")}
            </p>
          </div>

          <div className="blog-card">
            <img src="Blog_Teknik.webp" alt="Blog 3" className="blog-img-sub" />
            <div className="blog-meta">
              <span className="blog-category">{t("blog3")}</span>
              <h3 className="blog-title">{t("subtitle3")}</h3>
              <span className="blog-date">05 Mei 2025 | 10.00 Admin digi</span>
            </div>
            <p className="blog-excerpt">
              {t("isi_blog3")}
            </p>
          </div>

        </div>

      </div>
    
      <div className="blog-footer">
        <Link to="/" className="blog-btn-kembali">
          ❮ {t("btn_kembali")}
        </Link>
      </div>
</div>
      
    </div>

<section className="footer-blog">
  <Footer />
</section>

</>

  );
}

export default Blog;

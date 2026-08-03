import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Footer from "./footer";

function Blog() {
  return (
    <div className="blog-container">
      
      <div className="blog-content-wrapper">
        
        <div className="blog-main">
          
          <h1 className="blog-page-title">BLOG</h1>
          
          <div className="blog-card">
            <img src="beranda.webp" alt="Blog 1" className="blog-img-main" />
            
            <div className="blog-meta">
              <span className="blog-category">Blog</span>
              <h2 className="blog-title">Lorem ipsum</h2>
              <span className="blog-date">05 Mei 2025 | 10.00 Admin digi</span>
            </div>
            
            <p className="blog-excerpt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatibus at, repudiandae assumenda id quod, beatae illum qui nobis harum perferendis cumque adipisci fugit eius impedit quos sapiente consequuntur dolorum?
            </p>
          </div>
          
        </div>

        <div className="blog-sidebar">
         
          <div className="blog-card">
            <img src="Login_admin.webp" alt="Blog 2" className="blog-img-sub" />
            <div className="blog-meta">
              <span className="blog-category">Blog</span>
              <h3 className="blog-title">Lorem ipsum</h3>
              <span className="blog-date">05 Mei 2025 | 10.00 Admin digi</span>
            </div>
            <p className="blog-excerpt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem reprehenderit optio consequuntur dolorum laudantium suscipit id in quaerat officia nobis.
            </p>
          </div>

          <div className="blog-card">
            <img src="Blog_Teknik.webp" alt="Blog 3" className="blog-img-sub" />
            <div className="blog-meta">
              <span className="blog-category">Blog</span>
              <h3 className="blog-title">Lorem ipsum</h3>
              <span className="blog-date">05 Mei 2025 | 10.00 Admin digi</span>
            </div>
            <p className="blog-excerpt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem reprehenderit optio consequuntur dolorum laudantium suscipit id in quaerat officia nobis.
            </p>
          </div>

        </div>

      </div>
    
      <div className="blog-footer">
        <Link to="/" className="blog-btn-kembali">
          ❮ Kembali
        </Link>
      </div>

      <section className="section-footer">
        <Footer />
      </section>
    </div>
  );
}

export default Blog;

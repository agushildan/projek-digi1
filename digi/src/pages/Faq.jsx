import React from "react";
import { Link } from 'react-router-dom';
import "./Faq.css"
import Footer from "./footer";

const dataFaq = [
  {
    id: 1,
    pertanyaan:"ini adalah pertanyaan pertama",
    jawabana:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius dolor et dolor accumsan vulputate. Etiam a gravida enim. Praesent mollis, libero ac ultrices molestie, ante eros tincidunt justo, at rutrum massa metus ac ex. Suspendisse vel pretium diam. Aliquam sit amet porttitor felis. Ut at feugiat tellus, et condimentum mauris. Etiam finibus ante in leo interdum, viverra fermentum quam condimentum. Nam quis risus nec nisi tincidunt porta. Praesent dignissim purus massa, facilisis interdum ipsum euismod et."
  },
  {
    id:2,
    pertanyaan:"ini adalah pertanyaan kedaua",
    jawabana:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius dolor et dolor accumsan vulputate. Etiam a gravida enim. Praesent mollis, libero ac ultrices molestie, ante eros tincidunt justo, at rutrum massa metus ac ex. Suspendisse vel pretium diam. Aliquam sit amet porttitor felis. Ut at feugiat tellus, et condimentum mauris. Etiam finibus ante in leo interdum, viverra fermentum quam condimentum. Nam quis risus nec nisi tincidunt porta. Praesent dignissim purus massa, facilisis interdum ipsum euismod et."
  },
  {
    id:3,
    pertanyaan:"ini adalah pertanyaa ke tiga",
    jawabana:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius dolor et dolor accumsan vulputate. Etiam a gravida enim. Praesent mollis, libero ac ultrices molestie, ante eros tincidunt justo, at rutrum massa metus ac ex. Suspendisse vel pretium diam. Aliquam sit amet porttitor felis. Ut at feugiat tellus, et condimentum mauris. Etiam finibus ante in leo interdum, viverra fermentum quam condimentum. Nam quis risus nec nisi tincidunt porta. Praesent dignissim purus massa, facilisis interdum ipsum euismod et."
  },
  {
    id:4,
    pertanyaan:"ini adaldah pertanyaan ke empat",
    jawabana:"ini adalah jawaban dari pertanyaan ke empat"
  }
];

const Faq = () => {
  return(
    <div className="faq-page-wrapper">
      <h1 className="faq-title">FAQ</h1>

      <div className="faq-container">
    {dataFaq.map((item) => (
      <details key={item.id}>
        <summary>
          {item.pertanyaan}
         <svg className="ikon-panah" fill="none" stroke="#1a2634" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
        </summary>
        <div className="jawaban">
          <p>{item.jawabana}</p>
        </div>
      </details>
    ))}
      </div>

 <Link to="/" className="btn-kembali">
        <svg style={{ marginTop:"4.5px"}} width="18" height="18" fill="none" stroke="#1a2634" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
        Kembali
      </Link>
    </div>
  )
}

export default Faq;
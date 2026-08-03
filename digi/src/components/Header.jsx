import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


export default function Header({ title, fallbackPath = '/' }) {
  const navigate = useNavigate();

  const handleKembali = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <div className="header-section">
      <button className="btn-kembali" onClick={handleKembali}>
        <span className="arrow">&lt;</span> Kembali
      </button>
      <h1 className="page-title">{title}</h1>
    </div>
  );
}

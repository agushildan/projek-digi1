import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./kkontak.css";

function Kontak() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleKirimWA = (e) => {
    e.preventDefault();

    const phoneNumber = "6289519808548";

    const textMessage =
      `${t("judulwa")}\n\n` +
      `*${t("nama")}:* ${formData.nama}\n` +
      `*${t("email")}:* ${formData.email}\n` +
      `*${t("pesan")}:* ${formData.pesan}`;

    const encodedMessage = encodeURIComponent(textMessage);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="kontak-container">
      <h1 className="kontak-title">{t("judul_kontak")}</h1>

      <p className="kontak-subtitle">
        {t("subtitle_kontak")}<br />
        {t("subtitle_kontak2")}
      </p>

      <form className="kontak-form" onSubmit={handleKirimWA}>
        <div className="form-group">
          <label>{t("nama")}</label>
          <input
            type="text"
            name="nama"
            placeholder={t("isi_nama")}
            value={formData.nama}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t("email")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("isi_email")}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t("pesan")}</label>
          <textarea
            name="pesan"
            placeholder={t("isi_pesan")}
            rows="5"
            value={formData.pesan}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-submit">
          <button type="submit" className="btn-kirim">
            {t("kirim")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Kontak;
import "./visimisi.css"

function VisiMisi() {
  return (
    <section className="visimisi">

      <div className="card">

        <div className="judul visi-title">
          <h1>VISI</h1>
        </div>

        <div className="isi">

          <span className="clip">
            <img src="icons8-clip-50(1).png" alt="clip" />
          </span>
  
          <p>
            Menjadi perusahaan yang inovatif, berperforma tinggi,
            independen, profesional, berkomitmen dan bertanggung jawab
            dalam bidang teknologi, industri dan teknik.
          </p>

        </div>

      </div>

      <div className="card">

        <div className="judul misi-title">
          <h1>MISI</h1>
        </div>

        <div className="isi">

          <span className="clip merah">
                        <img src="icons8-clip-50(2).png" alt="clip" />

          </span>

          <ul>
            <li>memberikan solusi dan produk terbaik sesuai kebutuhan </li>
            <li>menjalin kerjasama dan hubungan baik  dengan mitra usaha dan mitra kerja</li>
            <li>Mengembangkan sumber daya manusia,fasilitas dan proses yang berkualitas tinggii </li>
            <li>memperhatikan  kesehatan ,keselamatan kerja dan perlindungan lingkungan</li>
            <li>mmenghasilkan produk dengan kualitas yang bermutu</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default VisiMisi;
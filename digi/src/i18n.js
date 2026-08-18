import i18n from 'i18next';
import { Subtitles } from 'lucide-react';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      /* NAVBAR */
      beranda: "Beranda",
      tentang_digi: "Tentang Digi",
      sertifikasi: "Sertifikasi",
      visi_misi: "Visi Misi",
      produk: "Produk",
      layanan: "Layanan",
      mitra: "Mitra",
      kegiatan: "Kegiatan",
      info: "Info",
      karir: "Karir",
      faq: "FAQ",
      blog: "Blog",
      cari_placeholder: "Cari menu, info, layanan...",
      cari_btn: "Cari",

      /* ISI BERANDA */
      hero_title_1: "WE MAKE",
      hero_title_2: "YOUR BUSINESS",
      hero_title_3: "BETTER THAN OTHER",
      hero_desc_1: "PT Digi Tekno Indonesia adalah perusahaan yang bergerak di bidang konsultan IT, jasa service mesin manufaktur, pengadaan sparepart dan material.",
      hero_desc_2: "kami berkomitmen memberikan pelayanan dan kualitas produk yang terbaik untuk Anda.",
      contact_us: "Contact Us",

      /* tentang */
      hero_title_4: "Tentang",
      isi_1: "PT Digi Tekno Indonesia didirikan pada tahun 2022 yang berlokasi di Summarecon Gedebage, Bandung Jawa Barat",
      isi_2: "PT Digi Tekno Indonesia terdiri dari tim yang inovatif, berdedikasi, dan cerdas untuk membantu bisnis membuat operasi lebih mudah dan lebih cepat, sehingga meningkatkan profitabilitas.",
      isi_3: "Kami fokus pada penyediaan keunggulan kompetitif bagi pelanggan dengan layanan, teknologi, dan dapat mengembangkan bisnis dengan sumber daya yang optimal.",

      /* visi misi */
      judul_visi: "VISI",
      judul_mis: "Misi",
      isi_visi: "Menjadi perusahaan yang inovatif, berperforma tinggi, independen, profesional, berkomitmen dan bertanggung jawab dalam bidang teknologi, industri dan teknik.",
      isi_misi1: "memberikan solusi dan produk terbaik sesuai kebutuhan",
      isi_misi2: "menjalin kerjasama dan hubungan baik dengan mitra usaha dan mitra kerja",
      isi_misi3: "Mengembangkan sumber daya manusia, fasilitas dan proses yang berkualitas tinggi",
      isi_misi4: "memperhatikan kesehatan, keselamatan kerja dan perlindungan lingkungan",
      isi_misi5: "menghasilkan produk dengan kualitas yang bermutu",

      /* produk */
      judul_produk: "Produk",
      produk1: "Produk dan jasa PT Digi Tekno Indonesia dapat digunakan di berbagai macam industri dan bisnis.",
      produk2: "PT Digi Tekno Indonesia dapat menyesuaikan produk kami sesuai dengan kebutuhan anda.",
      produk3: "Kami juga berkomitmen untuk menyediakan layanan dan produk yang efektif, hemat biaya dan cepat.",
      produk4: "PT Digi Tekno Indonesia terdiri dari tim yang berdedikasi untuk memastikan semua produk dan jasa yang diberikan memenuhi kebutuhan spesifik anda.",
      produk5: "Kami pun berfokus memberikan layanan dan solusi di bisnis anda untuk meningkatkan kinerja bisnis.",
      produk_lainnya: "Lihat produk lainnya disini",

      /* layanan */
      judul_layanan:"layanan",
      layanan1:"Software Development",
      isi_layanan1:"Mengembangkan aplikasi perangkat lunak dengan teknologi informasi berbasis web dan mobile apliaksi",
      layanan2:"Service and Maintanance",
      isi_layanan2:"Memberikan jasa perbaikan dan pemeliharaan baik untuk software, Hardware ataupun infrastuktur",
      layanan3:"IT Equipment/Hardware & Networking",
      isi_layanan3:"Memasok barang dan suka cadang barang IT untuk bisnis dan produk anda dengan misi kepuasan pelanggan dan pengiriman cepat.Pengadaan barang atau perangat lunak dan infrastuktur",
      layanan4:"IT Consultan and Problem  Solving",
      isi_layanan4:"Memberikan solusi masukan dan mengevaluasi sistem IT di perusahaan anda untuk meningkatkan kinerja perusahaan",
      layanan5:"Procurement of Engine and Turbine Components and Spare Part",
      isi_layanan5:"Kami siap membantu dalam pengadaan komponen industri baik berupa komponen yanng sudah jadi ataupun masih berupa bahan baku atau masih berupa material adapun bahan material dapat berupa bahan dari dalam negeri atau luar negeri",
      layanan6:"Installation Electrical and Automatic Equipment",
      isi_layanan6:"Dengan semakin berkembangnya teknologi kelistrikan dan otomasi, Maka kami siap membantu semua pengadaan produk-produk otomasi dan IoT(Internet of Things)",

      /**kegiatan */
judul_kegiatan:"Kegiatan",
isi_kegiatan:"PT Digi Tekno Indonesia secara aktif menyelenggarakan berbagai kegiatan untuk mendukung pengembangan teknologi, meningkatkan kompetensi tim, serta memperkuat kerja sama dengan mitra dan pelanggan. Melalui pelatihan, seminar, kunjungan, dan kolaborasi, kami terus berinovasi dalam menghadirkan solusi digital yang berkualitas serta memberikan dampak positif bagi masyarakat.",
btn_kegiatan:"Lihat Kegiatan Lainnya Disini",
btn_kembali:"Kembali",

      /**mitra */
      judul_mitra:"Mitra Kami",

      /* kontak */
      judul_kontak: "Pesan",
      subtitle_kontak: "Kami akan menghubungi Anda untuk mengatur jadwal",
      subtitle_kontak2: "konsultasi awal secara gratis, tanpa persyaratan.",
      nama: "Nama",
      isi_nama: "Masukan nama anda",
      email: "Email",
      isi_email: "Masukan email anda",
      pesan: "Pesan",
      isi_pesan: "Masukan pesan anda",
      kirim: "Kirim",
      judulwa:"Halo Admin,ada pesan baru dari website:",


      /* footer */
      layanan_digi:"Layanan Digi",
      kontak_kami:"Kontak Kami",

      /**sertifikasi */
sertifikasi:"sertifikasi",

/* detailproduk */
detail_produk:"Detail Produk",
lama_pengerjaan:"Lama Pengerjaan",
keunggulan:"Keunggulan Mis",
dengan_mis:"Denga Mis",
      tanpa_mis:"Tanpa Mis",
      btn_beli:"Beli Sekarang",
      isi_waktu:"1 bulan",
      isi_keunggulan:"produk yang di hasilkan berkualitas tinggi dan waktu pengerjaan cepat",
      mis_digi:"Management Information System (DIGI MIS) adalah solusi digital yang dirancang untuk membantu perusahaan mengelola, memantau, dan menganalisis data operasional secara terintegrasi. Sistem ini menyediakan informasi yang akurat dan real-time sehingga memudahkan proses pengambilan keputusan, meningkatkan efisiensi kerja, serta mendukung pertumbuhan bisnis. Dengan fitur pelaporan otomatis, dashboard interaktif, dan manajemen data yang terpusat, DIGI MIS membantu perusahaan bekerja lebih cepat, efektif, dan terorganisir.",

      /**karir */
halo:"Hallo!",
mulai:"Mulai Karir anda",
anda:"Anda",
di:"Di",
      subjudul:"Kami sedang membuka lowongan di bagian",
      isi_marketing:"kami membuka lowongan di bagian marketing",
      isi_purchasing:"kami membuka lowongan di bagian purchasing",
      btn_lamar:"Lamar Sekarang",

      /*faq */
      pertanyaan1:"Layanan apa saja yang disediakan oleh PT Digi Tekno Indonesia?",
      jawaban1:"Kami menyediakan layanan pengembangan sistem informasi, ERP, aplikasi kustom, serta solusi teknologi yang disesuaikan dengan kebutuhan bisnis.",
      pertanyaan2:"Bagaimana cara mengajukan konsultasi atau penawaran?",
      jawaban2:"Anda dapat menghubungi kami melalui website, email, atau telepon. Tim kami akan membantu memahami kebutuhan Anda dan memberikan solusi terbaik.",
      pertanyaan3:"Apakah solusi yang ditawarkan dapat disesuaikan dengan kebutuhan bisnis?",
      jawaban3:"Ya. Kami menyediakan solusi yang fleksibel dan dapat disesuaikan dengan kebutuhan serta proses bisnis setiap perusahaan.",
      pertanyaan4:"Apakah tersedia layanan dukungan teknis setelah implementasi?",
jawaban4:"Ya. Kami menyediakan layanan dukungan teknis, pemeliharaan sistem, dan pembaruan untuk memastikan sistem berjalan dengan optimal.",

/* blog */
blog1:"Teknologi",
isi_blog1:"Teknologi digital membantu perusahaan bekerja lebih cepat, efisien, dan siap menghadapi perkembangan zaman.",
blog2:"Inovasi",
isi_blog2:"Solusi IT yang sesuai mampu meningkatkan produktivitas, keamanan data, dan kualitas layanan perusahaan.",
blog3:"Pengembangan",
isi_blog3:"Inovasi digital menjadi langkah penting untuk mendukung pertumbuhan bisnis yang berkelanjutan.",
subtitle1:"Transformasi Digital untuk Bisnis",
subtitle2:"Solusi IT yang Tepat",
subtitle3:"Inovasi untuk Masa Depan",

/* layanan digi software development */
layanana_judul1:"Software Development",
subjudul1:"mengembangkan aplikasi perangkat lunak dengan teknologi informasi berbasis web dan mobile aplikasi",
isi_layanann1:"Software Development adalah layanan pengembangan perangkat lunak yang dirancang untuk memenuhi kebutuhan bisnis secara spesifik. Mulai dari tahap analisis, perancangan, pengembangan, pengujian, hingga implementasi, setiap solusi dibuat dengan teknologi modern untuk menghasilkan aplikasi yang aman, andal, dan mudah digunakan. Kami membantu perusahaan membangun sistem yang meningkatkan efisiensi operasional, produktivitas, dan transformasi digital.",
isi_paragraft2:"Selain mengembangkan aplikasi, kami juga menyediakan layanan pemeliharaan, pembaruan sistem, dan dukungan teknis untuk memastikan perangkat lunak tetap berjalan optimal seiring perkembangan kebutuhan bisnis. Dengan pendekatan yang fleksibel dan berorientasi pada kualitas, kami menghadirkan solusi yang mudah dikembangkan, terintegrasi dengan sistem yang sudah ada, serta mampu memberikan nilai jangka panjang bagi perusahaan.",

/* service and maintanannce */
subjudul2:"Memberikan jasa perbaikan dan pemeliharaan baik untuk software,hardware ataupun infrastuktur",
isi_layanann2:"Service & Maintenance adalah layanan yang memastikan sistem, aplikasi, maupun perangkat teknologi informasi tetap berjalan secara optimal, aman, dan stabil. Kami menyediakan pemeliharaan rutin, perbaikan apabila terjadi kendala, pembaruan sistem, serta monitoring untuk meminimalkan risiko gangguan operasional dan menjaga performa layanan.",
isi_paragraft22:"Dengan dukungan teknis yang responsif dan tenaga profesional yang berpengalaman, kami membantu perusahaan mengatasi permasalahan dengan cepat serta memastikan sistem selalu mengikuti perkembangan teknologi dan kebutuhan bisnis. Layanan kami dirancang untuk meningkatkan keandalan, memperpanjang umur penggunaan sistem, dan mendukung kelangsungan operasional perusahaan.",
    
/**IT Equipment/Hardware & Networking */
subjudul3:"Memasok barang dan suku cadang barang IT untuk bisnis dan produk anda dengan misi kepuasan pelanggan dan pengiriman cepat.Pengadaan barang atau perangkat dan infrastuktur",
isi_layanann3:"IT Equipment, Hardware & Networking adalah layanan penyediaan, instalasi, dan pengelolaan perangkat keras serta infrastruktur jaringan yang mendukung kebutuhan operasional perusahaan. Kami menyediakan berbagai solusi mulai dari komputer, server, printer, perangkat jaringan, hingga sistem konektivitas yang dirancang untuk memberikan performa tinggi, keamanan, dan keandalan dalam aktivitas bisnis sehari-hari.",
isi_paragraft33:"Selain penyediaan perangkat, kami juga menawarkan layanan konfigurasi, implementasi, pemeliharaan, serta troubleshooting untuk memastikan seluruh infrastruktur IT berfungsi secara optimal. Dengan dukungan tenaga ahli yang berpengalaman, kami membantu perusahaan membangun jaringan yang stabil, aman, dan mudah dikembangkan sesuai dengan pertumbuhan bisnis di masa depan.",

/**it consultant dan problem solving */
subjudul4:"Memberikan solusi dan masukan dan mengevaluasi sistem IT di perusahaan anda untuk meningkatkan  kinerja perusahaan.",
isi_layanann4:"IT Consultant & Problem Solving adalah layanan konsultasi teknologi informasi yang membantu perusahaan menemukan solusi terbaik untuk berbagai tantangan bisnis dan operasional. Kami melakukan analisis terhadap kebutuhan, memberikan rekomendasi strategi, serta merancang solusi IT yang efektif untuk meningkatkan efisiensi, produktivitas, dan keamanan sistem sesuai dengan tujuan perusahaan.",
isi_paragraft44:"Selain memberikan konsultasi, kami juga membantu menyelesaikan berbagai permasalahan teknis, mulai dari troubleshooting sistem, optimasi infrastruktur, peningkatan performa aplikasi, hingga implementasi teknologi baru. Dengan pengalaman dan pendekatan yang berorientasi pada solusi, kami memastikan setiap tantangan dapat ditangani secara cepat, tepat, dan berkelanjutan.",

/**procurement */
subjudul5:"Kami siap membantu dalam pengadaan komponen industri baik berupa komppnen yang sudah jadi ataupun masih berupa bahan baku atau material. Adapun bahan material dapat berupa bahan dari dalam negeri atau luar negeri",
isi_layanann5:"Procurement of Engine and Turbine Components and Spare Parts adalah layanan pengadaan komponen mesin, turbin, dan suku cadang berkualitas tinggi untuk memenuhi kebutuhan industri. Kami menyediakan berbagai jenis komponen dari produsen terpercaya dengan standar kualitas yang tinggi, sehingga mampu mendukung kinerja peralatan secara optimal serta memastikan keandalan operasional dalam jangka panjang.",
isi_paragraft55:"Selain pengadaan, kami juga memberikan layanan konsultasi teknis, pemilihan produk, serta dukungan logistik untuk memastikan setiap komponen sesuai dengan spesifikasi dan kebutuhan pelanggan. Dengan proses pengadaan yang cepat, efisien, dan transparan, kami membantu perusahaan meminimalkan waktu henti (downtime) serta menjaga kelancaran operasional di berbagai sektor industri.",

/**instalation electrical and automatic equipment */
subjudul6:"Dengan semakin berkembangnya teknologi kelistrikan dan otomasi maka kami siap membantu semua pengadaan produk-produk otomasi dan IoT (Interet of Things).",
isi_layanann6:"PT Digi Tekno indonesia bergerak di bidang pemeliharaan, produksi,dan perbaikan, dengan menyediakan berbagai produk dan layanan teknis yang andal dan berkualitas. PT Digi Tekno indonesia memproduksi komponen seperti febrikasi chain untuk kebutuhan industri, serta menyediakan layanan instalasi sistem seperti cooling tower yang mendukung efisiensi operasional pembangkit dan fasilitas industri lainnya.",
isi_paragraft66:"Dalam bidang perawatan dan perbaikan, kami ahli dalama overhaul pompa BFP dan rewinding motor, memastikan peralatan pelanggan kami selalu dalam kondisi optial. Selain itu kami juga menyediakan berbagai tools dan alat ukur presisi sebagai pendukung utama dalam proses instalasi, monitoring dan maintenance.",

/**mechanical electrical */
subjudul7:"Layanan Mechanical Electrical dari PT Digi Tekno indonesia mencakup instalasi,perawatan, hingga troubleshooting sistem mekanik dan electrical pada berbagai fasilitas industri dan bagunan komersial",
isi_layanann7:"PT. Digi Tekno Indonesia bergerak di bidang pemeliharaan, produksi, dan perbaikan, dengan menyediakan berbagai produk dan layanan teknis yang andal dan berkualitas. PT. Digi Tekno Indonesia memproduksi komponen seperti fabrikasi chain untuk kebutuhan industri, serta menyediakan layanan instalasi sistem seperti cooling tower yang mendukung efisiensi operasional pembangkit dan fasilitas industri lainnya.",
isi_paragraft77:"Dalam bidang perawatan dan perbaikan, kami ahli dalam overhaul pompa BFP dan rewinding motor, memastikan peralatan pelanggan kami selalu dalam kondisi optimal. Selain itu, kami juga menyediakan berbagai tools dan alat ukur presisi sebagai pendukung utama dalam proses instalasi, monitoring, dan maintenance.",

/**repair sparepart conveyor */
subjudul8:"Layanan berfokus pada perbaikan dan rekomendasi komponen conveyor yang rusak atau aus akibat penggunaan industri yang intensif kami menangani berbagai jenis sistem conveyor, termasuk belt,roller,chain dan screw conveyor",
isi_layanann8:"PT Digi Tekno indonesia bergerak di bidang pemeliharaan, produksi,dan perbaikan, dengan menyediakan berbagai produk dan layanan teknis yang andal dan berkualitas. PT Digi Tekno indonesia memproduksi komponen seperti febrikasi chain untuk kebutuhan industri, serta menyediakan layanan instalasi sistem seperti cooling tower yang mendukung efisiensi operasional pembangkit dan fasilitas industri lainnya.",
isi_paragraft88:"Dalam bidang perawatan dan perbaikan, kami ahli dalama overhaul pompa BFP dan rewinding motor, memastikan peralatan pelanggan kami selalu dalam kondisi optial. Selain itu kami juga menyediakan berbagai tools dan alat ukur presisi sebagai pendukung utama dalam proses instalasi, monitoring dan maintenance.",


/**General supplier */
subjudul9:"kami menjembatani kebutuhan klien tarhadap Mesin Tools Belt PC, Server dll dengan kualitas terbaik dan waktu pengadaan yang efisien berasal dari lokal maupun import.Dengan jaringan mitra yang luas, kami mampu menyediakan solusi pengadaan yang sesuai dengan spesifikasi yang di butuhkan ",
isi_layanann9:"PT Digi Tekno Indonesia bergerak di bidang pemeliharaan produksi dan perbaikan dengan menyediakan berbagai produk dan layanan teknis dan andal yang berkualaitas PT Digi Tekno Indonesia memproduksi komponen seperti fablikasi chaim untuk kebutuhan industri serta menyediakan layanan instalasi siste seperti cooling tower yang mendukung efisiensi operasional pembangkit dan fasilitas industri lainnya.",
isi_paragraft99:"Dalam bidang perawatan dan perbaikan kami ahli dalam overhaul pompa BFP dan rewinding motor,memastikan peralatan pelanggan kami selalu dalam kondisi optimal. selain itu, kami juga menyediakan berbagai tools dan alat ukur presisi sebagai pendukung utama dalam proses,instalasi monitoring dan maintenence",
}

  },
  en: {
    translation: {
      /* NAVBAR */
      beranda: "Home",
      tentang_digi: "About Digi",
      sertifikasi: "Certifications",
      visi_misi: "Vision & Mission",
      produk: "Products",
      layanan: "Services",
      mitra: "Partners",
      kegiatan: "Activities",
      info: "Info",
      karir: "Careers",
      faq: "FAQ",
      blog: "Blog",
      cari_placeholder: "Search menu, info, services...",
      cari_btn: "Search",

      /* ISI BERANDA */
      hero_title_1: "WE MAKE",
      hero_title_2: "YOUR BUSINESS",
      hero_title_3: "BETTER THAN OTHERS",
      hero_desc_1: "PT Digi Tekno Indonesia is a company engaged in IT consulting,manufacturing machine services, spare parts and materials procurement.",
      hero_desc_2: "We are committed to providing the best service and product quality for you.",
      contact_us: "Contact Us",

      /* tentang */
      hero_title_4: "About",
      isi_1: "PT Digi Tekno Indonesia was established in 2022 and is located in Summarecon Gedebage, Bandung, West Java.",
      isi_2: "PT Digi Tekno Indonesia comprises an innovative, dedicated, and intelligent team that helps businesses make operations easier and faster, thereby increasing profitability.",
      isi_3: "We focus on providing a competitive advantage to our customers through services and technology, enabling them to grow their businesses using optimal resources.",

      /* visi dan misi */
      judul_visi: "VISION",
      judul_mis: "MISSION",
      isi_visi: "To become an innovative, high performing, independent, professional, committed, and responsible company in the fields of technology, industry, and engineering.",
      isi_misi1: "providing the best solutions and products tailored to needs",
      isi_misi2: "establishing cooperation and good relationships with business partners and work partners",
      isi_misi3: "Develop high quality human resources, facilities and processes",
      isi_misi4: "paying attention to occupational health and safety and environmental protection",
      isi_misi5: "produce high quality products",

      /* produk */
      judul_produk: "Products",
      produk1: "PT Digi Tekno Indonesia's products and services can be used across a wide range of industries and businesses.",
      produk2: "PT Digi Tekno Indonesia can customize our products to meet your needs.",
      produk3: "We are also committed to providing effective, cost-efficient, and fast services and products.",
      produk4: "PT Digi Tekno Indonesia consists of a team dedicated to ensuring that all products and services provided meet your specific needs.",
      produk5: "We focus on providing services and solutions for your business to enhance business performance.",
      produk_lainnya: "See other products here",

      /**layanan */
     judul_layanan:"Service",
     layanan1:"Software Development",
     isi_layanan1:"Developing software applications using web-based and mobile information technologies.",
     layanan2:"Service and Maintanance",
     isi_layanan2:"Providing repair and maintenance services for software, hardware, or infrastructure.",
     layanan3:"IT Equipment/Hardware & Networking",
     isi_layanan3:"Supplying IT goods and spare parts for your business and products, driven by a commitment to customer satisfaction and fast delivery. Procurement of equipment, devices, and infrastructure.",
     layanan4:"IT Consultant & Problem Solving",
     isi_layanan4:"Providing input solutions and evaluating IT systems within your company to enhance corporate performance.",
     layanan5:"Procurement of Enggine and Turbine Components and Spare Part",
     isi_layanan5:"We are ready to assist with the procurement of industrial components, whether in the form of finished parts, raw materials, or base materials. These materials may be sourced from either domestic or international suppliers.",
     layanan6:"Installlation Electrical and Automation Equipment",
isi_layanan6:"With the rapid advancement of electrical and automation technologies, we are ready to support all your automation and IoT (Internet of Things) product procurement needs.",      
      /*kegiataan */
      judul_kegiatan:"Activity",
      isi_kegiatan:"PT Digi Tekno Indonesia actively organizes various activities to support technological development, enhance team competence, and strengthen partnerships with clients and customers. Through training, seminars, site visits, and collaborations, we continue to innovate by delivering high-quality digital solutions and creating a positive impact on society.",
      btn_kegiatan:"See Other Activities Here",
      btn_kembali:"Return",

      /*mitra */
      judul_mitra:"Our Partners",

      /* kontak */
      judul_kontak: "Contact",
      subtitle_kontak: "We will contact you to schedule an appointment.",
      subtitle_kontak2: "Free initial consultation, with no obligations.",
      nama: "Name",
      isi_nama: "Enter your name",
      email: "E-mail",
      isi_email: "Enter your email",
      pesan: "Message",
      isi_pesan: "Enter message",
      kirim: "Send",
      judulwa:"Hello Admin, you have a new message from the website.",

      /* footer */
     layanan_digi:"Digi Services",
     kontak_kami:"Contact us",

     /**sertifikasi */
     sertifikasi:"certification",

     /* produk lain */
     detail_produk:"Product Details",
     lama_pengerjaan:"Work duration",
     isi_waktu:"1 month",
     keunggulan:"Advantages of MIS",
     isi_keunggulan:"The resulting products are of high quality, and the turnaround time is fast.", 
dengan_mis:"With Ms",
tanpa_mis:"Without Misses",
btn_beli:"Buy Now",
mis_digi:"Management Information System (DIGI MIS) is a digital solution designed to help businesses manage, monitor, and analyze operational data through a centralized platform. The system provides accurate, real-time information to support informed decision-making, improve operational efficiency, and drive business growth. Featuring automated reporting, interactive dashboards, and centralized data management, DIGI MIS enables organizations to work faster, more effectively, and with greater accuracy.",

/**layanan */
judul_layanan:"Service",

/**karir */
halo:"Hallo!",
mulai:"Start Your Career",
anda:"You",
di:"at",
subjudul:"We are currently hiring for the department.",
isi_marketing:"We have a job opening in the marketing department.",
isi_purchasing:"We have a job opening in the purchasing department.",
btn_lamar:"Apply Now",

/*faq */
pertanyaan1:"What services does Digi Tekno Indonesia provide?",
pertanyaan2:"How can I request a consultation or quotation?",
pertanyaan3:"Can your solutions be customized to my business needs?",
pertanyaan4:"Do you provide technical support after implementation?",
jawaban1:"We provide digital solutions including Management Information Systems (MIS), ERP systems, custom software development, and IT consulting services.",
jawaban2:"You can contact us through our website, email, or phone. Our team will discuss your requirements and provide the best solution.",
jawaban3:"Yes. We develop flexible and scalable solutions that can be tailored to meet your specific business requirements.",
jawaban4:"Yes. We offer ongoing technical support, maintenance, and system updates to ensure your solution operates smoothly.",

/* blog */
blog1:"Technology",
isi_blog1:"Digital technology helps businesses work faster, improve efficiency, and stay competitive in a changing world.",
blog2:"Innovation",
isi_blog2:"The right IT solutions enhance productivity, strengthen data security, and improve business performance.",
blog3:"Development",
isi_blog3:"Continuous digital innovation helps businesses grow, adapt to change, and achieve long-term success.",
subtitle1:"Digital Transformation for Business",
subtitle2:"The Right IT Solutions",
subtitle3:"Innovation for the Future",

/* layanan digi software development */
layanana_judul1:"Software Development",
subjudul1:"developing software applications using web-based and mobile information technologies",
isi_layanann1:"Software Development is a custom software development service designed to meet the unique needs of businesses. From analysis and design to development, testing, and deployment, every solution is built using modern technologies to ensure security, reliability, and ease of use. We help organizations create applications that improve operational efficiency, enhance productivity, and support digital transformation.",
isi_paragraft2:"In addition to developing applications, we provide maintenance, system upgrades, and technical support to ensure software continues to perform optimally as business needs evolve. With a flexible, quality-driven approach, we deliver scalable solutions that integrate seamlessly with existing systems and provide long-term value for organizations.",

/**serfice and maintanance */
subjudul2:"Providing repair and maintenance services for software, hardware, or infrastructure.",
isi_layanann2:"Service & Maintenance is a service designed to ensure that IT systems, applications, and technology infrastructure operate efficiently, securely, and reliably. We provide routine maintenance, issue resolution, system updates, and continuous monitoring to minimize operational disruptions and maintain optimal performance.",
isi_paragraft22:"With responsive technical support and experienced professionals, we help businesses resolve issues quickly while ensuring their systems remain up to date with evolving technologies and business requirements. Our services are designed to improve system reliability, extend operational lifespan, and support uninterrupted business operations.",

/**it equipment hardware and networking */
subjudul3:"Supplying IT goods and spare parts for your business and products, driven by a commitment to customer satisfaction and fast delivery. Procurement of equipment, devices, and infrastructure.",
isi_layanann3:"IT Equipment, Hardware & Networking is a service that provides the supply, installation, and management of hardware and network infrastructure to support business operations. We offer a wide range of solutions, including computers, servers, printers, networking devices, and connectivity systems, all designed to deliver high performance, security, and reliability for daily business activities.",
isi_paragraft33:"In addition to supplying equipment, we provide configuration, implementation, maintenance, and troubleshooting services to ensure your IT infrastructure operates at its best. With the support of experienced professionals, we help organizations build stable, secure, and scalable network environments that can grow alongside their business needs.",

/**it consultand and problem solving */
subjudul4:"Providing solutions and recommendations, and implementing IT systems in your company to enhance corporate performance.",
isi_layanann4:"IT Consultant & Problem Solving is a professional IT consulting service that helps organizations identify the best technology solutions for their business and operational challenges. We analyze your requirements, provide strategic recommendations, and design effective IT solutions to improve efficiency, productivity, and system security while supporting your business objectives.",
isi_paragraft44:"In addition to consulting, we assist with resolving technical issues such as system troubleshooting, infrastructure optimization, application performance improvement, and the implementation of new technologies. With our experience and solution-oriented approach, we ensure that every challenge is addressed efficiently, accurately, and with long-term business value.",

/**procurement of enggine and turbine components and spare part */
subjudul5:"We are ready to assist with the procurement of industrial components, whether in the form of finished parts or raw materials; these materials may be sourced domestically or internationally.",
isi_layanann5:"Procurement of Engine and Turbine Components and Spare Parts is a procurement service that supplies high quality engine components, turbine parts, and spare parts for various industrial applications. We source products from trusted manufacturers to ensure reliability, durability, and optimal equipment performance, helping businesses maintain efficient and uninterrupted operations.",
isi_paragraft55:"In addition to procurement, we provide technical consultation, product selection assistance, and logistics support to ensure every component meets the required specifications and operational needs. Through a fast, efficient, and transparent procurement process, we help organizations reduce downtime, improve equipment reliability, and support long-term operational success.",

/**installation electrical  and automatic equipment */
subjudul6:"With the continuous advancement of electrical and automation technologies, we are ready to assist with the procurement of all automation and IoT (Internet of Things) products.",
isi_layanann6:"PT Digi Tekno Indonesia operates in the fields of maintenance, production, and repair, providing a range of reliable, high-quality products and technical services. The company manufactures components—such as industrial-grade chains—and offers system installation services, including cooling towers that enhance operational efficiency for power plants and other industrial facilities.",
isi_paragraft66:"With the rapid advancement of electrical and automation technologies, we are ready to support all your automation and IoT (Internet of Things) product procurement needs.",

/**mechanical electrical */
subjudul7:"PT Digi Tekno Indonesia’s mechanical and electrical services encompass everything from installation and maintenance to troubleshooting for mechanical and electrical systems across various industrial facilities and commercial buildings.",
isi_layanann7:"PT. Digi Tekno Indonesia operates in the fields of maintenance, production, and repair, providing a range of reliable, high quality products and technical services. The company manufactures components such as industrial chain fabrications and offers system installation services, including cooling towers that support operational efficiency for power plants and other industrial facilities.",
isi_paragraft77:"In the realm of maintenance and repair, we specialize in BFP overhauls and motor rewinding, ensuring our customers' equipment remains in optimal condition. Additionally, we supply a wide range of tools and precision measuring instruments to support installation, monitoring, and maintenance processes.",

/**repair sparepart conveyor */
subjudul8:"Our service focuses on the repair and recommendation of components that are damaged or worn due to intensive industrial use. We handle various types of conveyor systems, including belt, roller, chain, and screw conveyors.",
isi_layanann8:"PT Digi Tekno Indonesia operates in the fields of maintenance, production, and repair, providing a range of reliable, high-quality products and technical services. The company manufactures components—such as industrial-grade chains—and offers system installation services, including cooling towers that enhance operational efficiency for power plants and other industrial facilities.",
isi_paragraft88:"In the realm of maintenance and repair, we specialize in BFP overhauls and motor rewinding, ensuring our customers' equipment remains in optimal condition. Additionally, we supply a wide range of tools and precision measuring instruments to support installation, monitoring, and maintenance processes.",

/**general supplier */
subjudul9:"We bridge our clients' needs for machinery, tools, belts, PCs, servers, and more sourcing both locally and internationally by delivering top quality and efficient procurement timelines. Backed by an extensive partner network, we are able to provide procurement solutions tailored to specific requirements.",
isi_layanann9:"PT Digi Tekno Indonesia operates in the field of production maintenance and repair, providing a range of high-quality, reliable technical products and services. The company manufactures components such as fabricated chains for industrial needs and offers system installation services, including cooling towers, to support the operational efficiency of power plants and other industrial facilities.",
isi_paragraft99:"In the field of maintenance and repair, we specialize in BFP overhauls and motor rewinding, ensuring our customers' equipment remains in optimal condition. Additionally, we supply a wide range of tools and precision measuring instruments to support installation, monitoring, and maintenance processes.",


    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id',
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
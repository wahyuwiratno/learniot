import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index.js";
import NavbarComponents from "../components/NavbarComponents.jsx"; //
import FaqComponents from "../components/FaqComponents.jsx"; //
import FooterComponents from "../components/FooterComponents.jsx"; //
import AOS from "aos";

const KelasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
    
    // Logic Animasi Cepat: Duration dikurangi drastis menjadi 400ms (0.4 detik)
    AOS.init({ 
      duration: 400, 
      once: true, // Animasi hanya jalan sekali saat load pertama
      easing: 'ease-out'
    });
    AOS.refresh();
  }, []);

  return (
    <div className="kelas-page bg-white min-vh-100">
      <NavbarComponents />
      
      <section className="all-kelas" style={{ paddingTop: '130px', paddingBottom: '80px' }}>
        <Container>
            <Row className="mb-5">
                <Col data-aos="fade-up">
                    <h1 className="fw-bold text-center mb-2" style={{ color: '#2136a9', fontSize: '2.5rem' }}>
                      Semua Kelas
                    </h1>
                    <p className="text-center text-muted mx-auto" style={{ maxWidth: '600px' }}>
                      Temukan seluruh kurikulum IoT terlengkap untuk membangun masa depan teknologi Anda.
                    </p>
                </Col>
            </Row>

            <Row className="gy-4">
                {semuaKelas.map((kelas) => (
                    <Col key={kelas.id} lg={4} md={6}>
                        <div 
                          className="card-kelas-box bg-white p-3 rounded-4 shadow-sm border" 
                          data-aos="fade-up" 
                          // Logic: Menghapus atau mengecilkan data-aos-delay agar semua muncul bersamaan
                          data-aos-delay="50" 
                        >
                            <img 
                                src={kelas.image} 
                                alt={kelas.title} 
                                className="w-100 mb-3 rounded-top-4" 
                                style={{ height: '220px', objectFit: 'cover' }} 
                            />
                            <div className="star mb-2 px-2 text-warning">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <h5 className="mb-4 px-2 fw-bold" style={{ minHeight: '50px' }}>
                              {kelas.title}
                            </h5>
                            <div className="d-flex justify-content-between align-items-center px-2 pb-2">
                                <p className="m-0 text-primary fw-bold fs-5">{kelas.price}</p>
                                <button className="btn btn-primary rounded-pill btn-buy px-4">
                                  {kelas.buy}
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>

      {/* Bagian FAQ & Footer dengan AOS yang juga lebih cepat mengikuti init di atas */}
      <FaqComponents />
      <FooterComponents />
    </div>
  );
};

export default KelasPage;
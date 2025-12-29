import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { dataSwiper } from "../data/index.js";
import NavbarComponents from "../components/NavbarComponents.jsx"; //
import FaqComponents from "../components/FaqComponents.jsx"; //
import FooterComponents from "../components/FooterComponents.jsx"; //
import AOS from "aos";

const TestimonialPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Animasi Cepat: Durasi 400ms agar terasa ringan saat navigasi
    AOS.init({ 
      duration: 400, 
      once: true 
    });
    AOS.refresh();
  }, []);

  return (
    <div className="testimonial-page bg-white min-vh-100">
      <NavbarComponents />
      
      {/* Bagian Utama: Daftar Testimonial dalam bentuk Grid */}
      <section className="all-testimonial" style={{ paddingTop: '130px', paddingBottom: '80px' }}>
        <Container>
          <Row className="mb-5">
            <Col data-aos="fade-up">
              <h1 className="fw-bold text-center mb-2" style={{ color: '#2136a9', fontSize: '2.5rem' }}>
                Testimonial Alumni
              </h1>
              <p className="text-center text-muted mx-auto" style={{ maxWidth: '600px' }}>
                Dengarkan langsung cerita mereka yang telah berhasil mengakselerasi karir bersama LearnIOT.
              </p>
            </Col>
          </Row>

          {/* Grid Layout (Berbeda dengan Slider di Homepage) */}
          <Row className="gy-4">
            {dataSwiper.map((data) => (
              <Col key={data.id} lg={4} md={6} data-aos="fade-up" data-aos-delay="50">
                <div className="testimonial-card-box bg-white p-4 rounded-4 shadow-sm border h-100">
                  <p className="desc mb-4 text-muted" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>
                    "{data.desc}"
                  </p>
                  <div className="user d-flex align-items-center gap-3 mt-auto">
                    <img 
                      src={data.image} 
                      alt={data.name} 
                      className="rounded-circle shadow-sm" 
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                    />
                    <div>
                      <h6 className="fw-bold mb-0">{data.name}</h6>
                      <p className="skill mb-0 text-primary small">{data.skill}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Bagian FAQ & Footer yang Selalu Konsisten */}
      <FaqComponents />
      <FooterComponents />
    </div>
  );
};

export default TestimonialPage;
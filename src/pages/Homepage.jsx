import { useEffect } from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { kelasTerbaru, dataSwiper, faq } from '../data/index';
import HeroImage from '../assets/img/hero-image.png';

// Import Komponen Footer
import FooterComponent from '../components/FooterComponents.jsx';

// Import Swiper components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="homepage">
      {/* SECTION 1: HERO */}
      <header className="w-100 min-vh-100 d-flex align-items-center hero-section">
        <Container>
          <Row className="align-items-center gy-lg-0 gy-5">
            <Col lg={6} className="text-center order-1 order-lg-2">
              <img src={HeroImage} alt="hero-img" className="img-fluid hero-img" />
            </Col>
            <Col lg={6} className="text-center text-lg-start order-2 order-lg-1">
              <h1 className="fw-bold hero-title">INTERNET OF THINGS</h1>
              <p className="hero-desc">Selamat datang di LearnIOT. Tempat belajar IoT terbaik untuk masa depan digital Anda.</p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                <Button variant="primary" size="lg" className="rounded-pill px-4 btn-hero" onClick={() => navigate('/kelas')}>Lihat Kelas</Button>
                <Button variant="outline-primary" size="lg" className="rounded-pill px-4 btn-hero" onClick={() => navigate('/promo')}>Lihat Promo</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* SECTION 2: KELAS TERBARU */}
      <section className="kelas w-100 py-5">
        <Container>
          <Row>
            <Col data-aos="fade-up">
              <h1 className="text-center fw-bold section-title">Kelas Terbaru</h1>
              <p className="text-center">Tingkatkan keahlian IoT Anda dengan kurikulum terupdate.</p>
            </Col>
          </Row>
          <Row className="mt-5 gy-4">
            {kelasTerbaru.map((kelas) => (
              <Col key={kelas.id} lg={4} md={6}>
                <div className="card-kelas-box bg-white p-3 rounded-4 shadow-sm" data-aos="fade-up" data-aos-delay={kelas.delay ? parseInt(kelas.delay) : 0}>
                  <img src={kelas.image} alt={kelas.title} className="w-100 mb-3 rounded-top-4" />
                  <div className="star mb-2 px-2">
                    <i className={kelas.star1}></i><i className={kelas.star2}></i><i className={kelas.star3}></i><i className={kelas.star4}></i><i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-4 px-2 fw-bold">{kelas.title}</h5>
                  <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center px-2 pb-2 gap-3">
                    <p className="m-0 text-primary fw-bold fs-5">{kelas.price}</p>
                    <button className="btn btn-primary rounded-pill btn-buy">{kelas.buy}</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <Button variant="outline-primary" size="lg" className="rounded-pill px-5 fw-bold" onClick={() => navigate('/kelas')} data-aos="fade-up" data-aos-delay="200">
                Lihat Semua Kelas <i className="fa-solid fa-chevron-right ms-2"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 3: TESTIMONIAL */}
      <section className="testimonial py-5">
        <Container>
          <Row>
            <Col data-aos="fade-up">
              <h1 className="text-center fw-bold">Testimonial</h1>
              <p className="text-center">Apa kata mereka yang sudah bergabung bersama kami.</p>
            </Col>
          </Row>
          <Row className="mt-5" data-aos="fade-up" data-aos-delay="400">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="testimonial-card bg-white p-4 rounded-4 shadow-sm h-100">
                    <p className="desc mb-4">"{data.desc}"</p>
                    <div className="user d-flex align-items-center gap-3">
                      <img src={data.image} alt={data.name} className="rounded-circle shadow-sm" style={{width: '55px', height: '55px', objectFit: 'cover'}} />
                      <div>
                        <h6 className="fw-bold mb-0">{data.name}</h6>
                        <p className="skill mb-0 text-muted" style={{fontSize: '0.85rem'}}>{data.skill}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </section>

      {/* SECTION 4: FAQ */}
      <section className="faq py-5">
        <Container>
          <Row>
            <Col data-aos="fade-up">
              <h1 className="text-center fw-bold">Pertanyaan yang Sering Diajukan</h1>
              <p className="text-center">Segala hal yang perlu Anda ketahui tentang LearnIOT.</p>
            </Col>
          </Row>
          <Row className="mt-5 g-4">
            {faq.map((data) => (
              <Col key={data.id} lg={6} data-aos="fade-up" data-aos-delay={data.id * 100}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey.toString()}>
                    <Accordion.Header className="fw-bold">{data.title}</Accordion.Header>
                    <Accordion.Body className="text-muted">
                      {data.desc}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FOOTER COMPONENT */}
      <FooterComponent />
    </div>
  );
};

export default Homepage;
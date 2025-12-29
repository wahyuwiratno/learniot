import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navLinks } from "../data/index";

const FooterComponent = () => {
  return (
    <footer className="footer-section py-5 bg-white border-top">
      <Container>
        <Row className="d-flex justify-content-between gy-5">
          {/* Kolom Branding & Logo */}
          <Col lg="5">
            <div className="d-flex align-items-center mb-3">
              <img src="/nm hd.png" alt="logo" className="footer-logo me-3" />
              <h3 className="fw-bold text-primary mb-0">Wahyu Wiratno.</h3>
            </div>
            <p className="footer-desc">
              Membangun masa depan digital melalui edukasi Internet of Things yang terintegrasi dan mudah dipahami.
            </p>
            <div className="social-links d-flex gap-3 mt-4">
              <a href="https://www.linkedin.com/in/wahyu-wiratno-0370a4314" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/wahyuwiratno" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://instagram.com/wahyuwiratno_" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </Col>

          {/* Kolom Navigasi */}
          <Col lg="2" md="4" className="col-6">
            <h5 className="fw-bold mb-3">Menu</h5>
            <ul className="list-unstyled">
              {navLinks.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link to={`/${link.path}`} className="footer-link text-decoration-none text-muted">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Kolom Kontak */}
          <Col lg="3" md="4" className="col-6">
            <h5 className="fw-bold mb-3">Kontak</h5>
            <div className="contact-info">
                <p className="text-muted mb-2">
                   <i className="fa-regular fa-envelope me-2 text-primary"></i> wahyu@learniot.com
                </p>
                <p className="text-muted">
                   <i className="fa-solid fa-location-dot me-2 text-primary"></i> Indonesia
                </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 pt-4 border-top">
          <Col>
            <p className="text-center text-muted mb-0">
              &copy; {new Date().getFullYear()} <strong>LearnIOT</strong> by <span className="text-primary">Wahyu Wiratno</span>. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
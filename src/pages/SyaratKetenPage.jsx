import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponents from "../components/NavbarComponents.jsx"; //
import FaqComponents from "../components/FaqComponents.jsx"; //
import FooterComponents from "../components/FooterComponents.jsx"; //
import AOS from "aos";

const SyaratKetenPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Konsisten dengan logic halaman lain: 400ms agar terasa ringan
    AOS.init({ 
      duration: 400, 
      once: true 
    });
    AOS.refresh();
  }, []);

  return (
    <div className="syarat-keten-page bg-white min-vh-100">
      <NavbarComponents />
      
      <section className="syarat-keten" style={{ paddingTop: '130px', paddingBottom: '80px' }}>
        <Container>
          <Row className="mb-5">
            <Col data-aos="fade-up">
              <h1 className="fw-bold text-center mb-2" style={{ color: '#2136a9', fontSize: '2.5rem' }}>
                Syarat & Ketentuan
              </h1>
              <p className="text-center text-muted">
                Harap baca dokumen ini dengan seksama sebelum menggunakan layanan LearnIOT.
              </p>
            </Col>
          </Row>

          <Row className="gy-5">
            <Col lg={12} data-aos="fade-up" data-aos-delay="50">
              <div className="content-box">
                <h4 className="fw-bold mb-3">1. Pendahuluan</h4>
                <p className="text-muted lh-lg">
                  Selamat datang di LearnIOT. Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini secara penuh. Jangan lanjutkan penggunaan LearnIOT jika Anda tidak setuju dengan semua syarat dan ketentuan yang tertera di halaman ini.
                </p>

                <h4 className="fw-bold mb-3 mt-5">2. Hak Kekayaan Intelektual</h4>
                <p className="text-muted lh-lg">
                  Kecuali dinyatakan lain, LearnIOT dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di situs ini. Semua hak kekayaan intelektual dilindungi undang-undang. Anda diperbolehkan mengakses materi ini untuk penggunaan pribadi Anda sendiri, dengan batasan yang ditetapkan dalam syarat dan ketentuan ini.
                </p>

                <h4 className="fw-bold mb-3 mt-5">3. Batasan Penggunaan</h4>
                <p className="text-muted lh-lg"> Anda secara khusus dilarang melakukan hal-hal berikut:</p>
                <ul className="text-muted lh-lg">
                    <li>Mempublikasikan materi situs web di media lain tanpa izin tertulis.</li>
                    <li>Menjual, menyewakan, atau mensublisensikan materi dari situs web.</li>
                    <li>Menggunakan situs web ini dengan cara yang merusak atau mengganggu akses pengguna lain.</li>
                    <li>Menggunakan situs web ini untuk tujuan iklan atau pemasaran tanpa persetujuan.</li>
                </ul>

                <h4 className="fw-bold mb-3 mt-5">4. Perubahan Ketentuan</h4>
                <p className="text-muted lh-lg">
                  LearnIOT berhak untuk merevisi syarat dan ketentuan ini kapan saja sesuai keinginan. Dengan menggunakan situs web ini, Anda diharapkan untuk meninjau syarat dan ketentuan secara berkala untuk memastikan Anda memahami semua syarat yang mengatur penggunaan situs web ini.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <FaqComponents />
      <FooterComponents />
    </div>
  );
};

export default SyaratKetenPage;
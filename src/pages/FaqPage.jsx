import { useEffect } from "react";
import NavbarComponents from "../components/NavbarComponents.jsx"; //
import FaqComponents from "../components/FaqComponents.jsx"; //
import FooterComponents from "../components/FooterComponents.jsx"; //
import AOS from "aos";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Logic animasi snappy: 400ms agar halaman terasa sangat responsif
    AOS.init({ 
      duration: 400, 
      once: true 
    });
    AOS.refresh();
  }, []);

  return (
    <div className="faq-page bg-white min-vh-100">
      <NavbarComponents />
      
      {/* Karena kita sudah punya FaqComponents yang lengkap dengan judul dan mapping data, 
          kita cukup memanggilnya di sini dengan penyesuaian padding atas 
          agar tidak tertutup oleh fixed navbar.
      */}
      <div style={{ paddingTop: '100px' }}>
        <FaqComponents />
      </div>

      <FooterComponents />
    </div>
  );
};

export default FaqPage;
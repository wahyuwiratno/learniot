import {Routes, Route} from 'react-router-dom'

import NavbarComponents from './components/NavbarComponents';
// import FooterComponents from './components/FooterComponents';

import Homepage from './pages/Homepage';
import KelasPage from './pages/KelasPage';
import TestimoniPage from './pages/TestimoniPage';
import FaqPage from './pages/FaqPage';
import SyaratKetenPage from './pages/SyaratKetenPage';

function App() {
 return (
  <div>
    <NavbarComponents />
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/kelas" element={<KelasPage />} />
      <Route path="/testimoni" element={<TestimoniPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/syarat-keten" element={<SyaratKetenPage />} />
    </Routes>

    {/*<FooterComponents /> */}
  </div>
);
};
export default App

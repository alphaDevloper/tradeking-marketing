import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import WebDesignPage from './pages/WebDesignPage';
import RoofingSeoPage from './pages/RoofingSeoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/website-design-development" element={<WebDesignPage />} />
        <Route path="/services/local-seo" element={<RoofingSeoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Platform from './pages/Platform';
import CustomSoftware from './pages/solutions/CustomSoftware';
import CloudOps from './pages/solutions/CloudOps';
import TechConsulting from './pages/solutions/TechConsulting';
import About from './pages/company/About';
import Blog from './pages/company/Blog';
import Careers from './pages/company/Careers';
import Contact from './pages/company/Contact';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions/custom-software" element={<CustomSoftware />} />
        <Route path="/solutions/cloud-ops" element={<CloudOps />} />
        <Route path="/solutions/tech-consulting" element={<TechConsulting />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/company/blog" element={<Blog />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

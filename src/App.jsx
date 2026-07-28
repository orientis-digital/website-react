import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import About from './pages/company/About';
import Contact from './pages/company/Contact';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';

import NotFound from './pages/error/NotFound';
import ServerError from './pages/error/ServerError';
import Forbidden from './pages/error/Forbidden';

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Error Pages */}
            <Route path="/404" element={<NotFound />} />
            <Route path="/500" element={<ServerError />} />
            <Route path="/403" element={<Forbidden />} />

            {/* Legacy Redirects & Fallback */}
            <Route path="/platform" element={<Solutions />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/company/contact" element={<Contact />} />
            <Route path="/solutions/*" element={<Solutions />} />
            <Route path="/company/*" element={<About />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

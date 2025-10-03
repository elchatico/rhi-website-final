
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Layout and Pages
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import KidsPage from './pages/KidsPage';
import ProPage from './pages/ProPage';
import CsrPage from './pages/CsrPage';
import GalleryPage from './pages/GalleryPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="kids" element={<KidsPage />} />
          <Route path="pro" element={<ProPage />} />
          <Route path="csr" element={<CsrPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;

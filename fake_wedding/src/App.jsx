import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import CookieBanner from './components/ui/CookieBanner';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import HomePage from './pages/HomePage';
import VendorPage from './pages/VendorPage';
import AdatvedelmiPage from './pages/AdatvedelmiPage';
import ImpresszumPage from './pages/ImpresszumPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/szolgaltatok/:slug" element={<VendorPage />} />
        <Route path="/adatvedelmi-tajekoztato" element={<AdatvedelmiPage />} />
        <Route path="/impresszum" element={<ImpresszumPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
}

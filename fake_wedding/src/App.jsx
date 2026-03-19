import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import HomePage from './pages/HomePage';
import VendorPage from './pages/VendorPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/szolgaltatok/:slug" element={<VendorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

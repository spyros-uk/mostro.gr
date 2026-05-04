import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BoatPage } from './pages/BoatPage';
import { ScrollToHash } from './scroll-to-hash';

export function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/boats/:slug" element={<BoatPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

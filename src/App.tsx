import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BoatPage } from './pages/BoatPage';
import { LegalPage } from './pages/LegalPage';
import { ScrollToHash } from './scroll-to-hash';
import { HtmlLang } from './i18n/html-lang';
import { CookieNotice } from '@/components/cookie-notice';

export function App() {
  return (
    <>
      <HtmlLang />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/boats/:slug" element={<BoatPage />} />
        <Route path="/privacy" element={<LegalPage doc="privacy" />} />
        <Route path="/terms" element={<LegalPage doc="terms" />} />
        <Route path="/cookies" element={<LegalPage doc="cookies" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <CookieNotice />
    </>
  );
}

import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Critical CSS only
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/fixes.css';

// Immediate load components (above the fold)
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

// Helper function to handle lazy import errors
const lazyImport = (importFunc) => {
  return lazy(() => 
    importFunc().catch(err => {
      console.error('Lazy loading failed:', err);
      // Return a fallback component
      return { default: () => <div className="p-8 text-center"><p>Error loading page. Please refresh.</p></div> };
    })
  );
};

// Lazy load all page components
const Home = lazyImport(() => import('./components/Home'));
const Participants = lazyImport(() => import('./pages/Participants'));
const StartupContent = lazyImport(() => import('./pages/StartupContent'));
const Highlights = lazyImport(() => import('./pages/Highlights'));
const Speakers = lazyImport(() => import('./pages/Speakers'));
const STFS = lazyImport(() => import('./pages/STFS'));
const Visitor = lazyImport(() => import('./pages/Visitor'));
const About = lazyImport(() => import('./pages/About'));
const InvestorAccelator = lazyImport(() => import('./pages/InvestorAccelator'));
const Contact = lazyImport(() => import('./pages/Contact'));
const Sponser = lazyImport(() => import('./pages/Sponser'));
const Awardsnight = lazyImport(() => import('./pages/Awardsnight'));
const Startup = lazyImport(() => import('./pages/Startup'));
const Faq = lazyImport(() => import('./pages/Faq'));
const StartUpShowCase = lazyImport(() => import('./pages/StartupShowCase'));
const PitcherContent = lazyImport(() => import('./pages/PitcherContent'));
const InvestorContent = lazyImport(() => import('./pages/InvestorContent'));
const PrivacyPolicy = lazyImport(() => import('./components/PrivacyPolicy'));
const Cms = lazyImport(() => import('./pages/CMS'));
const PaymentFailure = lazyImport(() => import('./pages/PaymentFailure'));
const PaymentSuccess = lazyImport(() => import('./pages/PaymentSuccess'));
const VisitorPopup = lazyImport(() => import('./pages/VisitorPopup'));
const Activities = lazyImport(() => import('./pages/Activities'));
const Sponsor2024 = lazyImport(() => import('./pages/Sponsor2024'));
const GuestSpeakers = lazyImport(() => import('./pages/GuestSpeakers'));
const EventFlow = lazyImport(() => import('./pages/EventFlow'));
const Summary = lazyImport(() => import('./pages/Summery'));
const Speakers2024 = lazyImport(() => import('./pages/2024HighlightSpeakerMentor'));
const STFS2024 = lazyImport(() => import('./pages/2024SharkTank'));
const PreSeries = lazyImport(() => import('./pages/Preseries'));
const Sharkteen = lazyImport(() => import('./pages/2024SharkTeens'));
const SpeakersChiefGuest = lazyImport(() => import('./pages/2025SpeakersChiefGuest'));



function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='/participants' element={<Participants />} />
            <Route path='/startup' element={<StartupContent />} />
            <Route path='/investor' element={<InvestorContent />} />
            <Route path='/pitcher' element={<PitcherContent />} />
            <Route path='/highlights' element={<Highlights />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/sharkTank' element={<STFS />} />
            <Route path='/visitor' element={<Visitor />} />
            <Route path='/about' element={<About />} />
            <Route path='/event-flow' element={<EventFlow />} />
            <Route path='/investor-accelator' element={<InvestorAccelator />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/sponser' element={<Sponser />} />
            <Route path='/awards' element={<Awardsnight />} />
            <Route path='/start-up' element={<Startup />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/start-up-showcase' element={<StartUpShowCase />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/cms/:id' element={<Cms />} />
            <Route path='/payment-failure' element={<PaymentFailure />} />
            <Route path='/payment-success' element={<PaymentSuccess />} />
            <Route path="/popup-visitor" element={<VisitorPopup />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/sponser-2024" element={<Sponsor2024 />} />
            <Route path="/guest-speakers" element={<GuestSpeakers />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/speaker-2024" element={<Speakers2024 />} />
            <Route path="/sharktank-2024" element={<STFS2024 />} />
            <Route path="/Pre-series" element={<PreSeries />} />
            <Route path="/shark-teen" element={<Sharkteen />} />
            <Route path='/2025-Speakers' element={<SpeakersChiefGuest />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

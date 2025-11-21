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

// Lazy load all page components
const Home = lazy(() => import('./components/Home'));
const Register = lazy(() => import('./pages/Register'));
const Participants = lazy(() => import('./pages/Participants'));
const StartupContent = lazy(() => import('./pages/StartupContent'));
const Highlights = lazy(() => import('./pages/Highlights'));
const Speakers = lazy(() => import('./pages/Speakers'));
const STFS = lazy(() => import('./pages/STFS'));
const Visitor = lazy(() => import('./pages/Visitor'));
const About = lazy(() => import('./pages/About'));
const InvestorAccelator = lazy(() => import('./pages/InvestorAccelator'));
const Contact = lazy(() => import('./pages/Contact'));
const Sponser = lazy(() => import('./pages/Sponser'));
const Awardsnight = lazy(() => import('./pages/Awardsnight'));
const Startup = lazy(() => import('./pages/Startup'));
const Faq = lazy(() => import('./pages/Faq'));
const StartUpShowCase = lazy(() => import('./pages/StartupShowCase'));
const PitcherContent = lazy(() => import('./pages/PitcherContent'));
const InvestorContent = lazy(() => import('./pages/InvestorContent'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const Cms = lazy(() => import('./pages/CMS'));
const PaymentFailure = lazy(() => import('./pages/PaymentFailure'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const VisitorPopup = lazy(() => import('./pages/VisitorPopup'));
const Activities = lazy(() => import('./pages/Activities'));
const Sponsor2024 = lazy(() => import('./pages/Sponsor2024'));
const GuestSpeakers = lazy(() => import('./pages/GuestSpeakers'));
const EventFlow = lazy(() => import('./pages/EventFlow'));
const Summary = lazy(() => import('./pages/Summery'));
const Speakers2024 = lazy(() => import('./pages/2024HighlightSpeakerMentor'));
const STFS2024 = lazy(() => import('./pages/2024SharkTank'));
const PreSeries = lazy(() => import('./pages/Preseries'));
const Sharkteen = lazy(() => import('./pages/2024SharkTeens'));
const SpeakersChiefGuest = lazy(() => import('./pages/2025SpeakersChiefGuest'));



function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='/register' element={<Register />} />
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

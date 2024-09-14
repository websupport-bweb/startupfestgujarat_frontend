import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';
// import '../src/assets/scss/_nav.scss';
import Home from './components/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Participants from './pages/Participants';
import StartupContent from './pages/StartupContent';
import Highlights from './pages/Highlights';
import Speakers from './pages/Speakers';
import STFS from './pages/STFS';

import Visitor from './pages/Visitor';
import About from './pages/About';
import InvestorAccelator from './pages/InvestorAccelator';

import Contact from './pages/Contact';
import Sponser from './pages/Sponser';
import Awardsnight from './pages/Awardsnight';
import Startup from './pages/Startup';
import Faq from './pages/Faq';
import StartUpShowCase from './pages/StartupShowCase';
import PitcherContent from './pages/PitcherContent';
import InvestorContent from './pages/InvestorContent';
import PrivacyPolicy from './components/PrivacyPolicy';
import Cms from './pages/CMS';
import PaymentFailure from './pages/PaymentFailure';
import PaymentSuccess from './pages/PaymentSuccess';
import VisitorPopup from './pages/VisitorPopup';
import Sponsor2024 from './pages/Sponsor2024';
import GuestSpeakers from './pages/GuestSpeakers';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Move Header outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path='/investor-accelator' element={<InvestorAccelator />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/sponser' element={<Sponser />} />
          <Route path='/awards' element={<Awardsnight />} />
          <Route path='/start-up' element={<Startup />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/start-up-showcase' element={<StartUpShowCase />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/cms/:id' element ={<Cms />} />

          <Route path='/payment-failure' element={<PaymentFailure />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          {/* Popup Visitor Registration */}
          <Route path="/popup-visitor" element={<VisitorPopup />} />
          <Route path="/sponser-2024" element={<Sponsor2024/>} />
          <Route path="/guest-speakers" element={<GuestSpeakers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

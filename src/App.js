import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../src/assets/css/style.css';
// import '../src/assets/scss/_nav.scss';
import Home from './components/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Participants from './pages/Participants';
import StartupContent from './pages/StartupContent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Move Header outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element ={<Register />} />
          <Route path='/participants' element ={<Participants />} />
          <Route path='/startup' element ={<StartupContent />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

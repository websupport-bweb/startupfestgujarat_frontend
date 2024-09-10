import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
// import '../src/assets/scss/_nav.scss';
import Home from './components/Home';
import Register from './pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Move Header outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element ={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

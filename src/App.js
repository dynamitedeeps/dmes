import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';


function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Header /> {/* Navigation bar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}
export default App;
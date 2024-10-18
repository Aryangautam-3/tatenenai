import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CropManagement from './pages/CropManagement';
import SoilFertilizer from './pages/SoilFertilizer';
import DiseaseDetection from './pages/DiseaseDetection';
import Livestock from './pages/Livestock';
import Tools from './pages/Tools';
import Help from './pages/Help';
import News from './pages/News';
import About from './pages/About';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crop-management" element={<CropManagement />} />
            <Route path="/soil-fertilizer" element={<SoilFertilizer />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/livestock" element={<Livestock />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/help" element={<Help />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
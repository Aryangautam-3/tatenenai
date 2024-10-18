import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Github, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tatenen AI</h3>
            <p>Tatenen AI platform provides cutting-edge Machine Learning models for agricultural predictions and insights.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><Link to="/about" className="hover:text-green-200">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-200">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/crop-management/recommendation" className="hover:text-green-200">Crop Recommendation</Link></li>
              <li><Link to="/soil-fertilizer/fertilizer" className="hover:text-green-200">Fertilizer Recommendation</Link></li>
              <li><Link to="/soil-fertilizer/quality-prediction" className="hover:text-green-200">Soil Quality</Link></li>
              <li><Link to="/tools/market-price" className="hover:text-green-200">Price Prediction</Link></li>
              <li><Link to="/help/weather" className="hover:text-green-200">Forecast</Link></li>
              <li><Link to="/disease-detection" className="hover:text-green-200">Disease</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li><Link to="/privacy-policy" className="hover:text-green-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-200">Terms and Conditions</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-green-200">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="hover:text-green-200"><Instagram size={24} /></a>
          <a href="#" className="hover:text-green-200"><Facebook size={24} /></a>
          <a href="#" className="hover:text-green-200"><Github size={24} /></a>
          <a href="#" className="hover:text-green-200"><Linkedin size={24} /></a>
          <a href="tel:+1234567890" className="hover:text-green-200"><Phone size={24} /></a>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Tatenen AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tatenen AI</h1>
        <p className="text-xl mb-8">Revolutionizing Agriculture with Artificial Intelligence</p>
        <Link 
          to="/crop-management"
          className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 inline-flex items-center"
        >
          Explore Now <ArrowRight className="ml-2" />
        </Link>
      </section>

      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Why AI in Agriculture?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Predicting the best crop based on soil and climate data</li>
            <li>Real-time crop monitoring using AI-powered sensors and drones</li>
            <li>Precision farming for optimizing irrigation and pesticide usage</li>
            <li>Detailed soil health analysis to enhance crop growth and productivity</li>
            <li>Accurate weather forecasting to plan planting, irrigation, and harvesting</li>
            <li>Advanced yield prediction models for better resource planning</li>
            <li>Automated detection of pests and weeds for targeted intervention</li>
            <li>Increased labor efficiency through AI-powered robotic systems</li>
            <li>Optimizing the agricultural supply chain from farm to market</li>
          </ul>
          <Link 
            to="/about"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Know More
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="AI in Agriculture"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Data Collection', 'Analysis', 'Optimization'].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Step {index + 1}: {step}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Offer to Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Responsive Design', description: 'Easily accessible from mobile, tablet, and desktop devices.' },
            { title: 'Comprehensive Models', description: 'Full-suite machine learning models tailored for agriculture.' },
            { title: 'User-Friendly Interface', description: 'Simple and intuitive design for all users.' },
            { title: 'Customizable Solutions', description: 'Tailored to meet specific farming needs.' },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="About Tatenen AI"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Tatenen AI</h2>
          <p className="mb-4">
            Tatenen AI is at the forefront of agricultural innovation, combining cutting-edge
            artificial intelligence with deep agricultural expertise to empower farmers and
            revolutionize farming practices worldwide.
          </p>
          <p className="mb-4">
            Our mission is to make sustainable and efficient farming accessible to all,
            ensuring food security and environmental stewardship for generations to come.
          </p>
          <Link 
            to="/about"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Know More
          </Link>
        </div>
      </section>

      {/* Testimonials and FAQ sections can be added here */}
    </div>
  );
};

export default Home;
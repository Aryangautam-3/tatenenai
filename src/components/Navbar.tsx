import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Tatenen AI</Link>
        <div className="hidden md:flex space-x-4">
          <NavItem to="/" label="Home" />
          <NavDropdown label="Crop Management" items={[
            { to: "/crop-management/recommendation", label: "Crop Recommendation" },
            { to: "/crop-management/rotation", label: "Crop Rotation" },
            { to: "/crop-management/integrated-farming", label: "Integrated Farming Options" },
            { to: "/crop-management/vertical-farming", label: "Vertical Farming Options" },
            { to: "/crop-management/harvest-advisor", label: "Crop Harvest Advisor" },
            { to: "/crop-management/yield-optimizer", label: "Crop Yield Optimizer" },
            { to: "/crop-management/silviculture", label: "Silviculture Optimizer" },
          ]} />
          <NavDropdown label="Soil & Fertilizer" items={[
            { to: "/soil-fertilizer/nutrients", label: "Soil Nutrients" },
            { to: "/soil-fertilizer/quality-prediction", label: "Soil Quality Prediction" },
            { to: "/soil-fertilizer/irrigation", label: "Irrigation System Prediction" },
            { to: "/soil-fertilizer/fertilizer", label: "Fertilizer Prediction" },
            { to: "/soil-fertilizer/cattle-food", label: "Cattle Food Prediction" },
            { to: "/soil-fertilizer/integrated-farming", label: "Integrated Farming Techniques" },
          ]} />
          <NavDropdown label="Disease Detection" items={[
            { to: "/disease-detection/plant", label: "Plant Disease Detection" },
            { to: "/disease-detection/pests", label: "Pests Disease Detection" },
            { to: "/disease-detection/livestock", label: "Livestock Disease Detection" },
            { to: "/disease-detection/precaution", label: "Precaution from Disease Outbreak" },
            { to: "/disease-detection/tree", label: "Tree Disease" },
            { to: "/disease-detection/guidelines", label: "Farming Guidelines" },
          ]} />
          <NavDropdown label="Livestock" items={[
            { to: "/livestock/health-monitoring", label: "Livestock Health Monitoring" },
            { to: "/livestock/nutrition", label: "Nutrition Guidelines" },
            { to: "/livestock/breeding", label: "Breeding Management" },
            { to: "/livestock/disease-control", label: "Disease and Pest Control" },
            { to: "/livestock/disease-outbreak", label: "Disease Outbreak" },
            { to: "/livestock/market", label: "Market Access and Prices" },
            { to: "/livestock/equipment", label: "Livestock Equipment Shop" },
            { to: "/livestock/shop", label: "Livestock Shop" },
            { to: "/livestock/guidelines", label: "Animal Guidelines" },
          ]} />
          <NavDropdown label="Tools" items={[
            { to: "/tools/fertilizer-calculator", label: "Fertilizer Requirement Calculator" },
            { to: "/tools/yield-calculator", label: "Crop Yield Calculator" },
            { to: "/tools/moisture-calculator", label: "Soil Moisture Calculator" },
            { to: "/tools/water-calculator", label: "Water Requirement" },
            { to: "/tools/livestock-management", label: "Livestock Management" },
            { to: "/tools/market-price", label: "Market Price" },
            { to: "/tools/greenhouse", label: "Greenhouse Management" },
            { to: "/tools/climate-change", label: "Climate Change" },
            { to: "/tools/farming-tutorial", label: "Farming Tutorial" },
            { to: "/tools/livestock-tutorial", label: "Livestock Management Tutorial" },
          ]} />
          <NavDropdown label="Help" items={[
            { to: "/help/weather", label: "Live Weather Tracker" },
            { to: "/help/soil-testing", label: "Nearby Soil Testing Center" },
            { to: "/help/electronics", label: "Electrical and Electronics Shops" },
            { to: "/help/crop-calendar", label: "Pre Crop Calendar" },
            { to: "/help/eco-friendly", label: "Eco-Friendly Crop Management" },
            { to: "/help/task-reminder", label: "Plant Task Reminder" },
            { to: "/help/fertilizer-shops", label: "Fertilizer and Tool Shops" },
            { to: "/help/tool-shops", label: "Tools Shops" },
            { to: "/help/rotation-planner", label: "Crop Rotation Planner" },
          ]} />
          <NavItem to="/news" label="News" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center">
            <Globe size={20} />
            <span className="ml-1">EN</span>
          </button>
          <button className="bg-white text-green-600 px-4 py-2 rounded">Login</button>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {/* Mobile menu items */}
          <NavItem to="/" label="Home" />
          <NavItem to="/crop-management" label="Crop Management" />
          <NavItem to="/soil-fertilizer" label="Soil & Fertilizer" />
          <NavItem to="/disease-detection" label="Disease Detection" />
          <NavItem to="/livestock" label="Livestock" />
          <NavItem to="/tools" label="Tools" />
          <NavItem to="/help" label="Help" />
          <NavItem to="/news" label="News" />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="block py-2 hover:text-green-200">{label}</Link>
);

const NavDropdown = ({ label, items }: { label: string; items: { to: string; label: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center hover:text-green-200">
        {label} <ChevronDown size={16} className="ml-1" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Our Services" },
    { path: "/offers", label: "Offers" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* top bar */}
      <div className="bg-blue-50 h-10 flex items-center justify-center gap-2 px-4 text-sm md:text-base font-medium text-blue-800">
        <CgSmartHomeWashMachine className="text-blue-600 h-5 w-5" />
        Hassle-free Laundry at Your Doorstep
      </div>

      {/* desktop */}
      <div className="hidden md:flex items-center relative container mx-auto px-4 py-4">
        
        {/* left */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            LH
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl md:text-2xl text-gray-800 hover:text-blue-600 transition">
              Laundry Hamper
            </h1>
            <p className="text-xs text-gray-500">Fresh & Clean</p>
          </div>
        </Link>

        {/* center NAV - ABSOLUTE CENTER */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative hover:text-blue-600 transition-colors ${
                location.pathname === item.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* right small thin button */}
        <Link
          to="/register"
          className="ml-auto text-blue-600 border border-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-600 hover:text-white transition font-medium"
        >
          Register
        </Link>
      </div>

      {/* mobile */}
      <div className="md:hidden px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            LH
          </div>
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t py-4 px-4 flex flex-col gap-4 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/register"
            className="text-blue-600 border border-blue-600 text-center py-2 rounded-md mt-2 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

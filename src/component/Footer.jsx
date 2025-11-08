import React from "react";
import { Link } from "react-router-dom";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdIron } from "react-icons/md";
import { TbWashMachine } from "react-icons/tb";
import { IoMdBrush } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 px-4 md:px-8 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CgSmartHomeWashMachine className="text-blue-400 h-6 w-6" />
            <span className="font-bold text-lg">Laundry Hamper</span>
          </div>
          <p className="text-gray-400 mb-4">
            Fresh, clean, and delivered to your doorstep with care.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/917379972119" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
            <li><Link to="/offers" className="text-gray-400 hover:text-white transition">Offers</Link></li>
            <li><Link to="/our-services" className="text-gray-400 hover:text-white transition">Services</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services with icons */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-400">
              <TbWashMachine className="text-blue-400" /> Wash & Fold
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <GiClothes className="text-blue-400" /> Dry Cleaning
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <MdIron className="text-blue-400" /> Ironing
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <IoMdBrush className="text-blue-400" /> Stain Removal
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <address className="not-italic text-gray-400 space-y-2">
            <p>123 Laundry Street</p>
            <p>Clean City, CC 12345</p>
            <p>
              <a href="mailto:pandeyabhishekmkp1423@gmail.com" className="hover:text-white transition">
                pandeyabhishekmkp1423@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+917379972119" className="hover:text-white transition">
                +91 7379972119
              </a>
            </p>
            <p>
              <a 
                href="https://www.google.com/maps/place/26.91827985,80.95394669999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition underline"
              >
                View on Map
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Laundry Hamper. All rights reserved.</p>
        <p className="mt-1">
          <Link to="/privacy" className="hover:text-white transition underline">Privacy Policy</Link> |{" "}
          <Link to="/terms" className="hover:text-white transition underline">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? We're here to help!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <a
            href="tel:+917379972119"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center block"
          >
            <div className="text-5xl mb-4 text-blue-600">📞</div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 7379972119</p>
            <p className="text-gray-500 text-sm mt-2">Mon-Fri: 8AM-6PM</p>
          </a>

          <a
            href="mailto:pandeyabhishekmkp1423@gmail.com"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center block"
          >
            <div className="text-5xl mb-4 text-blue-600">✉️</div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">pandeyabhishekmkp1423@gmail.com</p>
            <p className="text-gray-500 text-sm mt-2">
              We respond within 24 hours
            </p>
          </a>

          <a
            href="https://www.google.com/maps/place/26.91827985,80.95394669999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center block"
          >
            <div className="text-5xl mb-4 text-blue-600">📍</div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">
              123 Laundry Street<br />
              Clean City, CC 12345
            </p>
          </a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center mt-12 gap-6">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl hover:scale-110 transition transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/7379972119"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl hover:scale-110 transition transform"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl hover:scale-110 transition transform"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Embedded Google Map */}
        <div className="rounded-xl overflow-hidden shadow-md mt-12 relative">
          <iframe
            title="Laundry Hamper Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12877.53201659391!2d80.95394669999999!3d26.91827985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1762626100775!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, pointerEvents: "none" }} // disables scrolling
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Button to open location in Google Maps */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <a
              href="https://www.google.com/maps/place/26.91827985,80.95394669999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

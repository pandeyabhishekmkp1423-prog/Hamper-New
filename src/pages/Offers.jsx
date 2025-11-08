import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGift, FaShareAlt, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Offers() {
  const [timeLeft, setTimeLeft] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

  const offers = [
    { title: "Flat 20% OFF on First Order", desc: "New user gets instant 20% discount on first laundry booking. No coupon needed.", badge: "Hot", category: "All", cta: "/services" },
    { title: "Wash & Fold Combo", desc: "Get combo price per KG", price: "₹60/KG Only", badge: "Popular", category: "Wash & Fold", cta: "/services" },
    { title: "Dry Cleaning Special", desc: "On premium items", price: "UP TO 30% OFF", badge: "Limited", category: "Dry Cleaning", cta: "/services" },
    { title: "Bed Sheet + Quilt Combo", desc: "Combo pack savings", price: "₹199 Only", badge: "Best Value", category: "Bed & Bedding", cta: "/services" },
    { title: "Kids Wear Special", desc: "Eco-friendly detergents & delicate care", price: "₹50/KG Only", badge: "Eco", category: "Kids Wear", cta: "/services" },
  ];

  const categories = ["All", "Wash & Fold", "Dry Cleaning", "Bed & Bedding", "Kids Wear"];

  const testimonials = [
    { name: "Rohit Sharma", rating: 5, text: "Amazing offers! The first order discount saved me a lot and the service is top-notch." },
    { name: "Neha Singh", rating: 5, text: "Loved the Wash & Fold combo deal. Affordable and super convenient!" },
    { name: "Amit Verma", rating: 4, text: "Great discounts on dry cleaning. My clothes felt fresh and clean." },
    { name: "Priya Kapoor", rating: 5, text: "Kids wear special offer is perfect! Eco-friendly and efficient service." },
  ];

  // Countdown Timer
  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    const interval = setInterval(() => {
      const now = new Date();
      const distance = endDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4">

      {/* Eye-catching Hero Banner */}
      <section className="relative max-w-6xl mx-auto mb-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl p-10 shadow-xl overflow-hidden flex items-center justify-center text-center">
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse">🎁 Special Offers & Deals</h1>
          <p className="text-lg md:text-2xl mb-6 animate-bounce">Grab these amazing deals before they expire!</p>
          <Link to="/services" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
            View Services
          </Link>
        </div>
        <FaGift className="absolute top-4 right-4 text-9xl opacity-20 animate-bounce-slow hidden md:block" />
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
      </section>

      {/* Countdown Timer */}
      <div className="max-w-4xl mx-auto mb-12 flex justify-center gap-6 text-center flex-wrap">
        {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-4 w-20">
            <p className="text-2xl font-bold text-blue-600">{timeLeft[unit]}</p>
            <p className="text-gray-600 capitalize">{unit}</p>
          </div>
        ))}
      </div>

      {/* Categories Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold ${
              activeCategory === cat ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"
            } transition`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Offers Grid Centered */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          {offers
            .filter((offer) => activeCategory === "All" || offer.category === activeCategory)
            .map((offer, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition transform hover:-translate-y-2 relative">
                {offer.badge && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {offer.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-2">{offer.desc}</p>
                {offer.price && <p className="font-bold text-blue-600 text-lg mb-2">{offer.price}</p>}
                <div className="flex justify-center gap-4 mb-2">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    <FaShareAlt />
                  </button>
                </div>
                <Link to={offer.cta} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-2">
                  View Services
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-center mb-6">What Customers Say About Our Offers</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col justify-between transform transition hover:scale-105 duration-300">
                <div>
                  <div className="flex items-center mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{t.text}"</p>
                </div>
                <p className="font-semibold text-gray-800 text-right">- {t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="text-center text-gray-500 mt-10">
        *Offers valid for limited period only. Terms apply.
      </p>
    </div>
  );
}

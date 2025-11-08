import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const About = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const feedbacks = [
    { name: "Rohit Sharma", text: "Laundry Hamper has completely changed how I handle laundry. Super fast and my clothes feel fresh every time!", rating: 5 },
    { name: "Neha Singh", text: "I love the convenience of pickup and delivery. The team is professional and my clothes are always perfectly cleaned.", rating: 5 },
    { name: "Amit Verma", text: "Affordable, eco-friendly, and reliable! I recommend Laundry Hamper to all my friends and family.", rating: 5 },
    { name: "Priya Kapoor", text: "Excellent service! The staff is friendly and my clothes feel amazing. Definitely using again.", rating: 5 },
    { name: "Vikram Joshi", text: "I’m impressed with the fast turnaround and quality. Laundry Hamper is a lifesaver!", rating: 4 },
  ];

  // Calculate average rating
  const averageRating = Math.round(feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || feedback.trim() === '') {
      alert("Please select a rating and write your feedback before submitting.");
      return;
    }
    setFeedbackMsg("Thank you for your feedback!");
    setFeedback('');
    setRating(0);
    setHoverRating(0);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">About Laundry Hamper</h1>
          <p className="text-lg md:text-xl text-gray-600">
            We are redefining the way laundry is done, making it effortless, eco-friendly, and reliable.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2023, Laundry Hamper started with a mission to simplify one of life's tedious chores: laundry. 
              We observed how much time people wasted washing, drying, and ironing their clothes and wanted to offer a smarter solution.
            </p>
            <p className="text-gray-700 mb-4">
              Our service provides quick pickup and delivery, eco-friendly detergents, and professional handling for every garment. 
              Whether it's everyday clothes or delicate fabrics, we ensure a spotless finish every time.
            </p>
            <p className="text-gray-700">
              Today, we pride ourselves on transforming laundry from a task to a hassle-free experience, empowering our customers to focus on what truly matters.
            </p>
          </div>
        </div>

        {/* Values & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700">Quality: Exceptional service for every garment.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700">Sustainability: Eco-friendly products and processes.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700">Convenience: Easy scheduling and door-to-door service.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700">Reliability: On-time delivery, every time.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span className="text-gray-700">Innovation: Continuous improvement for customer satisfaction.</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-700">Free pickup and delivery.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-700">Eco-friendly detergents.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-700">Fast turnaround time.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-700">Affordable pricing.</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span className="text-gray-700">Trusted professionals handling your garments.</span></li>
            </ul>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-4">What Our Customers Say</h2>
          {/* Average rating */}
          <div className="flex justify-center items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-2xl mr-1 ${i < averageRating ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-3 text-gray-600 font-semibold text-lg">{averageRating}.0 / 5</span>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {feedbacks.map((fb, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col justify-between transform transition hover:scale-105 duration-300">
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(fb.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1 animate-pulse" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">"{fb.text}"</p>
                  </div>
                  <p className="font-semibold text-gray-800 text-right">- {fb.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Feedback Submission */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Share Your Feedback</h2>
          <form onSubmit={handleFeedbackSubmit} className="max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <FaStar
                  key={star}
                  size={30}
                  className={`cursor-pointer transition-transform duration-200 ${star <= (hoverRating || rating) ? "text-yellow-400 scale-125" : "text-gray-300"}`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write your feedback here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
            >
              Submit Feedback
            </button>
            {feedbackMsg && <p className="text-green-600 text-center mt-4 animate-pulse">{feedbackMsg}</p>}
          </form>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today</h2>
          <p className="text-gray-700 mb-6">
            Experience a laundry service that truly cares. Let us handle the chores while you enjoy your day.
          </p>
          <Link
            to="/register"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

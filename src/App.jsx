// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./component/Header";
import Footer from "./component/Footer";
import LoadingSpinner from "./component/LoadingSpinner";

// Pages
import Dashboard from "./pages/Dashboard";
import Services from "./pages/OurServices";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import Register from "./pages/Register";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div className="p-8 text-center text-red-600 text-xl">
                Page Not Found
              </div>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

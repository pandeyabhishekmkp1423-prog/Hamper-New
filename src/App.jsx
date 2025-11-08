// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./component/Header";
import Footer from "./component/Footer";
import LoadingSpinner from "./component/LoadingSpinner";

// Pages
import Dashboard from "./pages/Dashboard";
import PriceList from "./pages/PriceList";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import LearnMore from "./pages/LearnMore";
import Services from "./pages/OurServices";
import Offers from "./pages/Offers";
import ThankYou from "./pages/ThankYou"
// Context
import { CartProvider } from "./pages/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/price" element={<PriceList />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/learn-more" element={<LearnMore />} />
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
    </CartProvider>
  );
}

export default App;

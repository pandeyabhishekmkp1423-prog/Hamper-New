import React, { useEffect, useState } from "react";
import API from "../api";
import { FaTshirt, FaShoePrints, FaBed, FaCouch, FaHandSparkles } from "react-icons/fa";

export default function OurServices() {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await API.get("/services");
      setServicesData(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const getServiceIcon = (name) => {
    if (name.includes("Wash")) return <FaTshirt className="text-blue-600 text-4xl" />;
    if (name.includes("Shoe")) return <FaShoePrints className="text-blue-600 text-4xl" />;
    if (name.includes("Bed")) return <FaBed className="text-blue-600 text-4xl" />;
    if (name.includes("Sofa")) return <FaCouch className="text-blue-600 text-4xl" />;
    return <FaHandSparkles className="text-blue-600 text-4xl" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-center text-gray-500">Loading services...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center"
          >
            <div className="mb-4">{getServiceIcon(item.name)}</div>

            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            
            <p className="text-gray-600 mb-2">{item.description}</p>

            <p className="font-bold text-blue-600 text-lg">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

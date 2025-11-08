import React, { useEffect, useState } from "react";
import { FaTshirt, FaShoePrints, FaBed, FaCouch, FaHandSparkles, FaBaby, FaSwimmingPool } from "react-icons/fa";

export default function OurServices() {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const staticServices = [
    { _id: 1, name: "Wash & Fold", description: "Professional washing & careful folding", price: 50 },
    { _id: 2, name: "Dry Cleaning", description: "Expert dry cleaning for delicate garments", price: 100 },
    { _id: 3, name: "Ironing", description: "Crisp ironing for a polished look", price: 30 },
    { _id: 4, name: "Stain Removal", description: "Specialized treatment for tough stains", price: 80 },
    { _id: 5, name: "Shoe Cleaning", description: "Thorough cleaning for shoes & sneakers", price: 70 },
    { _id: 6, name: "Curtain Wash", description: "Deep cleaning for curtains & drapes", price: 150 },
    { _id: 7, name: "Sofa Cleaning", description: "Fresh and spotless sofa cleaning", price: 200 },
    { _id: 8, name: "Bed Linen Wash", description: "Comfortable & hygienic bedding", price: 120 },
    { _id: 9, name: "Shirt Laundry", description: "Perfectly pressed shirts", price: 25 },
    { _id: 10, name: "Baby Clothes", description: "Gentle wash for your baby's clothes", price: 60 },
    { _id: 11, name: "Pool Towels & Sheets", description: "Clean and fresh towels for pool/spa", price: 90 },
    { _id: 12, name: "Premium Package", description: "All-in-one premium laundry service", price: 350, recommended: true },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setServicesData(staticServices);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getServiceIcon = (name) => {
    if (name.includes("Wash") || name.includes("Shirt")) return <FaTshirt className="text-blue-600 text-4xl" />;
    if (name.includes("Shoe")) return <FaShoePrints className="text-blue-600 text-4xl" />;
    if (name.includes("Bed") || name.includes("Linen")) return <FaBed className="text-blue-600 text-4xl" />;
    if (name.includes("Sofa")) return <FaCouch className="text-blue-600 text-4xl" />;
    if (name.includes("Baby")) return <FaBaby className="text-blue-600 text-4xl" />;
    if (name.includes("Pool")) return <FaSwimmingPool className="text-blue-600 text-4xl" />;
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
      <h1 className="text-3xl font-bold text-center mb-12">Our Premium Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center relative"
          >
            {item.recommended && (
              <span className="absolute top-3 right-3 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Recommended
              </span>
            )}
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

import React, { useState } from "react";

const PriceEstimator = () => {
  const [qty, setQty] = useState(1);
  const [fabric, setFabric] = useState("cotton");
  const [stain, setStain] = useState(false);

  const basePrice = fabric === "silk" ? 120 : 60;
  const stainCharge = stain ? 40 : 0;
  const total = qty * (basePrice + stainCharge);

  const recommendedService =
    fabric === "silk" || stain
      ? "Dry Cleaning + Stain Removal"
      : "Wash & Fold";

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">
        Smart Price Estimator
      </h2>

      <label className="block mb-2">Quantity</label>
      <input
        type="range"
        min="1"
        max="20"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="w-full"
      />
      <div className="mb-4 text-center">{qty} items</div>

      <label className="block mb-2">Fabric Type</label>
      <select
        value={fabric}
        onChange={(e) => setFabric(e.target.value)}
        className="w-full border rounded-lg p-2 mb-4"
      >
        <option value="cotton">Cotton</option>
        <option value="silk">Silk</option>
      </select>

      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={stain}
          onChange={() => setStain(!stain)}
        />
        Stain present
      </label>

      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="font-medium">Recommended Service</p>
        <p className="text-blue-600">{recommendedService}</p>
        <p className="mt-2 text-lg font-bold">₹{total}</p>
      </div>
    </div>
  );
};

export default PriceEstimator;

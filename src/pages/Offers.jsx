export default function Offers() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Special Offers & Deals
      </h1>

      {/* Main Offer section */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          🎁 Flat 20% OFF on First Order
        </h2>
        <p className="text-gray-600 text-lg">
          New user gets instant 20% discount on first laundry booking. No coupon needed.
        </p>
      </div>

      {/* Offers list */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">👕 Wash & Fold Combo</h3>
          <p className="text-gray-600 mb-2">Get combo price per KG</p>
          <p className="font-bold text-blue-600 text-lg">₹60/KG Only</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">🧼 Dry Cleaning Special</h3>
          <p className="text-gray-600 mb-2">On premium items</p>
          <p className="font-bold text-blue-600 text-lg">UP TO 30% OFF</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">🛏️ Bed Sheet + Quilt</h3>
          <p className="text-gray-600 mb-2">Combo pack savings</p>
          <p className="font-bold text-blue-600 text-lg">₹199 Only</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10">
        *Offers valid for limited period only. Terms apply.
      </p>
    </div>
  );
}

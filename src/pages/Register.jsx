import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [contact, setContact] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "bcd3082d-3e74-4c4c-a87c-d57d7c9d5709");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (data.success) {
      navigate("/thank-you");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Register with Laundry Hamper
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block font-medium mb-1">Name *</label>
            <input name="name" required className="w-full border rounded-lg p-3" />
          </div>

          <div>
            <label className="block font-medium mb-1">Gender *</label>
            <select name="gender" required className="w-full border rounded-lg p-3">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Contact Number *</label>
            <input
              name="contact"
              required
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Whatsapp Number</label>
            <input
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="optional"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) setWhatsapp(contact);
                  else setWhatsapp("");
                }}
                className="mr-2"
              />
              <span className="text-sm">Same as contact number</span>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Email (optional)</label>
            <input name="email" type="email" className="w-full border rounded-lg p-3" />
          </div>

          <div>
            <label className="block font-medium mb-1">Address (optional)</label>
            <textarea name="address" className="w-full border rounded-lg p-3" rows="3"></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

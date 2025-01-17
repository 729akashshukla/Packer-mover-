/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';

export default function OrderSummary() {
  const [order, setOrder] = useState({
    relocationAmount: 9450,
    addOns: [],
    tokenAmount: 1417
  });

  const handleAddOn = (type, price) => {
    setOrder(prev => ({
      ...prev,
      addOns: [...prev.addOns, { type, price }]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center mb-6">
          <ArrowLeft className="w-6 h-6 mr-3" />
          <h1 className="text-xl font-semibold">Order Summary</h1>
        </div>

        <div className="border rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Relocation Details</h2>
              <span className="text-xl">₹ {order.relocationAmount}</span>
            </div>
            <button className="text-teal-600">Edit</button>
          </div>
          <button className="text-purple-700">View inventory</button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Add Ons</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Cartons', 'Carpentry'].map(addon => (
              <div key={addon} className="border rounded-lg p-4">
                <h3 className="font-medium">{addon}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span>₹ {addon === 'Cartons' ? 60 : 1000}</span>
                  <button 
                    className="px-4 py-1 text-purple-700 border border-purple-700 rounded"
                    onClick={() => handleAddOn(addon, addon === 'Cartons' ? 60 : 1000)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold">Token Amount</h3>
          <span className="text-xl">₹ {order.tokenAmount}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Payment Summary</h2>
        <div className="mb-6">
          <div className="flex justify-between items-center text-white bg-purple-600 p-4 rounded">
            <span>Pay ₹ {order.tokenAmount} to confirm your booking</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span>Packers and Movers Service</span>
            <span>₹ {order.relocationAmount}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Amount to be Paid</span>
            <span>₹ {order.relocationAmount}</span>
          </div>
          <div className="flex justify-between text-teal-600">
            <span>Booking Amount</span>
            <span>₹ {order.tokenAmount}</span>
          </div>
        </div>

        <button className="w-full bg-red-500 text-white py-3 rounded-lg">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
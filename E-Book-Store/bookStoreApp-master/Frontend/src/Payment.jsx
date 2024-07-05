import React, { useState } from 'react';
import axios from 'axios';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = async (method) => {
    // Simulate payment processing with a backend API
    try {
      const res = await axios.post('http://localhost:4001/payments', { method });
      console.log(res.data); // Assuming backend responds with payment status
      // Handle success or failure message based on response
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle error
    }
  };

  return (
    <div className="container mx-auto md:px-20 px-4 py-8 min-h-screen">
      <h1 className="font-semibold text-2xl pb-4">Payment Options</h1>
      <p className="pb-4">
        Choose your preferred payment method below to complete your transaction.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment option: Paytm */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <img className="w-24 h-24 object-contain mb-4" src="https://thepatriot.in/wp-content/uploads/2024/02/Paytm.jpg" alt="Paytm Logo" />
          <h2 className="text-xl font-bold mb-2">Paytm</h2>
          <p className="text-gray-700 dark:text-gray-300">Pay using your Paytm wallet or QR code.</p>
          <button
            onClick={() => handlePayment('paytm')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Pay with Paytm
          </button>
        </div>

        {/* Payment option: Google Pay */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <img className="w-24 h-24 object-contain mb-4" src="https://www.lifewire.com/thmb/Xea9lCp9uYD6OjQBh4tbVTScUEM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/google-pay-symbols-5ace1e50642dca0036d97ffe.png" alt="Google Pay Logo" />
          <h2 className="text-xl font-bold mb-2">Google Pay</h2>
          <p className="text-gray-700 dark:text-gray-300">Use Google Pay to complete your transaction.</p>
          <button
            onClick={() => handlePayment('googlepay')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Pay with Google Pay
          </button>
        </div>

        {/* Payment option: PhonePe */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <img className="w-24 h-24 object-contain mb-4" src="https://i.pinimg.com/736x/dd/53/85/dd5385fb5b726cb74171930c4db4ca5b.jpg" alt="PhonePe Logo" />
          <h2 className="text-xl font-bold mb-2">PhonePe</h2>
          <p className="text-gray-700 dark:text-gray-300">Complete your payment using PhonePe.</p>
          <button
            onClick={() => handlePayment('phonepe')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Pay with PhonePe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;

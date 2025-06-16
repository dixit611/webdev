// src/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">About Us</h2>
        
        <h3 className="text-3xl font-bold  text-gray-800">E-Book Store Overview</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
        An E-book store is an online platform that allows users to purchase and download electronic books. These stores provide a convenient way for readers to access a wide range of books without the need for physical copies. Key features typically include a vast catalog of e-books, user-friendly interfaces, secure payment gateways, and compatibility with various reading devices..
        </p>


        <br></br>
        <h3 className="text-3xl font-bold  text-gray-800 dark:text-white mb-6">Key Features of an E-Book Store</h3>
        <ul className="font-bold text-gray-800">User Authentication:
        </ul>
        <li className="text-gray-800">User registration and login.</li>
        <li className="text-gray-800">Secure authentication mechanisms.</li>
        <li className="text-gray-800">Profile management.</li>

        <br></br>

        <ul className="font-bold text-gray-800">Catalog Management:
        </ul>
        <li className="text-gray-800">Extensive library of e-books categorized by genres, authors, and ratings.</li>
        <li className="text-gray-800">Search functionality to find specific titles or authors.</li>
        <li className="text-gray-800">Detailed book descriptions and previews.</li>
        <br></br>

        <ul className="font-bold text-gray-800">Payment Integration:
        </ul>
        <li className="text-gray-800">Integration with payment gateways (Google Pay, Paytm, PhonePe).</li>
        <li className="text-gray-800">Secure payment processing.</li>
        <li className="text-gray-800">Order confirmation and receipts.</li>
        <br></br>

        <ul className="font-bold text-gray-800">User Authentication:
        </ul>
        <li className="text-gray-800">Users must create an account to access the store's features.</li>
        <li className="text-gray-800">Users must create an account to access the store's features.</li>
        <li className="text-gray-800">Users must create an account to access the store's features.</li>




        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our mission is to make a positive impact through our innovative solutions and exceptional customer service. Thank you for choosing us and being a part of our journey.
        </p>
      </div>
    </div>
  );
};

export default About;

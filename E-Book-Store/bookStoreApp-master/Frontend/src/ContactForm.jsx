import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate mobile number to contain only numeric digits
    if (name === 'mobile') {
      const isNumeric = /^\d*$/.test(value);
      if (!isNumeric) {
        setErrors({
          ...errors,
          mobile: 'Mobile number must contain only numeric digits'
        });
      } else {
        setErrors({
          ...errors,
          mobile: ''
        });
      }
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
    if (!errors.mobile) {
      alert('Form submitted successfully!');
      // You can also integrate with an email service or backend here
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Contact Us</h2>
        
        <div className="relative mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        
        <div className="relative mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        
        <div className="relative mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={`block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200 ${
              errors.mobile ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>

        <div className="relative mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        
        <div className="relative mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-200"
          ></textarea>
        </div>
        
        <button type="submit" className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

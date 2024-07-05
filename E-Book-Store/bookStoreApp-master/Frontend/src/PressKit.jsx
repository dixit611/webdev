import React from 'react';

function PressKit() {
  return (
    <div className="container mx-auto md:px-20 px-4 min-h-screen py-8">
      <h1 className="font-semibold text-2xl pb-4">Press Kit</h1>
      <p className="pb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet, ligula sed cursus dictum, magna sapien convallis nulla, eget vehicula erat libero eget eros. Mauris tristique lacus at sapien convallis, ac vehicula magna vehicula. Phasellus id nisi eget arcu tincidunt tempus. Proin ac orci et sapien accumsan facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer auctor elit vitae cursus tincidunt.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <img className="w-full h-48 object-cover rounded-t-lg mb-4" src="https://via.placeholder.com/300" alt="Press Kit Image" />
          <h2 className="text-xl font-bold mb-2">Company Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">Get to know our company's mission, vision, and values. Learn about our journey, milestones, and the impact we aim to make in the industry.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Download PDF</button>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <img className="w-full h-48 object-cover rounded-t-lg mb-4" src="https://via.placeholder.com/300" alt="Press Kit Image" />
          <h2 className="text-xl font-bold mb-2">Media Assets</h2>
          <p className="text-gray-700 dark:text-gray-300">Access our logo, product images, and other media assets. These resources are available for press and media use in articles and publications.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Download Assets</button>
        </div>
        {/* Add more press kit sections similarly */}
      </div>
    </div>
  );
}

export default PressKit;

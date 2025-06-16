import React from 'react';

function Jobs() {
  return (
    <div className="container mx-auto md:px-20 px-4 min-h-screen py-8">
      <h1 className="font-semibold text-2xl pb-4">Job Opportunities</h1>
      <p className="pb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet, ligula sed cursus dictum, magna sapien convallis nulla, eget vehicula erat libero eget eros. Mauris tristique lacus at sapien convallis, ac vehicula magna vehicula. Phasellus id nisi eget arcu tincidunt tempus. Proin ac orci et sapien accumsan facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer auctor elit vitae cursus tincidunt.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <img className="w-full h-48 object-cover rounded-t-lg mb-4" src="https://via.placeholder.com/300" alt="Job Image" />
          <h2 className="text-xl font-bold mb-2">Software Engineer</h2>
          <p className="text-gray-700 dark:text-gray-300">We are looking for a skilled software engineer to join our team. The ideal candidate will have experience in developing web applications using modern frameworks.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Apply Now</button>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 dark:bg-slate-800">
          <img className="w-full h-48 object-cover rounded-t-lg mb-4" src="https://via.placeholder.com/300" alt="Job Image" />
          <h2 className="text-xl font-bold mb-2">Product Manager</h2>
          <p className="text-gray-700 dark:text-gray-300">We are seeking a passionate product manager who can lead cross-functional teams to create and deliver innovative products that meet customer needs.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Apply Now</button>
        </div>
        {/* Add more job listings similarly */}
      </div>
    </div>
  );
}

export default Jobs;

import React from 'react';

const LoadingPlaceholder = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="mb-16">
        <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
        <div className="h-12 bg-gray-300 rounded-full w-48 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="md:w-1/2">
          <div className="h-64 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      <div className="mb-16">
        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
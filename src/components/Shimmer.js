import React from 'react';

const Shimmer = () => {
  return (
    <div className="px-6 py-4 animate-pulse">
      {/* Title Placeholder */}
      <div className="h-8 w-1/4 bg-slate-700 rounded-md mb-4"></div>
      
      {/* Movie Cards Placeholder */}
      <div className="flex space-x-4">
        {/* Create an array of 10 items to map over for the shimmer cards */}
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-48 md:w-56 flex-shrink-0">
              <div className="h-64 md:h-72 bg-slate-700 rounded-lg"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
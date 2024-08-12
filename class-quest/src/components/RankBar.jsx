import React from 'react';

const RankBar = ({ level, percent }) => {


  return (
    <div className="w-full relative">
      <h2 className="absolute inset-0 flex items-center justify-center text-black">
        LEVEL {level} - {percent.toFixed(0)}%
      </h2>
      <div className="shadow bg-gray-300 mt-2 w-full rounded">
        <div
          className="bg-green-500 text-xs leading-none py-3 rounded"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RankBar;

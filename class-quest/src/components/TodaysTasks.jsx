import React from 'react';

const TodaysTasks = ({ work }) => {
  const dateObj = new Date(work.term);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // 月は0から始まるので1を加算
  const day = dateObj.getDate();

  return (
    <div className='flex flex-col items-start p-4 border border-gray-300 rounded-lg shadow-md mb-2'>
      <div className='flex items-center mb-4'>
        <div className='flex flex-col items-center mr-4'>
          <p className='text-2xl font-bold'>{year}</p>
          <p className='text-lg text-gray-600'>{month}/{day}</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold mb-2'>{work.lecture}</h2>
          <h3 className='text-lg text-gray-700'>{work.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TodaysTasks;

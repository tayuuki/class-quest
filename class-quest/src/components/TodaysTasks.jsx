import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TodaysTasks = ({ work }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const dateObj = new Date(work.term);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // 月は0から始まるので1を加算
  const day = dateObj.getDate();

  const handleClick = () => {
    navigate('/task', {
      state: {
        work
      }
    });
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div 
      className='flex items-center p-4 border border-gray-300 rounded-lg shadow-md mb-2 cursor-pointer' 
      onClick={handleClick}
    >
      <div className='flex flex-grow items-start'>
        <div className='flex flex-col items-center mr-4'>
          <p className='text-2xl font-bold'>{year}</p>
          <p className='text-lg text-gray-600'>{month}/{day}</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold mb-2'>{work.lesson}</h2>
          <h3 className='text-lg text-gray-700'>{work.name}</h3>
        </div>
      </div>
      <div className='ml-4'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleCheckboxChange}
          className='form-checkbox h-6 w-6 text-blue-500'
        />
      </div>
    </div>
  );
};

export default TodaysTasks;

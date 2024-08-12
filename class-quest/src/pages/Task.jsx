import React from 'react';
import Header from '../components/Header';
import TodaysTasks from '../components/TodaysTasks';

const Task = ({ works }) => {
  const sortedWorks = [...works].sort((a, b) => new Date(b.term) - new Date(a.term));

  return (
    <div>
      <Header />
      <div className='p-8 bg-gray-50 min-h-screen'>
        <div className='grid grid-cols-1 gap-4'>
          {sortedWorks.map((work) => (
            <TodaysTasks key={work.id} work={work} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodaysClass = ({ schedule, dow, userid }) => {
  const navigate = useNavigate();

  const periods = [1, 2, 3, 4, 5];
  const scheduleByPeriod = periods.map(period => {
    const classInfo = schedule.find(s => s.period === period);
    return classInfo ? classInfo.lesson : '';
  });

  const handleClick = (userid, lesson) => {
    navigate("/class", {
      state: {
				userid,
        lesson
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">{dow}</h2>
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">時間割</th>
            <th className="border px-4 py-2 text-center">授業名</th>
          </tr>
        </thead>
        <tbody>
          {scheduleByPeriod.map((lesson, index) => (
            <tr 
              key={index} 
              onClick={() => handleClick(userid, lesson)}
              className="cursor-pointer hover:bg-gray-200"
            >
              <td className="shadow border px-4 py-2 text-center">{index + 1}限</td>
              <td className="shadow border px-4 py-2 text-center">{lesson}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodaysClass;

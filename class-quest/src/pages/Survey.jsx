import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Survey = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userid, lesson, index } = location.state || {};

  const [attendance, setAttendance] = useState('present');
  const [understand, setUnderstand] = useState(1);
  const [isWork, setIsWork] = useState('no');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/survey', {
        user_id: userid,
        lesson,
        num: index,
        attend: attendance === 'present',
        understand,
        iswork: isWork === 'yes'
      });
			navigate("/class", {
				state: {
					userid,
					lesson
				}
			});
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">第{index}回のアンケート</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-2">出席状況</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center cursor-pointer">
                <div className={`relative flex items-center ${attendance === 'present' ? 'bg-blue-500' : 'bg-gray-200'} p-2 rounded-full`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="present"
                    checked={attendance === 'present'}
                    onChange={(e) => setAttendance(e.target.value)}
                    className="absolute opacity-0"
                  />
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    {attendance === 'present' && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-gray-700">出席</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <div className={`relative flex items-center ${attendance === 'absent' ? 'bg-red-500' : 'bg-gray-200'} p-2 rounded-full`}>
                  <input
                    type="radio"
                    name="attendance"
                    value="absent"
                    checked={attendance === 'absent'}
                    onChange={(e) => setAttendance(e.target.value)}
                    className="absolute opacity-0"
                  />
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    {attendance === 'absent' && (
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-gray-700">欠席</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">理解度 (1-10)</label>
            <input
              type="range"
              min="1"
              max="10"
              value={understand}
              onChange={(e) => setUnderstand(Number(e.target.value))}
              className="w-full"
              step="1"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>1</span>
              <span>10</span>
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">宿題</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center cursor-pointer">
                <div className={`relative flex items-center ${isWork === 'yes' ? 'bg-green-500' : 'bg-gray-200'} p-2 rounded-full`}>
                  <input
                    type="radio"
                    name="work"
                    value="yes"
                    checked={isWork === 'yes'}
                    onChange={(e) => setIsWork(e.target.value)}
                    className="absolute opacity-0"
                  />
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    {isWork === 'yes' && (
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-gray-700">あり</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <div className={`relative flex items-center ${isWork === 'no' ? 'bg-gray-400' : 'bg-gray-200'} p-2 rounded-full`}>
                  <input
                    type="radio"
                    name="work"
                    value="no"
                    checked={isWork === 'no'}
                    onChange={(e) => setIsWork(e.target.value)}
                    className="absolute opacity-0"
                  />
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    {isWork === 'no' && (
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-gray-700">なし</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            提出
          </button>
        </form>
      </div>
    </div>
  );
};

export default Survey;

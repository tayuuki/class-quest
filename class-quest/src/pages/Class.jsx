import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useLocation, useNavigate } from 'react-router-dom';
import TodaysTasks from '../components/TodaysTasks';
import Header from '../components/Header';

ChartJS.register(ArcElement, Tooltip, Legend);

const Class = ({ works, lists, surveys }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userid, lesson } = location.state || {};
  
  const filteredWorks = works.filter(work => work.user_id === userid && work.lesson === lesson);
  const filteredLists = lists.filter(list => list.user_id === userid && list.lesson === lesson);
  const filteredSurveys = surveys.filter(survey => survey.user_id === userid && survey.lesson === lesson);
  const list = filteredLists[0];
  
  const class_num = 15;

  const data = {
    labels: ['出席', '欠席'],
    datasets: [
      {
        data: [list.attend, class_num - list.attend],
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverBackgroundColor: ['#66BB6A', '#EF5350'],
        borderWidth: 2,
      },
    ],
  };


  const handleClick = (index) => {
    navigate('/survey', {
      state: {
        userid,
        lesson,
        index: index + 1 
      }
    });
  };


  const sortedWorks = [...filteredWorks].sort((a, b) => new Date(a.term) - new Date(b.term));

  return (
		<div>
			<Header />
			<div className="p-8 bg-gray-50 min-h-screen flex flex-col">
				<div className="flex justify-center items-center space-x-6 mb-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-full">
					<div className="text-center">
						<h1 className="text-3xl font-bold text-gray-800">{lesson}</h1>
						<h2 className="text-xl text-gray-500 mt-2">{list.day} {list.period}限</h2>
					</div>
					<div className="w-64 h-64">
						<Doughnut data={data} />
					</div>
				</div>

				<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 w-full">
					{[...Array(class_num)].map((_, i) => (
						<div
							key={i}
							onClick={() => handleClick(i)}
							className={`p-6 text-center rounded-lg font-semibold cursor-pointer ${
								i < list.count ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'
							}`}
						>
							第{i + 1}回
						</div>
					))}
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">課題</h2>
					{sortedWorks.length > 0 ? (
						sortedWorks.map((work, index) => (
							<TodaysTasks key={index} work={work} />
						))
					) : (
						<p className="text-gray-600">No tasks for today.</p>
					)}
				</div>
			</div>
		</div>
  );
};

export default Class;


import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HomePopup from '../components/HomePopup';
import { useLocation } from 'react-router-dom';
import TodaysTasks from '../components/TodaysTasks';
import TodaysClass from '../components/TodaysClass';


const Home = ({ lectures, works, lists }) => {
	const location = useLocation();
  const { user } = location.state || {};
	const filteredLists = lists.filter(list => list.user_id === user.id);
	const filteredWorks = works.filter(work => work.user_id === user.id);
	const [dayOfWeek, setDayOfWeek] = useState('');
	const [sortedWorks, setSortedWorks] = useState([]);

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    setDayOfWeek(days[today.getDay()]);
  }, []);

	useEffect(() => {
    const sorted = [...filteredWorks].sort((a, b) => {
      const dateA = new Date(a.term);
      const dateB = new Date(b.term);
      return dateA - dateB;
    });
    setSortedWorks(sorted);
  }, [filteredWorks]);
	
	const schedule = filteredLists.filter(list => list.day === dayOfWeek);
	const sortedSchedule = [...schedule].sort((a, b) => a.period - b.period);

	const max = 1000;

	return (
		<div>
			<Header />
			<div>
				<HomePopup rank={user.xp} max={max} />
				<div>
					<div className='flex flex-col md:flex-row'>
						<div className='md:w-1/2'>
						<h2 className="text-2xl font-bold my-4 ml-5">Home Works</h2>
              {sortedWorks.length > 0 ? (
                <div className='m-5'>
                  {sortedWorks.map((work) => (
                    <TodaysTasks work={work} />
                  ))}
                </div>
              ) : (
                <p>No lists found for this user.</p>
              )}
						</div>
						<div className='md:w-1/2 m-5'>
							<TodaysClass schedule={sortedSchedule} dow={dayOfWeek} userid={user.id}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

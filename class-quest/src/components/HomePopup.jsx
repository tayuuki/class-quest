import React from 'react';
import RankBar from './RankBar';

const HomePopup = ({ rank, max }) => {
	const level = Math.floor(rank / max);
  const percent = (rank % max) / max * 100;

	return (
		<div className='bg-gray-100 shadow-md m-5 border border-gray-300 rounded-lg'>
			<div className='flex p-5'>
				<div className='border border-gray-300 rounded-lg p-4'>
					<img src='./img/rank1.png' alt='image' className='m-auto'/>
				</div>
				<div className='ml-5 w-full'>
					<div>
						<h2>今日までの課題</h2>
					</div>
					<div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
						<RankBar level={level} percent={percent}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePopup;
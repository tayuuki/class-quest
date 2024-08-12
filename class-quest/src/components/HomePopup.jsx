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
						<h2 className='text-2xl font-semibold'>今日までの課題</h2>

						<div className='flex items-center p-4 border border-gray-300 rounded-lg shadow-md cursor-pointer m-4 mb-4'>
							<div className='flex flex-grow items-start'>
								<div className='flex flex-col items-center mr-4'>
									<p className='text-2xl font-bold'>2024</p>
									<p className='text-lg text-gray-600'>8/12</p>
								</div>
								<div className='flex flex-col'>
									<h2 className='text-xl font-semibold mb-2'>積分法</h2>
									<h3 className='text-lg text-gray-700'>問題集</h3>
								</div>
							</div>
						</div>

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
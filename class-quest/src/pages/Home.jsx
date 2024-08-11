import React from 'react';
import Header from '../components/Header';
import HomePopup from '../components/HomePopup';
import { useLocation } from 'react-router-dom';

const Home = ({ lectures, works, lists }) => {
	const location = useLocation();
  const { user } = location.state || {};
	const filteredLists = lists.filter(list => list.user_id === user.id);
	// const userLectures = filteredLists.map(list => {
	// 	const lecture = lectures.find(lecture => lecture.id === list.lesson_id);
	// 	return {
	// 		...list,
	// 		lecture // 結果にレクチャーの詳細を含める
	// 	};
	// });
  const max = 1000;

	return (
		<div>
			<Header />
			<div>
				<HomePopup rank={user.xp} max={max} />
				<div>
					<div>
						<div>
							<p>{user.name}</p>
							<p>{lists[0].id}</p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Home;

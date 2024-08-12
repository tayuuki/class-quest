import React from 'react';
import Header from '../components/Header';
import RankBar from '../components/RankBar';

const Ranking = ({ users }) => {
  // XPでソート
  const sortedUsers = [...users].sort((a, b) => b.xp - a.xp);

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">ランキング</h1>
        <div className="space-y-4">
          {sortedUsers.map((user, index) => {
            const level = Math.floor(user.xp / 1000);
            const percent = (user.xp % 1000) / 10; // XPの1000未満部分の割合をパーセントに変換

            let backgroundColor, textColor, borderColor;
            switch (index) {
              case 0:
                backgroundColor = 'bg-yellow-300'; 
                textColor = 'text-yellow-900';
                borderColor = 'border-yellow-500';
                break;
              case 1:
                backgroundColor = 'bg-gray-300';
                textColor = 'text-gray-800';
                borderColor = 'border-gray-500';
                break;
              case 2:
                backgroundColor = 'bg-orange-300';
                textColor = 'text-orange-800';
                borderColor = 'border-orange-500';
                break;
              default:
                backgroundColor = 'bg-white';
                textColor = 'text-gray-900';
                borderColor = 'border-gray-300';
            }

            return (
              <div
                key={user.id}
                className={`flex p-4 border rounded-lg shadow-md ${backgroundColor} ${textColor} border ${borderColor}`}
              >
                <div className="flex-grow w-1/3">
                  <h2 className={`text-2xl ${index < 3 ? 'font-bold' : 'font-semibold'}`}>
                    {index + 1}. {user.name}
                  </h2>
                  <p className="text-lg text-center">{user.username}</p>
                  <p className="text-md text-center">XP: {user.xp}</p>
                  <p className="text-md text-center">Level: {level}</p>
                </div>
                <RankBar level={level} percent={percent} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ranking;

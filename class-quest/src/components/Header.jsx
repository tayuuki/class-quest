import React from 'react';
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">授業クエスト</h1>
        <div className="space-x-4">
          <button onClick={() => navigate("/task")} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Task
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Account
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
            Search
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Ranking
          </button>
          <button onClick={() => 
                navigate("/home", { 
                  state: { 
                    user: {
                      id: 1,
                      intro: "I am a first-year student studying economics.",
                      lesson: "Economics, Law",
                      name: "蔵原りょう",
                      password: "password1",
                      rank: 5,
                      university: "University of Tokyo",
                      username: "user1",
                      xp: 2200
                    }
                  } 
                })}
             className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
            Home
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

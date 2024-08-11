import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">授業クエスト</h1>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Task
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Account
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
            Search
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
            Home
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

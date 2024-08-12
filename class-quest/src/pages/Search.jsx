import React, { useState } from 'react';
import Header from '../components/Header';

const Search = ({ lectures }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLectures, setFilteredLectures] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term) {
      const filtered = lectures.filter((lecture) =>
        lecture.lesson.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredLectures(filtered);
    } else {
      setFilteredLectures([]);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">授業を検索</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="授業名で検索..."
          className="border p-2 w-full rounded mb-4"
        />
        <div className="space-y-4">
          {filteredLectures.length > 0 ? (
            filteredLectures.map((lecture) => (
              <div
                key={lecture.id}
                className="p-4 border rounded-lg shadow-md bg-white"
              >
                <h2 className="text-xl font-semibold">{lecture.lesson}</h2>
                <p className="text-gray-600">
                  曜日: {lecture.day}, 時限: {lecture.period}
                </p>
              </div>
            ))
          ) : (
            <p>授業が見つかりません</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

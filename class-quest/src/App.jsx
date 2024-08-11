import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [users, setUsers] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [works, setWorks] = useState([]);
  const [lists, setLists] = useState([]);
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchLectures = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/lecture');
      setLectures(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchWorks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/work');
      setWorks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/list');
      setLists(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} />} />
          <Route path='/home' element={<Home lectures={lectures} works={works} lists={lists} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

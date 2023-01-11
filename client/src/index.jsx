import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesFeed from './components/GamesFeed.jsx';
import Login from './components/Login.jsx';
import Rankings from './components/Rankings.jsx';
import NavBar from './components/NavBar.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gamesfeed" element={<GamesFeed />} />
        <Route path="/rankings" element={<Rankings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

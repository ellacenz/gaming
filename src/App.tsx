import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import FirstApp from './App1';
import Home from './Home';
import SecondApp from './App2';
import AppHistory from './AppHistory';
import Main from './Main';

export  interface PlayerDetailsInterface{
  player: string;
  game: any;
  beginTime: Date;
  endTime: Date;
  limit: number;
  speed: number;
  score: number
}

function App() {
  return (
    <>
    <HashRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/game/:gameType' element={<Main  />}></Route>
      <Route path='/game/:gameType' element={<Main />}></Route>
      <Route path='/apphistory' element={<AppHistory />}></Route>
    </Routes>
    <Footer />
    </HashRouter>
    </>
  );
}

export default App;

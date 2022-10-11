import React from 'react';
import Header from './components/Header';
import HomeWork1 from './9-homeworks/Session01/HomeWork1';
import Footer from './components/Footer';
import Baitap1 from './9-homeworks/Session02/Baitap1/Baitap1';
import Baitap2 from './9-homeworks/Session02/Baitap2/Baitap2';
import Baitap3 from './9-homeworks/Session02/Baitap3/Baitap3';
import './App.css';

function App() {
  let header = 'The Pulpit Rock'
  let isLogin = true
  return (
    <>
      
      <Baitap1/>
      <Baitap2/>
      <Baitap3/>
    </>
  );
}

export default App;

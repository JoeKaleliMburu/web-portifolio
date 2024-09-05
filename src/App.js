import React from 'react';
import Navbar from './components/Navbar';
import ProfileSection from './components/Profile';
import Ministry from './components/Ministry';
import Family from './components/Family';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ProfileSection />
      <Ministry />
      <Family />
      <Footer/>
    </div>
  );
};

export default App;

import React from 'react';
import { CssBaseline } from '@mui/material';
import Navigation from './components/Navigation/Navigation';
import HeroPage from './components/HeroPage/HeroPage';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Navigation />
      <HeroPage />
    </div>
  );
};

export default App;

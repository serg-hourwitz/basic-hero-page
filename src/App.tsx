import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Navigation from './components/Navigation/Navigation';
import HeroPage from './components/HeroPage/HeroPage';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navigation />
        </Toolbar>
      </AppBar>

      {/* Основний контент */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <HeroPage />
      </Box>
    </>
  );
};

export default App;

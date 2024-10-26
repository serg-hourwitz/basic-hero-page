import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.png';

const Navigation: React.FC = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ padding: '10px 0' }}
      component={motion.div}
      initial={{ y: -200, opacity: 0 }}  // Початкове зміщення зліва
      animate={{ y: 0, opacity: 1 }}     // Кінцеве положення на екрані
      transition={{ type: 'spring', stiffness: 50, damping: 50, delay: 0.5 }} // Плавне переміщення
    >
      <Toolbar
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Логотип */}
        <Box
          component="img"
          src={logoImg} // Змініть на шлях до вашого логотипу
          alt="Logo"
          sx={{ height: 60 }} // Висота логотипу
        />

        {/* Поле пошуку */}

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            sx={{
              width: '80%',
              '& .MuiInputLabel-root': {
                color: '#452121', // Колір мітки
                fontWeight: '400',
                fontFamily: 'Montserrat',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#452121', // Колір мітки при фокусі
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#452121', // Колір рамки
                },
                '&:hover fieldset': {
                  boxShadow: 'inset 0 0 10px #ccc',
                  transition: '0.5s',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#452121', // Колір рамки при фокусі
                },
                color: '#452121', // Колір тексту вводу
                fontFamily: 'Montserrat',
              },
            }}
          />
        </Box>

        {/* Кнопки навігації */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            color="inherit"
            sx={{ transition: '0.8s', fontFamily: 'Montserrat' }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{ transition: '0.8s', fontFamily: 'Montserrat' }}
          >
            Features
          </Button>
          <Button
            color="inherit"
            sx={{ transition: '0.8s', fontFamily: 'Montserrat' }}
          >
            Pricing
          </Button>
          <Button
            color="inherit"
            sx={{ transition: '0.8s', fontFamily: 'Montserrat' }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

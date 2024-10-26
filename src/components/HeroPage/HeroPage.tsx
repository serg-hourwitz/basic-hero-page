import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/bgd.jpg';

const HeroPage: React.FC = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }} // Довший час для фону
      sx={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay для затемнення фону */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Контейнер з текстом і кнопкою */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: 'easeOut' }} // Довша і більш плавна анімація
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 700, fontSize: '3rem', fontFamily: 'Montserrat' }}
          >
            Inspiring Hero Page
          </Typography>
        </motion.div>

        {/* Опис */}
        <motion.div
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: 'easeOut' }} // Затримка та довша тривалість
        >
          <Typography
            variant="h5"
            sx={{ marginTop: 2, fontFamily: 'Montserrat' }}
          >
            Discover the power of design with smooth animations and elegant
            navigation.
          </Typography>
        </motion.div>

        {/* Кнопка */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ delay: 2, duration: 2, ease: 'easeOut' }} // Затримка та плавна анімація для кнопки
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 20, fontWeight: 'bold', fontFamily: 'Montserrat' }}
            onClick={handleReload}
          >
            Reload Page
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroPage;

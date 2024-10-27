import PageContainer from '../PageContainer/PageContainer';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/bgd.jpg';
import { useState } from 'react';

const HeroPage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: 'easeInOut' }}
      sx={{
        position: 'relative',
        width: '90vw',
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
        filter: isHovered ? 'brightness(1.3)' : 'none',
        transition: 'filter 0.5s ease',
      }}
    >
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
      <PageContainer setIsHovered={setIsHovered} />
    </Box>
  );
};

export default HeroPage;

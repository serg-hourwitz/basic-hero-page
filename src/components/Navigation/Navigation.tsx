import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { AppBar } from '@mui/material';

const Navigation: React.FC = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ padding: '10px 0' }}
      component={motion.div}
      initial={{ y: -200, opacity: 0 }} // Початкове зміщення зліва
      animate={{ y: 0, opacity: 1 }} // Кінцеве положення на екрані
      transition={{ type: 'spring', stiffness: 50, damping: 50, delay: 0.5 }} // Плавне переміщення
    >
      <Navbar />
    </AppBar>
  );
};

export default Navigation;

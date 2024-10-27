import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const ReloadButton: React.FC = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ delay: 2, duration: 2, ease: 'easeOut' }} // Затримка та плавна анімація 
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
    </>
  );
};

export default ReloadButton;

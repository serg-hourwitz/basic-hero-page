import { Button } from '@mui/material';
import AnimatedBox from '../AnimatedBox/AnimatedBox';

const ReloadButton: React.FC = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      <AnimatedBox
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
      </AnimatedBox>
    </>
  );
};

export default ReloadButton;

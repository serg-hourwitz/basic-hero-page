import { Button } from '@mui/material';
import AnimatedBox from '../AnimatedBox/AnimatedBox';

interface ReloadButtonProps {
  setIsHovered: (hovered: boolean) => void;
}

const ReloadButton: React.FC<ReloadButtonProps> = ({ setIsHovered }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <AnimatedBox
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.8, scale: 1 }}
      transition={{ delay: 2, duration: 2, ease: 'easeOut' }}
    >
      <Button
        variant="contained"
        size="large"
        color="primary"
        sx={{ marginTop: 20, fontWeight: 'bold', fontFamily: 'Montserrat' }}
        onClick={handleReload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Reload Page
      </Button>
    </AnimatedBox>
  );
};

export default ReloadButton;

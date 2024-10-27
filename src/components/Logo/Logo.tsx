import { Box } from '@mui/material';
import logoImg from '../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <>
      <Box
        component="img"
        src={logoImg} 
        alt="Logo"
        sx={{ height: 60 }} 
      />
    </>
  );
};

export default Logo;

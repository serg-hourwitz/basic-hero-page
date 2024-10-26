import { Box } from '@mui/material';
import logoImg from '../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <>
      <Box
        component="img"
        src={logoImg} // Змініть на шлях до вашого логотипу
        alt="Logo"
        sx={{ height: 60 }} // Висота логотипу
      />
    </>
  );
};

export default Logo;

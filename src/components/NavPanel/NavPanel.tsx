import NavButton from '../NavButton/NavButton';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton';
import { Box } from '@mui/material';

const NavPanel: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          '@media (max-width: 900px)': {
            width: '100vw', 
          },
        }}
      >
        <ToggleThemeButton />
        <NavButton label="Home" />
        <NavButton label="Features" />
        <NavButton label="Pricing" />
        <NavButton label="Contact" />
      </Box>
    </>
  );
};

export default NavPanel;

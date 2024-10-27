import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import NavPanel from '../NavPanel/NavPanel';
import { Toolbar } from '@mui/material';
import { motion } from 'framer-motion';


const Navbar: React.FC = () => {
  return (
    <>
      <Toolbar
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <Logo />

        <Search />

        <NavPanel />

      </Toolbar>
    </>
  );
};

export default Navbar;

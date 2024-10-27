import React from 'react';
import { Button } from '@mui/material';

interface NavButtonProps {
  label: string;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      color="inherit"
      sx={{
        transition: '0.8s',
        fontFamily: 'Montserrat',
        '&:hover': {
          color: '#3f51b5', 
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavButton;

import { IconButton } from "@mui/material";
import { useThemeContext } from "../CustomThemeProvider/CustomThemeProvider";
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ToggleThemeButton: React.FC = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <>
      <IconButton onClick={toggleTheme} color="inherit">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </>
  );
}


export default ToggleThemeButton;



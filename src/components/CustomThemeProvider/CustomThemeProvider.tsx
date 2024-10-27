import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Тип для контексту теми
interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be used within a CustomThemeProvider'
    );
  }
  return context;
};

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode: any) => !prevMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: darkMode ? '#452121' : '#1C65AD',
          },
        },
        typography: {
          fontFamily: 'Montserrat, Arial, sans-serif',
        },
      }),
    [darkMode]
  );

  return (
    <div
      style={{
        transition: 'background-color 0.8s ease',
        backgroundColor: darkMode ? '#121212' : '#fff',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
};

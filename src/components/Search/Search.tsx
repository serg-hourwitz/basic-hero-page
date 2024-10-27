import { Box, TextField, useTheme } from '@mui/material';

const Search: React.FC = () => {
  const theme = useTheme(); // Отримуємо поточну тему

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
        sx={{
          width: '80%',
          '@media (max-width: 500px)': {
            width: '100%',
          },
          '& .MuiInputLabel-root': {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#452121', // Колір мітки
            fontWeight: '400',
            fontFamily: 'Montserrat',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#452121', // Колір мітки при фокусі
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor:
                theme.palette.mode === 'dark' ? '#ffffff' : '#452121', // Колір рамки
            },
            '&:hover fieldset': {
              boxShadow: 'inset 0 0 10px #ccc',
              transition: '0.5s',
            },
            '&.Mui-focused fieldset': {
              borderColor:
                theme.palette.mode === 'dark' ? '#ffffff' : '#452121', // Колір рамки при фокусі
            },
          },
          '& .MuiInputBase-input': {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#452121', // Колір тексту вводу
            fontWeight: '500',
            fontFamily: 'Montserrat',
          },
          '& .MuiInputAdornment-root .MuiSvgIcon-root': {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#452121', // Колір іконки очищення
          },
        }}
      />
    </Box>
  );
};

export default Search;

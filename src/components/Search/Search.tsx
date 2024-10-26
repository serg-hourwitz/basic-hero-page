import { Box, TextField } from '@mui/material';

const Search = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          sx={{
            width: '80%',
            '& .MuiInputLabel-root': {
              color: '#452121', // Колір мітки
              fontWeight: '400',
              fontFamily: 'Montserrat',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#452121', // Колір мітки при фокусі
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#452121', // Колір рамки
              },
              '&:hover fieldset': {
                boxShadow: 'inset 0 0 10px #ccc',
                transition: '0.5s',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#452121', // Колір рамки при фокусі
              },
              color: '#452121', // Колір тексту вводу
              fontFamily: 'Montserrat',
            },
          }}
        />
      </Box>
    </>
  );
};

export default Search;

import { Typography, TypographyProps } from '@mui/material';

interface TextProps extends TypographyProps {
  text: string;
}

const Text: React.FC<TextProps> = ({
  text,
  variant = 'body1',
  sx,
  ...rest
}) => {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: 'Montserrat',
        ...sx,
      }}
      {...rest}
    >
      {text}
    </Typography>
  );
};

export default Text;

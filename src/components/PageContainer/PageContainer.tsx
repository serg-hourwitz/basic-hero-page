import Text from '../Text/Text';
import ReloadButton from '../ReloadButton/ReloadButton';
import AnimatedBox from '../AnimatedBox/AnimatedBox';
import { Container } from '@mui/material';

const PageContainer: React.FC<{ setIsHovered: (hovered: boolean) => void }> = ({
  setIsHovered,
}) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Заголовок */}
        <AnimatedBox
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: 'easeOut' }}
        >
          <Text
            variant="h1"
            component="h1"
            text="Inspiring Hero Page"
            sx={{ fontWeight: 700, fontSize: '3rem' }}
          />
        </AnimatedBox>

        {/* Опис */}
        <AnimatedBox
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: 'easeOut' }}
        >
          <Text
            variant="h5"
            text="Discover the power of design with smooth animations and elegant navigation."
            sx={{ marginTop: 2 }}
          />
        </AnimatedBox>

        <ReloadButton setIsHovered={setIsHovered} />
      </Container>
    </>
  );
};

export default PageContainer;

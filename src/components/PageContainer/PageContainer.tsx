import Text from '../Text/Text';
import ReloadButton from '../ReloadButton/ReloadButton';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';

const PageContainer: React.FC = () => {
  
  return (
    <>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: 'easeOut' }} // Довша і більш плавна анімація
        >
          <Text
            variant="h1"
            component="h1"
            text="Inspiring Hero Page"
            sx={{ fontWeight: 700, fontSize: '3rem' }}
          />
        </motion.div>

        {/* Опис */}
        <motion.div
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: 'easeOut' }} // Затримка та довша тривалість
        >
          <Text
            variant="h5"
            text="Discover the power of design with smooth animations and elegant navigation."
            sx={{ marginTop: 2 }}
          />
        </motion.div>

        <ReloadButton />
      </Container>
    </>
  );
};

export default PageContainer;

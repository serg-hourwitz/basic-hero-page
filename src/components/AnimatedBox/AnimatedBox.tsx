import React from 'react';
import {
  motion,
  MotionProps,
  Target,
  Transition,
  VariantLabels,
} from 'framer-motion';
import { Box, SxProps, Theme } from '@mui/material';

interface AnimatedBoxProps
  extends Omit<MotionProps, 'initial' | 'animate' | 'transition'> {
  children: React.ReactNode;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | Target | VariantLabels;
  transition?: Transition;
  sx?: SxProps<Theme>;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8 },
  sx,
  ...rest
}) => {
  return (
    <Box
      component={motion.div}
      initial={initial}
      animate={animate}
      transition={transition}
      sx={sx}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AnimatedBox;

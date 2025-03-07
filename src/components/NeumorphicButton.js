import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const NeumorphicButton = ({ children, isDarkMode, ...props }) => {
  if (isDarkMode) {
    return (
      <Button {...props}>{children}</Button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        sx={{
          backgroundColor: '#E8E8E8',
          color: '#8B4513',
          borderRadius: '12px',
          padding: '10px 24px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff',
          border: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: '#E8E8E8',
            boxShadow: '4px 4px 8px #c5c5c5, -4px -4px 8px #ffffff',
          },
          '&:active': {
            boxShadow: 'inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff',
          },
          ...props.sx
        }}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default NeumorphicButton; 
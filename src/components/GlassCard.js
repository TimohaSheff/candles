import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const GlassCard = ({ children, isDarkMode, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Box
        sx={{
          background: isDarkMode 
            ? 'rgba(30, 30, 30, 0.7)'
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid',
          borderColor: isDarkMode 
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)',
          padding: '20px',
          boxShadow: isDarkMode
            ? '0 8px 32px rgba(0, 0, 0, 0.3)'
            : '0 8px 32px rgba(139, 69, 19, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: isDarkMode
              ? '0 8px 32px rgba(222, 184, 135, 0.1)'
              : '0 8px 32px rgba(139, 69, 19, 0.2)',
            borderColor: isDarkMode
              ? 'rgba(222, 184, 135, 0.2)'
              : 'rgba(139, 69, 19, 0.2)',
          },
          ...props.sx
        }}
        {...props}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default GlassCard; 
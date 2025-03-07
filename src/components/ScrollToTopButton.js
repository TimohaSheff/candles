import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        size="medium"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          background: isDarkMode
            ? 'linear-gradient(45deg, #DEB887 30%, #E6D5C3 90%)'
            : 'linear-gradient(45deg, #8B4513 30%, #A0522D 90%)',
          color: isDarkMode ? '#121212' : '#FFFFFF',
          '&:hover': {
            background: isDarkMode
              ? 'linear-gradient(45deg, #E6D5C3 30%, #DEB887 90%)'
              : 'linear-gradient(45deg, #A0522D 30%, #8B4513 90%)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton; 
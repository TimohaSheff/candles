import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  CircularProgress,
  Tooltip
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Advantages from '../components/Advantages';
import AnimatedIcon from '../components/AnimatedIcon';

function Home({ isDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      title: "Создавайте уникальные свечи своими руками",
      subtitle: "Откройте для себя искусство изготовления свечей",
      buttonText: "Начать обучение",
      buttonLink: "/instructions",
      buttonStyle: {
        backgroundColor: '#DEB887',
        color: '#000',
        '&:hover': {
          backgroundColor: '#E6D5C3'
        }
      }
    },
    {
      title: "Готовы начать создавать свечи?",
      subtitle: "Присоединяйтесь к нашему сообществу и создавайте уникальные свечи своими руками",
      buttonText: "Перейти в каталог",
      buttonLink: "/catalog",
      buttonStyle: {
        backgroundColor: '#DEB887',
        color: '#000',
        '&:hover': {
          backgroundColor: '#E6D5C3'
        }
      }
    }
  ];

  useEffect(() => {
    // Проверяем загрузку шрифтов
    document.fonts.ready.then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <Box sx={{ pt: 8 }}>
      {isLoading ? (
        <Box 
          sx={{ 
            height: { xs: '60vh', sm: '70vh', md: '80vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'
          }}
        >
          <CircularProgress color={isDarkMode ? 'primary' : 'inherit'} />
        </Box>
      ) : (
        <Box 
          sx={{ 
            backgroundColor: isDarkMode ? '#000000' : '#F5F5F5',
            height: { xs: '60vh', sm: '70vh', md: '80vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: isDarkMode ? 'white' : '#8B4513',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: isDarkMode ? 'none' : 'inset 0 0 50px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: isDarkMode 
                ? 'linear-gradient(45deg, rgba(222,184,135,0.1) 0%, rgba(0,0,0,0) 100%)'
                : 'linear-gradient(45deg, rgba(139,69,19,0.1) 0%, rgba(255,255,255,0) 100%)',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            },
            '&:hover::before': {
              opacity: 1
            }
          }}
        >
          <Tooltip title="Предыдущий слайд" arrow>
            <IconButton
              onClick={handlePrevSlide}
              sx={{
                position: 'absolute',
                left: { xs: 8, sm: 16 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: isDarkMode ? 'white' : '#8B4513',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 69, 19, 0.1)',
                backdropFilter: 'blur(4px)',
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(139, 69, 19, 0.2)'
                }
              }}
            >
              <AnimatedIcon icon={ArrowBackIosNewIcon} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Следующий слайд" arrow>
            <IconButton
              onClick={handleNextSlide}
              sx={{
                position: 'absolute',
                right: { xs: 8, sm: 16 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: isDarkMode ? 'white' : '#8B4513',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 69, 19, 0.1)',
                backdropFilter: 'blur(4px)',
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(139, 69, 19, 0.2)'
                }
              }}
            >
              <AnimatedIcon icon={ArrowForwardIosIcon} />
            </IconButton>
          </Tooltip>

          <Container maxWidth="md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.7,
                  ease: "easeInOut"
                }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 2,
                    color: isDarkMode ? 'white' : '#8B4513',
                    textShadow: isDarkMode 
                      ? '2px 2px 4px rgba(255, 255, 255, 0.25)'
                      : '2px 2px 4px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {slides[currentSlide].title}
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                    mb: 4,
                    color: isDarkMode ? 'white' : '#8B4513',
                    textShadow: isDarkMode 
                      ? '1px 1px 2px rgba(255, 255, 255, 0.25)'
                      : '1px 1px 2px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {slides[currentSlide].subtitle}
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={RouterLink}
                    to={slides[currentSlide].buttonLink}
                    variant="contained"
                    size="large"
                    sx={{
                      ...slides[currentSlide].buttonStyle,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      padding: { xs: '8px 16px', sm: '10px 20px' },
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(4px)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    {slides[currentSlide].buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <Box 
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              sx={{ 
                position: 'absolute', 
                bottom: 16, 
                left: '50%', 
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1
              }}
            >
              {[0, 1].map((index) => (
                <Box
                  key={index}
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: currentSlide === index 
                      ? (isDarkMode ? 'white' : '#8B4513')
                      : (isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(139, 69, 19, 0.5)'),
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                />
              ))}
            </Box>
          </Container>
        </Box>
      )}
      <Advantages />
    </Box>
  );
}

export default Home; 
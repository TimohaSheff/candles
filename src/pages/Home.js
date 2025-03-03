import React from 'react';
import { Container, Typography, Box, Button, Paper, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      py: { xs: 4, sm: 6 }
    }}>
      <Container maxWidth="md">
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, sm: 6 },
            background: isDarkMode 
              ? 'rgba(30, 30, 30, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            border: `1px solid ${isDarkMode 
              ? 'rgba(222, 184, 135, 0.1)'
              : 'rgba(139, 69, 19, 0.1)'}`,
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 700,
              color: isDarkMode ? '#DEB887' : '#8B4513',
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Добро пожаловать в мир ароматических свечей
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom 
            color="text.secondary"
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
            }}
          >
            Научитесь создавать прекрасные свечи своими руками
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 2, sm: 3 },
            flexWrap: 'wrap'
          }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/instructions')}
              sx={{
                minWidth: { xs: '100%', sm: 200 },
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
              Начать обучение
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/materials')}
              sx={{
                minWidth: { xs: '100%', sm: 200 },
                borderColor: isDarkMode ? '#DEB887' : '#8B4513',
                color: isDarkMode ? '#DEB887' : '#8B4513',
                '&:hover': {
                  borderColor: isDarkMode ? '#E6D5C3' : '#A0522D',
                  backgroundColor: isDarkMode 
                    ? 'rgba(222, 184, 135, 0.1)'
                    : 'rgba(139, 69, 19, 0.1)',
                },
              }}
            >
              Необходимые материалы
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home; 
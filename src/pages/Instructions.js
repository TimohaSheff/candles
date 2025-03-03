import React from 'react';
import { Container, Typography, Box, Stepper, Step, StepLabel, Paper, useTheme, useMediaQuery } from '@mui/material';

function Instructions() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const steps = [
    {
      label: 'Подготовка материалов',
      description: 'Подготовьте все необходимые материалы: воск, фитиль, ароматические масла, формы для свечей, термометр и емкость для плавления воска.'
    },
    {
      label: 'Плавление воска',
      description: 'Нагрейте воск до температуры 60-70°C в водяной бане. Следите за температурой с помощью термометра.'
    },
    {
      label: 'Добавление аромата',
      description: 'Когда воск достигнет нужной температуры, добавьте ароматические масла (примерно 5-10% от массы воска) и тщательно перемешайте.'
    },
    {
      label: 'Подготовка формы',
      description: 'Закрепите фитиль в форме для свечи, убедившись, что он расположен по центру и закреплен с обоих концов.'
    },
    {
      label: 'Заливка воска',
      description: 'Аккуратно залейте расплавленный воск в форму. Убедитесь, что фитиль остается по центру.'
    },
    {
      label: 'Охлаждение',
      description: 'Оставьте свечу остывать при комнатной температуре на 24 часа. Не перемещайте форму во время охлаждения.'
    },
    {
      label: 'Извлечение свечи',
      description: 'После полного остывания аккуратно извлеките свечу из формы. При необходимости подрежьте фитиль до длины 1-1.5 см.'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      py: { xs: 6, sm: 8, md: 10 }
    }}>
      <Container maxWidth={isLargeScreen ? 'xl' : 'lg'}>
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4, md: 6 },
            background: isDarkMode 
              ? 'rgba(30, 30, 30, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            border: `1px solid ${isDarkMode 
              ? 'rgba(222, 184, 135, 0.1)'
              : 'rgba(139, 69, 19, 0.1)'}`,
            maxWidth: isLargeScreen ? '800px' : '100%',
            margin: '0 auto'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{
              fontWeight: 700,
              color: isDarkMode ? '#DEB887' : '#8B4513',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Инструкция по изготовлению свечей
          </Typography>
          <Typography 
            variant="subtitle1" 
            gutterBottom 
            align="center" 
            color="text.secondary"
            sx={{ 
              mb: { xs: 4, sm: 6 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Пошаговое руководство по созданию ароматических свечей своими руками
          </Typography>
          
          <Box sx={{ 
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <Stepper 
              orientation="vertical"
              sx={{ 
                '& .MuiStepLabel-label': { 
                  color: isDarkMode ? '#DEB887' : '#8B4513',
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                },
                '& .MuiStepIcon-root': {
                  color: isDarkMode ? 'rgba(222, 184, 135, 0.3)' : 'rgba(139, 69, 19, 0.3)',
                  '&.Mui-active': {
                    color: isDarkMode ? '#DEB887' : '#8B4513',
                  },
                  '&.Mui-completed': {
                    color: isDarkMode ? '#DEB887' : '#8B4513',
                  },
                },
                '& .MuiStepConnector-root': {
                  display: 'block',
                  marginLeft: '12px',
                },
                '& .MuiStepConnector-line': {
                  borderColor: isDarkMode 
                    ? 'rgba(222, 184, 135, 0.3)'
                    : 'rgba(139, 69, 19, 0.3)',
                },
              }}
            >
              {steps.map((step, index) => (
                <Step key={index} active={true}>
                  <StepLabel>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: isDarkMode ? '#DEB887' : '#8B4513',
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {step.label}
                    </Typography>
                  </StepLabel>
                  <Paper 
                    sx={{ 
                      p: { xs: 2, sm: 3 }, 
                      mb: { xs: 2, sm: 3 },
                      backgroundColor: isDarkMode 
                        ? 'rgba(222, 184, 135, 0.05)'
                        : 'rgba(139, 69, 19, 0.05)',
                      border: `1px solid ${isDarkMode 
                        ? 'rgba(222, 184, 135, 0.1)'
                        : 'rgba(139, 69, 19, 0.1)'}`,
                      borderRadius: 2,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      marginLeft: '12px'
                    }}
                  >
                    <Typography>{step.description}</Typography>
                  </Paper>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Instructions; 
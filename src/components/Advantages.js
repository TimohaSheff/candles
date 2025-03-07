import React from 'react';
import { Container, Typography, Box, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import PaletteIcon from '@mui/icons-material/Palette';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { motion } from 'framer-motion';

function Advantages() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const advantages = [
    {
      title: 'Экономия и контроль над бюджетом',
      icon: <SavingsIcon sx={{ fontSize: isMobile ? 32 : 40 }} />,
      items: [
        'Дешевле, чем покупка готовых свечей',
        'Контроль затрат на компоненты'
      ]
    },
    {
      title: 'Персонализация и творчество',
      icon: <PaletteIcon sx={{ fontSize: isMobile ? 32 : 40 }} />,
      items: [
        'Создание уникальных ароматов',
        'Индивидуальный дизайн',
        'Творческий процесс'
      ]
    },
    {
      title: 'Качество и натуральность',
      icon: <SpaIcon sx={{ fontSize: isMobile ? 32 : 40 }} />,
      items: [
        'Выбор натуральных ингредиентов',
        'Отсутствие вредных веществ',
        'Полный контроль над процессом'
      ]
    },
    {
      title: 'Дополнительные преимущества',
      icon: <EmojiEventsIcon sx={{ fontSize: isMobile ? 32 : 40 }} />,
      items: [
        'Отличный подарок',
        'Хобби и релаксация'
      ]
    },
    {
      title: 'Преимущества наборов',
      icon: <LocalShippingIcon sx={{ fontSize: isMobile ? 32 : 40 }} />,
      items: [
        'Все необходимое в одном месте',
        'Подробные инструкции',
        'Удобство и простота'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 },
      px: { xs: 2, sm: 4 },
      backgroundColor: isDarkMode ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 255, 255, 0.95)'
    }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{
            fontWeight: 700,
            color: isDarkMode ? '#DEB887' : '#8B4513',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            mb: { xs: 4, sm: 6 }
          }}
        >
          Преимущества создания свечей своими руками
        </Typography>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }} 
            justifyContent="center"
            sx={{
              '& > .MuiGrid-item': {
                '@media (min-width: 1200px)': { // xl breakpoint
                  flex: '0 0 20%',
                  maxWidth: '20%'
                }
              }
            }}
          >
            {advantages.map((advantage, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={item}>
                  <Paper 
                    sx={{ 
                      p: { xs: 2, sm: 3 },
                      height: '100%',
                      minHeight: { xl: '280px' },
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: isDarkMode 
                        ? 'rgba(222, 184, 135, 0.05)'
                        : 'rgba(139, 69, 19, 0.05)',
                      border: `1px solid ${isDarkMode 
                        ? 'rgba(222, 184, 135, 0.1)'
                        : 'rgba(139, 69, 19, 0.1)'}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: isDarkMode 
                          ? '0 6px 20px rgba(222, 184, 135, 0.15)'
                          : '0 6px 20px rgba(139, 69, 19, 0.15)'
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 2,
                      color: isDarkMode ? '#DEB887' : '#8B4513'
                    }}>
                      {advantage.icon}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          ml: 1.5,
                          fontWeight: 600,
                          fontSize: { xs: '1rem', sm: '1.1rem' },
                          lineHeight: 1.2
                        }}
                      >
                        {advantage.title}
                      </Typography>
                    </Box>
                    <Box 
                      component="ul" 
                      sx={{ 
                        pl: 2, 
                        m: 0,
                        listStyleType: 'disc',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      {advantage.items.map((item, itemIndex) => (
                        <Typography 
                          key={itemIndex}
                          component="li"
                          sx={{ 
                            mb: 1,
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                            fontSize: { xs: '0.9rem', sm: '0.95rem' },
                            lineHeight: 1.4,
                            '&:last-child': { mb: 0 }
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Advantages; 
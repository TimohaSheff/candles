import React from 'react';
import { Container, Typography, Box, Paper, Grid, useTheme, useMediaQuery } from '@mui/material';
import fitils from '../assets/fitils.jpg';
import aroma from '../assets/aroma.jpg';
import aromamax from '../assets/aromamax.jpg';
import glues from '../assets/glues.jpg';
import shpatels from '../assets/shpatels.jpg';
import podstavkes from '../assets/podstavkes.jpg';

function Materials() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const materials = [
    {
      title: 'Воск',
      description: 'Основной материал для изготовления свечей. Существует несколько видов воска: парафин, кокосовый воск, соевый воск, пчелиный воск. Каждый имеет свои преимущества и особенности использования.',
      image: '/images/wax.jpg'
    },
    {
      title: 'Фитиль',
      description: 'Фитили бывают разных размеров и материалов. Правильный выбор фитиля важен для оптимального горения свечи. Основные типы: хлопковые, деревянные, бумажные.',
      image: fitils
    },
    {
      title: 'Флакон',
      description: 'Специальные емкости для хранения и дозирования отдушек. Имеют удобный дозатор для точного отмеривания количества ароматизатора.',
      image: aroma
    },
    {
      title: 'Отдушка',
      description: 'Концентрированные ароматические масла для создания стойкого аромата. Идеально подходят для создания премиальных свечей с длительным временем горения.',
      image: aromamax
    },
    {
      title: 'Баночка',
      description: 'Стеклянные или пластиковые емкости для заливки свечей. Бывают разных размеров и форм, позволяют создавать красивые и функциональные свечи.',
      image: '/images/molds.jpg'
    },
    {
      title: 'Клеевая основа',
      description: 'Специальные клеи для фиксации фитилей и декоративных элементов. Обеспечивают надежное крепление и безопасность при горении свечи.',
      image: glues
    },
    {
      title: 'Шпатель',
      description: 'Инструмент для тщательного перемешивания расплавленного воска с отдушкой. Обеспечивает равномерное распределение ароматизатора в массе.',
      image: shpatels
    },
    {
      title: 'Подставка',
      description: 'Специальные приспособления для надежного крепления фитиля при заливке свечи. Основные виды: деревянные, пластиковые, металлические. Обеспечивают правильное положение фитиля в готовом изделии.',
      image: podstavkes
    }
  ];

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: { xs: 4, sm: 6 },
      px: { xs: 2, sm: 4 },
      background: isDarkMode 
        ? 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #f8f8f8 100%)'
    }}>
      <Container maxWidth="lg">
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, sm: 6 },
            mt: { xs: 4, sm: 6, md: 8 },
            background: isDarkMode 
              ? 'rgba(30, 30, 30, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            border: `1px solid ${isDarkMode 
              ? 'rgba(222, 184, 135, 0.1)'
              : 'rgba(139, 69, 19, 0.1)'}`
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
            Материалы для изготовления свечей
          </Typography>
          <Typography 
            variant="subtitle1" 
            gutterBottom 
            align="center" 
            color="text.secondary"
            sx={{ 
              mb: 6,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            Основные материалы и инструменты, необходимые для создания ароматических свечей
          </Typography>

          <Grid container spacing={3}>
            {materials.map((material, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    backgroundColor: isDarkMode 
                      ? 'rgba(222, 184, 135, 0.05)'
                      : 'rgba(139, 69, 19, 0.05)',
                    border: `1px solid ${isDarkMode 
                      ? 'rgba(222, 184, 135, 0.1)'
                      : 'rgba(139, 69, 19, 0.1)'}`,
                    borderRadius: 2
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 300,
                      mb: 2,
                      borderRadius: 1,
                      overflow: 'hidden',
                      backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {/* Размытый фон */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-20%',
                        right: '-20%',
                        bottom: '-20%',
                        backgroundImage: `url(${material.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(15px)',
                        opacity: 0.4,
                        transform: 'scale(1.3)',
                        transition: 'all 0.3s ease-in-out'
                      }}
                    />
                    {/* Основное изображение */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${material.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 1
                      }}
                    />
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ 
                      color: isDarkMode ? '#DEB887' : '#8B4513',
                      fontWeight: 600
                    }}
                  >
                    {material.title}
                  </Typography>
                  <Typography 
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                  >
                    {material.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Materials; 
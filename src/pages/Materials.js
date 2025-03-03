import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Paper, useTheme, useMediaQuery } from '@mui/material';

function Materials() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const materials = [
    {
      title: 'Воск',
      description: 'Основной материал для изготовления свечей. Можно использовать соевый воск, парафин или пчелиный воск.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Фитили',
      description: 'Хлопковые или деревянные фитили различных размеров в зависимости от диаметра свечи.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Ароматические масла',
      description: 'Концентрированные эфирные масла для придания свечам аромата.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Формы для свечей',
      description: 'Силиконовые, пластиковые или металлические формы различных форм и размеров.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Термометр',
      description: 'Для контроля температуры плавления воска.',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Емкость для плавления',
      description: 'Металлическая или стеклянная емкость для плавления воска на водяной бане.',
      image: 'https://via.placeholder.com/150'
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
      <Container maxWidth="lg">
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
            Необходимые материалы
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
            Список всех материалов, необходимых для изготовления ароматических свечей
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {materials.map((material, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    background: isDarkMode 
                      ? 'rgba(222, 184, 135, 0.05)'
                      : 'rgba(139, 69, 19, 0.05)',
                    border: `1px solid ${isDarkMode 
                      ? 'rgba(222, 184, 135, 0.1)'
                      : 'rgba(139, 69, 19, 0.1)'}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: isDarkMode
                        ? '0 8px 24px rgba(222, 184, 135, 0.15)'
                        : '0 8px 24px rgba(139, 69, 19, 0.15)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height={isMobile ? 120 : 140}
                    image={material.image}
                    alt={material.title}
                    sx={{ 
                      borderBottom: `1px solid ${isDarkMode 
                        ? 'rgba(222, 184, 135, 0.1)'
                        : 'rgba(139, 69, 19, 0.1)'}`,
                      objectFit: 'cover'
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{ 
                        color: isDarkMode ? '#DEB887' : '#8B4513',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' }
                      }}
                    >
                      {material.title}
                    </Typography>
                    <Typography 
                      color="text.secondary"
                      sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                    >
                      {material.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Materials; 
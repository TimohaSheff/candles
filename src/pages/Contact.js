import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button, useTheme, useMediaQuery } from '@mui/material';

function Products() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const products = [
    {
      id: 1,
      name: 'Набор для начинающих',
      price: '2999 ₽',
      description: 'Базовый набор для создания ароматических свечей. Включает воск, фитили, формы и ароматические масла.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Профессиональный набор',
      price: '5999 ₽',
      description: 'Расширенный набор с дополнительными формами, красителями и профессиональными инструментами.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Набор для декоративных свечей',
      price: '3999 ₽',
      description: 'Специальный набор для создания декоративных свечей с различными формами и украшениями.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Набор для ароматерапии',
      price: '4999 ₽',
      description: 'Набор с эфирными маслами и специальными формами для создания ароматерапевтических свечей.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)'
        : 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      py: { xs: 4, sm: 6 }
    }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            fontWeight: 700,
            color: isDarkMode ? '#DEB887' : '#8B4513',
            mb: 4,
            mt: { xs: 4, sm: 6, md: 8 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Наборы для создания свечей
        </Typography>
        <Typography 
          variant="h6" 
          gutterBottom 
          align="center" 
          color="text.secondary"
          sx={{ 
            mb: 6,
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Выберите подходящий набор для начала вашего творческого пути
        </Typography>
        
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: isDarkMode 
                    ? 'rgba(30, 30, 30, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDarkMode 
                    ? 'rgba(222, 184, 135, 0.1)'
                    : 'rgba(139, 69, 19, 0.1)'}`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDarkMode
                      ? '0 4px 20px rgba(222, 184, 135, 0.1)'
                      : '0 4px 20px rgba(139, 69, 19, 0.1)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: `1px solid ${isDarkMode 
                      ? 'rgba(222, 184, 135, 0.1)'
                      : 'rgba(139, 69, 19, 0.1)'}`
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    sx={{
                      color: isDarkMode ? '#DEB887' : '#8B4513',
                      fontWeight: 600
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="primary"
                    sx={{ 
                      mb: 2,
                      color: isDarkMode ? '#E6D5C3' : '#A0522D'
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      mb: 2,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    fullWidth 
                    variant="contained"
                    sx={{
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
                    В корзину
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products; 
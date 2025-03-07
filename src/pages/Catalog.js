import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button, useTheme, useMediaQuery } from '@mui/material';

function Catalog() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const products = [
    {
      id: 1,
      name: 'Набор для создания ароматических свечей "Апельсин, жасмин и белый мускус, Можжевельник и дым"',
      price: '1100 ₽',
      description: 'Набор включает все необходимые материалы для создания 2 ароматических свечей: одна с ароматами апельсина, жасмина и белого мускуса, другая с ароматами можжевельника и дыма.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Набор для создания ароматических свечей "Лавандовое поле, Голубая пихта и мандарин"',
      price: '1050 ₽',
      description: 'Набор включает все необходимые материалы для создания 2 ароматических свечей: одна с ароматами лавандового поля, другая с ароматами голубой пихты и мандарина.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Набор для создания ароматических свечей "Пряный чай латте, Синнабон"',
      price: '1050 ₽',
      description: 'Набор включает все необходимые материалы для создания 2 ароматических свечей: одна с ароматом пряного чая латте, другая с ароматом синнабона.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Набор для создания ароматических свечей "Кокос и шоколад, Мускус и ваниль"',
      price: '1150 ₽',
      description: 'Набор включает все необходимые материалы для создания 2 ароматических свечей: одна с ароматами кокоса и шоколада, другая с ароматами мускуса и ванили.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Набор для создания ароматических свечей "Шафран и кожа, Зеленый чай с мятой и лимоном"',
      price: '1200 ₽',
      description: 'Набор включает все необходимые материалы для создания 2 ароматических свечей: одна с ароматами шафрана и кожи, другая с ароматом зеленого чая с мятой и лимоном.',
      image: 'https://images.unsplash.com/photo-1602874801001-b6dfacf2e1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
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
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '400px',
                  margin: '0 auto',
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
                <CardContent sx={{ flexGrow: 1, py: 1.5 }}>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      color: isDarkMode ? '#DEB887' : '#8B4513',
                      fontWeight: 600,
                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                      mb: 1
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="primary"
                    sx={{ 
                      mb: 1,
                      color: isDarkMode ? '#E6D5C3' : '#A0522D',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 600
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      mb: 1,
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      lineHeight: 1.4
                    }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1,
                  mt: 'auto',
                  p: 2,
                  width: '100%',
                  alignItems: 'center',
                  '& .MuiButton-root': {
                    width: '100%',
                    borderRadius: '8px',
                    marginLeft: 0
                  }
                }}>
                  <Button 
                    variant="contained"
                    sx={{
                      width: '100%',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
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
                    Купить на Wildberries
                  </Button>
                  <Button 
                    variant="contained"
                    sx={{
                      width: '100%',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
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
                    Купить на Ozon
                  </Button>
                  <Button 
                    variant="contained"
                    sx={{
                      width: '100%',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
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
                    Купить на Яндекс.Маркет
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

export default Catalog; 
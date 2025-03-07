import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useTheme, 
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logoDark from '../assets/logo-dark.svg';
import logoLight from '../assets/logo-light.svg';

function Navbar({ toggleTheme, isDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Главная', path: '/' },
    { text: 'Инструкции', path: '/instructions' },
    { text: 'Советы', path: '/tips' },
    { text: 'Материалы', path: '/materials' },
    { text: 'Каталог', path: '/catalog' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: isDarkMode ? '#DEB887' : '#8B4513' }}>
        Меню
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={RouterLink} 
            to={item.path}
            sx={{
              color: isDarkMode ? '#DEB887' : '#8B4513',
              '&:hover': {
                backgroundColor: isDarkMode 
                  ? 'rgba(222, 184, 135, 0.1)' 
                  : 'rgba(139, 69, 19, 0.1)'
              }
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: isDarkMode 
          ? 'rgba(18, 18, 18, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${isDarkMode 
          ? 'rgba(222, 184, 135, 0.1)' 
          : 'rgba(139, 69, 19, 0.1)'}`,
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <Box 
          component={RouterLink} 
          to="/" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none',
            mr: 2
          }}
        >
          <img 
            src={isDarkMode ? logoDark : logoLight} 
            alt="Logo" 
            style={{ 
              width: '56px', 
              height: '56px',
              marginRight: '8px'
            }} 
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              color: isDarkMode ? '#FFF3CD' : '#9D4B01',
              fontWeight: 700,
              display: 'block',
              fontFamily: '"Kaushan Script", cursive',
              fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.2rem' }
            }}
          >
            CreateIT
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: isDarkMode ? '#DEB887' : '#8B4513' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { 
                  boxSizing: 'border-box', 
                  width: 240,
                  background: isDarkMode 
                    ? 'rgba(18, 18, 18, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderLeft: `1px solid ${isDarkMode 
                    ? 'rgba(222, 184, 135, 0.1)' 
                    : 'rgba(139, 69, 19, 0.1)'}`
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: isDarkMode ? '#DEB887' : '#8B4513',
                  '&:hover': {
                    backgroundColor: isDarkMode 
                      ? 'rgba(222, 184, 135, 0.1)' 
                      : 'rgba(139, 69, 19, 0.1)'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}

        <Button 
          color="inherit" 
          onClick={toggleTheme}
          sx={{ 
            color: isDarkMode ? '#DEB887' : '#8B4513',
            '&:hover': {
              color: isDarkMode ? '#E6D5C3' : '#A0522D'
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
              {isDarkMode ? 'Тёмная тема' : 'Светлая тема'}
            </Typography>
          </Box>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 
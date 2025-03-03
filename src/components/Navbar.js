import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';

function Navbar({ darkMode, setDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Главная', path: '/' },
    { text: 'Инструкции', path: '/instructions' },
    { text: 'Материалы', path: '/materials' },
    { text: 'Каталог', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: darkMode 
          ? 'rgba(18, 18, 18, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${darkMode 
          ? 'rgba(222, 184, 135, 0.1)'
          : 'rgba(139, 69, 19, 0.1)'}`,
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo color={darkMode ? '#E6D5C3' : '#A0522D'} />
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: darkMode ? '#E6D5C3' : '#A0522D',
                fontFamily: '"Kaushan Script", cursive',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
              }}
            >
              CreateIT
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          
          {isMobile ? (
            <>
              <IconButton
                onClick={handleMenu}
                sx={{
                  color: darkMode ? '#DEB887' : '#8B4513',
                  mr: 1
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    background: darkMode 
                      ? 'rgba(30, 30, 30, 0.95)'
                      : 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${darkMode 
                      ? 'rgba(222, 184, 135, 0.1)'
                      : 'rgba(139, 69, 19, 0.1)'}`,
                  }
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleClose}
                    sx={{
                      color: darkMode ? '#DEB887' : '#8B4513',
                      '&:hover': {
                        backgroundColor: darkMode 
                          ? 'rgba(222, 184, 135, 0.1)'
                          : 'rgba(139, 69, 19, 0.1)',
                      }
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{
                    color: darkMode ? '#DEB887' : '#8B4513',
                    '&:hover': {
                      color: darkMode ? '#E6D5C3' : '#A0522D',
                      backgroundColor: darkMode 
                        ? 'rgba(222, 184, 135, 0.1)'
                        : 'rgba(139, 69, 19, 0.1)',
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
          
          <IconButton 
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              color: darkMode ? '#DEB887' : '#8B4513',
              '&:hover': {
                backgroundColor: darkMode 
                  ? 'rgba(222, 184, 135, 0.1)'
                  : 'rgba(139, 69, 19, 0.1)',
              }
            }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 
import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import VKIcon from '../assets/vk.svg';
import OzonIcon from '../assets/ozon.svg';
import TikTokIcon from '../assets/tiktok.svg';

const socialLinks = [
  { name: 'Telegram', icon: <TelegramIcon />, url: 'https://t.me/naborcandle', color: '#0088cc' },
  { name: 'VK', icon: <img src={VKIcon} alt="VK" style={{ width: 24, height: 24 }} />, url: 'https://vk.com/createit33', color: '#0077FF' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/candlescreate33', color: '#E4405F' },
  { name: 'TikTok', icon: <img src={TikTokIcon} alt="TikTok" style={{ width: 24, height: 24 }} />, url: 'https://tiktok.com/@createit33', color: '#000000' }
];

function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        py: 0.5,
        px: 1,
        mt: 0,
        backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid ${isDarkMode 
          ? 'rgba(222, 184, 135, 0.1)'
          : 'rgba(139, 69, 19, 0.1)'}`
      }}
    >
      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.25
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: isDarkMode ? '#FFF3CD' : '#A0522D',
            fontWeight: 600,
            mb: 0.25,
            fontSize: { xs: '0.875rem', sm: '1rem' }
          }}
        >
          Следите за нами в социальных сетях
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap',
          my: 0.25
        }}>
          {socialLinks.map((link) => (
            <IconButton
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: isDarkMode ? '#FFF3CD' : '#A0522D',
                padding: 0.5,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: isDarkMode 
                    ? 'rgba(255, 243, 205, 0.1)'
                    : 'rgba(160, 82, 45, 0.1)',
                  transform: 'scale(1.1)',
                },
                '& img': {
                  width: 24,
                  height: 24,
                  filter: isDarkMode 
                    ? 'brightness(0) invert(0.95) sepia(0.4) saturate(1.5) hue-rotate(348deg)'
                    : 'brightness(0) saturate(100%) invert(32%) sepia(15%) saturate(2526%) hue-rotate(341deg) brightness(92%) contrast(89%)'
                },
                '& svg': {
                  width: 24,
                  height: 24
                }
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            mt: 0.25,
            fontSize: '0.8rem',
            textAlign: 'center',
            width: '100%'
          }}
        >
          © {new Date().getFullYear()} CreateIT. Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer; 
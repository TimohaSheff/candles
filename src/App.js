import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Materials from './pages/Materials';
import Catalog from './pages/Catalog';
import Tips from './pages/Tips';
import PageTransition from './components/PageTransition';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#DEB887' : '#8B4513',
        light: darkMode ? '#E6D5C3' : '#A0522D',
        dark: darkMode ? '#B8860B' : '#654321',
      },
      background: {
        default: darkMode ? '#121212' : '#E8E8E8',
        paper: darkMode ? '#1E1E1E' : '#FFFFFF',
      },
      text: {
        primary: darkMode ? '#FFFFFF' : '#121212',
        secondary: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      },
    },
    typography: {
      fontFamily: '"Jura", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 600,
            padding: '8px 24px',
            fontSize: '1.1rem',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Navbar isDarkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home isDarkMode={darkMode} />} />
                <Route path="/instructions" element={<Instructions isDarkMode={darkMode} />} />
                <Route path="/materials" element={<Materials isDarkMode={darkMode} />} />
                <Route path="/catalog" element={<Catalog isDarkMode={darkMode} />} />
                <Route path="/tips" element={<Tips isDarkMode={darkMode} />} />
                <Route path="*" element={<Home isDarkMode={darkMode} />} />
              </Routes>
            </PageTransition>
          </Box>
          <Footer />
          <ScrollToTopButton />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

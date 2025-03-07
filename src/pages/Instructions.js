import React from 'react';
import { Container, Typography, Box, Stepper, Step, StepLabel, Paper, useTheme, useMediaQuery } from '@mui/material';
import instructionVideo from '../assets/instruction.mp4';

function Instructions() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const steps = [
    {
      label: 'Подготовка',
      description: 'Очистка рабочей поверхности: Убедитесь, что у вас есть достаточно места для работы и что поверхность чистая и сухая. Это поможет избежать попадания мусора в воск и обеспечит безопасную рабочую среду. Организация: Разложите все материалы так, чтобы они были легко доступны.'
    },
    {
      label: 'Плавление воска',
      description: 'Обычно на одну свечу уходит примерно один пакет воска (но это зависит от размера вашей банки). Подготовка водяной бани: Налейте воду в кастрюлю и доведите ее до кипения, затем уменьшите огонь, чтобы вода тихо кипела. Поместите емкость с воском на кастрюлю. Убедитесь, что дно емкости не касается воды. Плавление воска: Нагревайте воск на водяной бане, периодически помешивая, чтобы он равномерно плавился. Следите за температурой воска с помощью термометра (при наличии). Важно не перегреть воск, так как это может изменить его свойства и повлиять на качество свечи. Целевая температура плавления – 40-45°C. Постоянное перемешивание: Помешивайте воск медленно и плавно, чтобы избежать образования пузырьков воздуха. Также вы можете воспользоваться микроволновкой для расплавления воска. Нагревайте воск короткими интервалами, например, по 30 секунд и тщательно перемешивайте воск палочкой после каждого интервала.'
    },
    {
      label: 'Добавление отдушки',
      description: 'Снимите воск с водяной бани: Как только воск полностью расплавится и достигнет нужной температуры, снимите его с водяной бани. Добавление ароматического масла: Добавьте необходимое количество отдушки в расплавленный воск (во флаконе из набора уже отмерен достаточный объём отдушки в соотношении с количеством воска из набора). Тщательное перемешивание: Аккуратно перемешивайте воск и отдушку в течение 2 минут, чтобы обеспечить равномерное распределение аромата.'
    },
    {
      label: 'Подготовка баночки',
      description: 'Немного нагрейте банку (например в микроволновке около 1 минуты) для лучшего сцепления воска с банкой. Подготовка фитиля: Возьмите подставку для фитиля и вставьте в нее фитиль. Плотно зажмите фитиль в подставке. Крепление фитиля: Приклейте клеевую основу к нижней части подставки под фитиль. Размещение фитиля в банке: Аккуратно поместите подставку с фитилем на дно стеклянной банки, убедившись, что фитиль расположен по центру. Плотно прижмите подставку к дну банки, чтобы она надежно зафиксировалась.'
    },
    {
      label: 'Заливка воска',
      description: 'Проверка температуры: Убедитесь, что температура воска находится в диапазоне 55-57°C. При отсутствии термометра нагревайте в водяной бане примерно 1-2 минуты после добавления отдушки. Это оптимальная температура для заливки, которая помогает избежать дефектов, таких как образование трещин или неровностей. Аккуратная заливка: Медленно и аккуратно налейте расплавленный воск в банку вокруг фитиля. Старайтесь не лить воск прямо на фитиль, чтобы избежать его смещения. Оставьте место: Не заливайте воск до самого верха банки, оставьте немного места (около 1 см) до края.'
    },
    {
      label: 'Остывание',
      description: 'Размещение свечи: Поместите залитую свечу на ровную поверхность в месте, где нет сквозняков и резких перепадов температуры. Медленное остывание: Дайте свече остыть при комнатной температуре в течение 24-48 часов. Чем медленнее остывает воск, тем меньше вероятность образования трещин и неровностей на поверхности. Не перемещайте и не трогайте свечу во время остывания. Обрезка фитиля: После того, как воск полностью затвердеет, обрежьте фитиль до длины примерно 0,5-1 см от поверхности воска. Это поможет свече гореть ровно и без копоти. По желанию можете закрепить комплектную наклейку на баночке.'
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
      <Container maxWidth={isLargeScreen ? 'xl' : 'lg'}>
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4, md: 6 },
            mt: { xs: 4, sm: 6, md: 8 },
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
              mb: 0,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Пошаговое руководство по созданию ароматических свечей своими руками
          </Typography>
          <Typography 
            onClick={() => {
              document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{ 
              color: isDarkMode ? '#DEB887' : '#8B4513',
              cursor: 'pointer',
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
              textAlign: 'center',
              mb: { xs: 4, sm: 6 },
              '&:hover': {
                opacity: 0.8
              }
            }}
          >
            Нажмите, чтобы посмотреть видеоинструкцию
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
          
          <Box 
            id="video-section"
            sx={{ 
              mt: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography 
              variant="h5" 
              component="h2"
              align="center"
              sx={{ 
                color: isDarkMode ? '#DEB887' : '#8B4513',
                fontWeight: 600,
                mb: 2
              }}
            >
              Видеоинструкция
            </Typography>
            <Box 
              sx={{ 
                width: '100%',
                maxWidth: '600px',
                aspectRatio: '16/9',
                backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${isDarkMode 
                  ? 'rgba(222, 184, 135, 0.3)'
                  : 'rgba(139, 69, 19, 0.3)'}`
              }}
            >
              <video
                width="100%"
                height="100%"
                controls
                style={{ borderRadius: '8px' }}
              >
                <source src={instructionVideo} type="video/mp4" />
                Ваш браузер не поддерживает видео тег.
              </video>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Instructions; 
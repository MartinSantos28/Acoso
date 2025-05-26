import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import BannerHome from '../../assets/images/BannerHome.png';
import LogoAUNL from '../../assets/images/LogoUANL.svg';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: '¿Qué es?', href: '#que-es' },
    { text: '¿Qué Hacer?', href: '#que-hacer' },
    { text: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <Box component="header" sx={{ width: '100%', margin: 0, padding: 0 }}>
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={LogoAUNL}
                alt="Logo UANL"
                sx={{ 
                  height: { xs: 40, sm: 56 },
                  mr: { xs: 1, sm: 3 },
                  objectFit: 'contain'
                }}
              />
              <Typography 
                variant="h6" 
                component="div"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Alto al Acoso UANL
              </Typography>
            </Box>
            
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((item) => (
                    <MenuItem 
                      key={item.text} 
                      onClick={() => {
                        handleClose();
                        window.location.href = item.href;
                      }}
                    >
                      {item.text}
                    </MenuItem>
                  ))}
                  <MenuItem 
                    onClick={() => {
                      handleClose();
                      window.location.href = '#donde-denunciar';
                    }}
                    sx={{ color: 'secondary.main' }}
                  >
                    Buscar Ayuda
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button 
                    key={item.text}
                    color="inherit" 
                    href={item.href}
                    sx={{ 
                      fontSize: { sm: '0.9rem', md: '1rem' }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => {
                    window.location.href = '#donde-denunciar';
                  }}
                  sx={{ 
                    ml: 2,
                    fontSize: { sm: '0.9rem', md: '1rem' }
                  }}
                >
                  Buscar Ayuda
                </Button>
              </Box>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: '100%',
          minHeight: { xs: '70vh', sm: '80vh', md: '100vh' },
          height: 'auto',
          paddingTop: { xs: '56px', sm: '64px' },
          margin: 0,
          padding: 0,
          background: `url(${BannerHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 1
          }
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            height: '100%',
            py: { xs: 4, md: 8 },
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              mb: { xs: 2, sm: 3 }, 
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              maxWidth: '90%',
              mx: 'auto',
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
            }}
          >
            Unidos Contra el Acoso Escolar
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: { xs: 3, sm: 4 }, 
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              px: { xs: 1, sm: 2, md: 4 },
              lineHeight: { xs: 1.4, sm: 1.5 }
            }}
          >
            Creando un ambiente seguro y respetuoso para todos los estudiantes
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              window.location.href = '#que-es';
            }}
            sx={{ 
              py: { xs: 1, sm: 1.5, md: 2 },
              px: { xs: 3, sm: 4, md: 6 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s',
              }
            }}
          >
            Conoce Más
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Header; 
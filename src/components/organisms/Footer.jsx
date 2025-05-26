import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
        mt: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg"> 
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                fontWeight: 600
              }}
            >
              Stop Bullying UANL
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2,
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                lineHeight: { xs: 1.5, sm: 1.6 }
              }}
            >
              Trabajando juntos por una universidad libre de acoso escolar.
              Tu seguridad y bienestar son nuestra prioridad.
            </Typography>
            <Box sx={{ mt: { xs: 1.5, sm: 2 } }}>
              <IconButton 
                onClick={() => window.open('https://www.facebook.com/uanlred/', '_blank')}
                color="inherit" 
                aria-label="Facebook"
                sx={{ 
                  p: { xs: 0.5, sm: 1 },
                  '& svg': { fontSize: { xs: 20, sm: 24 } }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                onClick={() => window.open('https://x.com/uanlred', '_blank')}
                color="inherit" 
                aria-label="Twitter"
                sx={{ 
                  p: { xs: 0.5, sm: 1 },
                  '& svg': { fontSize: { xs: 20, sm: 24 } }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                onClick={() => window.open('https://www.instagram.com/uanlred/', '_blank')}
                color="inherit" 
                aria-label="Instagram"
                sx={{ 
                  p: { xs: 0.5, sm: 1 },
                  '& svg': { fontSize: { xs: 20, sm: 24 } }
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                fontWeight: 600
              }}
            >
              Enlaces Útiles
            </Typography>
            <Link 
              onClick={() => window.open('http://transparencia.uanl.mx/secciones/normatividad_vigente/archivos/Normatividad_vigente/ProtocoloViolenciaLaboral.pdf', '_blank')}
              color="inherit" 
              display="block" 
              sx={{ 
                mb: 1,
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                '&:hover': { opacity: 0.8 }
              }}
            >
              Política Anti-Acoso
            </Link>
            <Link 
              onClick={() => window.open('https://www.uanl.mx/enlinea/', '_blank')}
              color="inherit" 
              display="block" 
              sx={{ 
                mb: 1,
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                '&:hover': { opacity: 0.8 }
              }}
            >
              Recursos de Ayuda
            </Link>
            <Link 
              onClick={() => window.open('https://www.uanl.mx/dependencias/direccion-de-prevencion-y-proteccion-universitaria/', '_blank')}
              color="inherit" 
              display="block" 
              sx={{ 
                mb: 1,
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                '&:hover': { opacity: 0.8 }
              }}
            >
              Contacto de Emergencia
            </Link>
            <Link 
              onClick={() => window.open('https://www.uanl.mx/tramites/becas-fundacion-uanl/#:~:text=Es%20un%20apoyo%20mensual%20de,alimentación%20y%20otros)%20del%20estudiante.', '_blank')}
              color="inherit" 
              display="block"
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                '&:hover': { opacity: 0.8 }
              }}
            >
              Programa de Apoyo Estudiantil
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                fontWeight: 600
              }}
            >
              Contacto
            </Typography>
            <Typography 
              variant="body2" 
              paragraph
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                lineHeight: { xs: 1.5, sm: 1.6 }
              }}
            >
              Línea de Ayuda: 01-800-STOP-BULL
            </Typography>
            <Typography 
              variant="body2" 
              paragraph
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                lineHeight: { xs: 1.5, sm: 1.6 }
              }}
            >
              Email: ayuda@stopbullying.uanl.mx
            </Typography>
            <Typography 
              variant="body2"
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                lineHeight: { xs: 1.5, sm: 1.6 }
              }}
            >
              Dirección: Ciudad Universitaria,
              San Nicolás de los Garza, N.L.
            </Typography>
          </Grid>
        </Grid>

        <Box 
          sx={{ 
            mt: { xs: 3, sm: 4 }, 
            pt: { xs: 3, sm: 4 }, 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            textAlign: 'center' 
          }}
        >
          <Typography 
            variant="body2" 
            color="inherit"
            sx={{ 
              fontSize: { xs: '0.85rem', sm: '0.9rem' }
            }}
          >
            © {new Date().getFullYear()} Stop Bullying UANL. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 
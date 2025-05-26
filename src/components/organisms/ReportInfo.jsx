import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ReportIcon from '@mui/icons-material/Report';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Container, Link, Paper, Typography } from '@mui/material';

const ReportInfo = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: 'background.default' 
      }} 
      id="donde-denunciar"
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: { xs: 3, sm: 4 }, 
            textAlign: 'center', 
            fontWeight: 700, 
            color: 'primary.main',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
          }}
        >
          ¿Dónde denunciar?
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 3, sm: 4 }, 
            textAlign: 'center', 
            color: 'text.secondary',
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
            lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
            px: { xs: 1, sm: 2 }
          }}
        >
          Si deseas denunciar una situación de acoso o hostigamiento dentro de la Facultad de Medicina de la Universidad Autónoma de Nuevo León (UANL), existen instancias específicas a las que puedes acudir para recibir orientación y apoyo.
        </Typography>

        <Box 
          sx={{ 
            display: 'grid', 
            gap: { xs: 3, sm: 4 }, 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            px: { xs: 1, sm: 2 }
          }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 3, sm: 4 }, 
              borderRadius: { xs: 2, sm: 3 },
              backgroundColor: 'background.paper'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1.5, sm: 2 } }}>
              <SchoolIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'primary.main', mr: { xs: 1.5, sm: 2 } }} />
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 600, 
                  color: 'primary.main',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                Secretaría de Asuntos Estudiantiles (SEASE)
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2, 
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', sm: '1rem' },
                lineHeight: { xs: 1.5, sm: 1.6 }
              }}
            >
              Esta dependencia es el primer punto de contacto dentro de la facultad para atender casos relacionados con la integridad y bienestar de los estudiantes. Puedes acercarte directamente para recibir orientación sobre el proceso de denuncia y las medidas de apoyo disponibles.
            </Typography>
          </Paper>

          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 3, sm: 4 }, 
              borderRadius: { xs: 2, sm: 3 },
              backgroundColor: 'background.paper'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1.5, sm: 2 } }}>
              <ReportIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'primary.main', mr: { xs: 1.5, sm: 2 } }} />
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 600, 
                  color: 'primary.main',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                Unidad para la Igualdad de Género (UNIIGÉNERO)
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2, 
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', sm: '1rem' },
                lineHeight: { xs: 1.5, sm: 1.6 }
              }}
            >
              La UNIIGÉNERO es la instancia universitaria encargada de dar seguimiento a los casos de acoso y hostigamiento sexual, conforme al Protocolo de Atención establecido por la UANL. Esta unidad se encuentra ubicada en el Instituto de Investigaciones Sociales, en el Campus Mederos.
            </Typography>
            <Box sx={{ mt: { xs: 1.5, sm: 2 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, color: 'primary.main', fontSize: { xs: 20, sm: 24 } }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', sm: '0.95rem' }
                  }}
                >
                  (81) 8329-4000 ext. 7868 / (81) 8329-4237
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, color: 'primary.main', fontSize: { xs: 20, sm: 24 } }} />
                <Link 
                  href="mailto:uniigenero@uanl.mx" 
                  color="primary"
                  sx={{ 
                    fontSize: { xs: '0.9rem', sm: '0.95rem' }
                  }}
                >
                  uniigenero@uanl.mx
                </Link>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, sm: 4 }, 
            mt: { xs: 3, sm: 4 }, 
            borderRadius: { xs: 2, sm: 3 }, 
            backgroundColor: 'primary.main',
            px: { xs: 2, sm: 3, md: 4 }
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white', 
              textAlign: 'center',
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: { xs: 1.5, sm: 1.6 }
            }}
          >
            Es importante que sepas que la UANL cuenta con un Protocolo de Atención para Casos de Acoso u Hostigamiento Sexual, el cual establece los procedimientos y principios rectores para atender estas situaciones, garantizando la confidencialidad, el respeto y la protección de los derechos de las personas afectadas.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white', 
              textAlign: 'center', 
              mt: { xs: 1.5, sm: 2 }, 
              fontWeight: 600,
              fontSize: { xs: '0.95rem', sm: '1rem' },
              lineHeight: { xs: 1.5, sm: 1.6 }
            }}
          >
            No estás solx. La universidad tiene el compromiso de ofrecer un entorno seguro y libre de violencia para toda su comunidad. Te animo a que utilices estas instancias para recibir el apoyo que necesitas.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ReportInfo; 
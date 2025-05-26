import { Box, Button, Container, Paper, Typography } from '@mui/material';
import SectionTitle from '../atoms/SectionTitle';

const WhatToDo = () => {
  const steps = [
    {
      label: 'Rompe el Silencio',
      description: 'El primer paso es hablar. Cuéntale a alguien de confianza lo que está sucediendo: puede ser un profesor, un familiar o un amigo cercano.',
    },
    {
      label: 'Documenta los Incidentes',
      description: 'Mantén un registro de cada incidente: fechas, lugares, personas involucradas y cualquier evidencia como mensajes o fotografías.',
    },
    {
      label: 'Reporta Formalmente',
      description: 'Presenta una queja formal ante las autoridades escolares. La mayoría de las instituciones tienen protocolos específicos para estos casos.',
    },
    {
      label: 'Busca Apoyo Profesional',
      description: 'No dudes en buscar ayuda psicológica. La universidad cuenta con servicios de consejería y apoyo emocional para estudiantes.',
    },
    {
      label: 'Conoce tus Derechos',
      description: 'Infórmate sobre las políticas anti-acoso de tu institución y tus derechos como estudiante.',
    },
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, sm: 8, md: 12 }, 
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: 'grey.100',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 'auto', md: '100vh' },
      }}
      id="que-hacer"
    >
      <Container maxWidth="lg">
        <SectionTitle>¿Qué Hacer en Caso de Acoso Escolar?</SectionTitle>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: { xs: 3, sm: 4 }, 
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.05rem', md: '1.15rem' },
            lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
            px: { xs: 1, sm: 2 }
          }}
        >
          Si estás experimentando acoso escolar, es importante que sepas que no estás solo/a y que hay pasos
          concretos que puedes seguir para protegerte y buscar ayuda.
        </Typography>

        <Box sx={{
          maxWidth: '800px',
          mx: 'auto',
          mt: { xs: 4, sm: 5, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2.5, sm: 3, md: 4 },
          px: { xs: 1, sm: 2 }
        }}>
          {steps.map((step, idx) => (
            <Paper
              key={idx}
              elevation={3}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 2, sm: 3 },
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: { xs: 3, sm: 4 },
                boxShadow: '0 4px 24px 0 rgba(30, 136, 229, 0.08)',
                transition: 'transform 0.22s, box-shadow 0.22s',
                backgroundColor: 'background.paper',
                '&:hover': {
                  transform: { xs: 'none', sm: 'translateY(-6px) scale(1.02)' },
                  boxShadow: { xs: '0 4px 24px 0 rgba(30, 136, 229, 0.08)', sm: '0 8px 32px 0 rgba(30, 136, 229, 0.16)' },
                },
              }}
            >
              <Box
                sx={{
                  minWidth: { xs: 40, sm: 48 },
                  minHeight: { xs: 40, sm: 48 },
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: { xs: 18, sm: 22 },
                  boxShadow: '0 2px 8px 0 rgba(30, 136, 229, 0.10)',
                  mr: { xs: 1.5, sm: 2 },
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </Box>
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 0.5, 
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                    lineHeight: { xs: 1.3, sm: 1.4 }
                  }}
                >
                  {step.label}
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.95rem', sm: '0.98rem', md: '1.07rem' }, 
                    color: 'text.secondary', 
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 }
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: { xs: 4, sm: 5, md: 8 },
          px: { xs: 1, sm: 2 }
        }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ 
              py: { xs: 1.25, sm: 1.5, md: 2 },
              px: { xs: 2.5, sm: 3, md: 4 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              fontWeight: 'bold',
              borderRadius: { xs: 2, sm: 3 },
              boxShadow: '0 2px 8px 0 rgba(30, 136, 229, 0.10)',
              '&:hover': {
                boxShadow: { xs: '0 2px 8px 0 rgba(30, 136, 229, 0.10)', sm: '0 4px 16px 0 rgba(30, 136, 229, 0.18)' },
                transform: { xs: 'none', sm: 'scale(1.04)' },
              }
            }}
          >
            Buscar Ayuda Ahora
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatToDo; 
import { Box, Container, Typography } from '@mui/material';
import SectionTitle from '../atoms/SectionTitle';
import InfoCard from '../molecules/InfoCard';

const BullyingInfo = () => {
  const bullying_types = [
    {
      title: "Acoso Físico",
      description: "Incluye golpes, empujones, daño a pertenencias personales y cualquier forma de agresión física.",
      icon: "fist_raised"
    },
    {
      title: "Acoso Verbal",
      description: "Insultos, burlas, amenazas y cualquier forma de agresión verbal que busque dañar emocionalmente.",
      icon: "chat"
    },
    {
      title: "Ciberacoso",
      description: "Acoso a través de redes sociales, mensajes, correos electrónicos o cualquier medio digital.",
      icon: "computer"
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, sm: 8, md: 12 }, 
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 'auto', md: '100vh' },
      }}
      id="que-es"
    >
      <Container maxWidth="lg">
        <SectionTitle>¿Qué es el Acoso Escolar?</SectionTitle>
        
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
          El acoso escolar o bullying es un comportamiento agresivo y no deseado entre estudiantes que involucra
          un desequilibrio de poder real o percibido. El comportamiento se repite o tiene el potencial de repetirse
          a lo largo del tiempo.
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)' 
          },
          gap: { xs: 3, sm: 4, md: 6 },
          mt: { xs: 4, sm: 5, md: 8 },
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 1, sm: 2 }
        }}>
          {bullying_types.map((type, index) => (
            <InfoCard 
              key={index}
              title={type.title}
              description={type.description}
              icon={type.icon}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BullyingInfo; 
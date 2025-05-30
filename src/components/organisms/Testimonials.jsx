import { Box, Container, Grid } from '@mui/material';
import SectionTitle from '../atoms/SectionTitle';
import TestimonialCard from '../molecules/TestimonialCard';

import imgAna from '../../assets/images/profileImages/WhatsApp Image 2025-05-24 at 1.26.18 PM.jpeg';
import imgCarlos from '../../assets/images/profileImages/WhatsApp Image 2025-05-24 at 1.26.20 PM.jpeg';
import imgMaria from '../../assets/images/profileImages/WhatsApp Image 2025-05-24 at 1.26.50 PM.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anonimo",
      faculty: "Facultad de Ingeniería",
      content: "Durante mi primer año, experimenté acoso por parte de algunos compañeros. Gracias al apoyo de mis profesores y el departamento de orientación, pude superar la situación y ahora ayudo a otros estudiantes que pasan por lo mismo.",
      avatar: imgAna
    },
    {
      name: "Anonimo",
      faculty: "Facultad de Medicina",
      content: "Sufrí ciberacoso a través de redes sociales. Aprendí que guardar silencio no era la solución. Busqué ayuda y con el apoyo de la universidad, pudimos resolver la situación.",
      avatar: imgCarlos
    },
    {
      name: "Anonimo",
      faculty: "Facultad de Derecho",
      content: "Como estudiante de último año, presencié casos de acoso. Decidí formar parte del comité estudiantil contra el bullying. Juntos estamos creando un ambiente más seguro para todos.",
      avatar: imgMaria
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        background: {
          xs: 'linear-gradient(180deg, #e3f0ff 0%, #f8fbff 100%)',
          sm: 'linear-gradient(180deg, #e3f0ff 0%, #f8fbff 100%)'
        }
      }} 
      id="testimonios"
    >
      <Container maxWidth="lg">
        <SectionTitle>Testimonios de Estudiantes</SectionTitle>
        
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4 }} 
          sx={{ 
            mt: { xs: 3, sm: 4, md: 5 },
            px: { xs: 0.5, sm: 2 },
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: { xs: 340, sm: 'none' },
                mx: { xs: 'auto', sm: 0 }
              }}
            >
              <TestimonialCard {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials; 
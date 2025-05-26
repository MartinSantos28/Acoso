import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

const TestimonialCard = ({ name, faculty, content, avatar }) => {
  return (
    <Card 
      sx={{ 
        // Altura dinámica según contenido
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: { xs: 3, sm: 5 },
        boxShadow: { xs: '0 4px 18px 0 rgba(31, 38, 135, 0.10)', sm: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' },
        background: { xs: '#fff', sm: '#fff' },
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        mx: { xs: 0, sm: 2 },
        my: { xs: 1.5, sm: 0 },
        '&:hover': {
          transform: { sm: 'translateY(-8px) scale(1.03)' },
          boxShadow: { sm: '0 16px 40px 0 rgba(31, 38, 135, 0.22)' },
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 4 }, pb: { xs: 3.5, sm: 4.5 }, position: 'relative', display: 'flex', flexDirection: 'column', minHeight: 180, justifyContent: 'space-between' }}>
        <Box>
          <Box sx={{ position: 'absolute', top: { xs: 6, sm: 24 }, left: { xs: 10, sm: 24 }, fontSize: { xs: 32, sm: 80 }, color: 'rgba(33, 150, 243, 0.08)', zIndex: 0, fontWeight: 900, pointerEvents: 'none', userSelect: 'none' }}>
            “
          </Box>
          <Box sx={{ position: 'relative', mb: { xs: 2, sm: 3 }, zIndex: 1 }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, sm: 18 } }}>
              {content}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2.5, sm: 3 }, mb: 0, zIndex: 1, position: 'relative' }}>
          <Avatar
            src={avatar}
            sx={{ width: { xs: 40, sm: 64 }, height: { xs: 40, sm: 64 }, border: '2px solid #788AA3', mr: 1.5, boxShadow: 1 }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.dark', fontSize: { xs: 17, sm: 20 } }}>
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'primary.light', fontWeight: 500, fontSize: { xs: 14, sm: 16 } }}>
              {faculty}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard; 
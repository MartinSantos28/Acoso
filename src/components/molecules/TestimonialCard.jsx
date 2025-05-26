import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

const TestimonialCard = ({ name, faculty, content, avatar }) => {
  return (
    <Card 
      sx={{ 
        height: 380,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: 5,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        background: '#fff',
        overflow: 'visible',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.03)',
          boxShadow: '0 16px 40px 0 rgba(31, 38, 135, 0.22)',
        },
      }}
    >
      <CardContent sx={{ p: 4, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <Box>
          <Box sx={{ position: 'absolute', top: 24, left: 24, fontSize: 80, color: 'rgba(33, 150, 243, 0.08)', zIndex: 0, fontWeight: 900, pointerEvents: 'none', userSelect: 'none' }}>
            “
          </Box>
          <Box sx={{ position: 'relative', mb: 3, zIndex: 1 }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18 }}>
              {content}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, zIndex: 1, position: 'relative' }}>
          <Avatar
            src={avatar}
            sx={{ width: 64, height: 64, border: '3px solid #788AA3', mr: 2 }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.dark' }}>
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'primary.light', fontWeight: 500 }}>
              {faculty}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard; 
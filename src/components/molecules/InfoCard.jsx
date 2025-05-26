import ComputerIcon from '@mui/icons-material/Computer';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import { Box, Card, CardContent, Typography } from '@mui/material';

const iconMap = {
  fist_raised: <SportsKabaddiIcon sx={{ fontSize: 36, color: 'white' }} />, // Acoso Físico
  chat: <RecordVoiceOverIcon sx={{ fontSize: 36, color: 'white' }} />,      // Acoso Verbal
  computer: <ComputerIcon sx={{ fontSize: 36, color: 'white' }} />          // Ciberacoso
};

const InfoCard = ({ title, description, icon }) => {
  return (
    <Card
      elevation={4}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 4,
        boxShadow: '0 4px 24px 0 rgba(30, 136, 229, 0.08)',
        transition: 'transform 0.25s, box-shadow 0.25s',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.03)',
          boxShadow: '0 8px 32px 0 rgba(30, 136, 229, 0.16)',
        },
        backgroundColor: 'background.paper',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          width: 72,
          height: 72,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
          boxShadow: '0 2px 8px 0 rgba(30, 136, 229, 0.10)',
        }}
      >
        {iconMap[icon]}
      </Box>
      <CardContent sx={{ p: 0, flexGrow: 1 }}>
        <Typography variant="h6" component="h3" sx={{ mb: 1, textAlign: 'center', fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', fontSize: '1.05rem' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard; 
import { Typography } from '@mui/material';

const SectionTitle = ({ children }) => {
  return (
    <Typography
      variant="h2"
      component="h2"
      sx={{
        textAlign: 'center',
        mb: 4,
        fontWeight: 'bold',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          backgroundColor: 'primary.main',
          borderRadius: '2px',
        }
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle; 
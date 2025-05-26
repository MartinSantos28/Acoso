import { Box } from '@mui/material';
import BullyingInfo from '../organisms/BullyingInfo';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import ReportInfo from '../organisms/ReportInfo';
import Testimonials from '../organisms/Testimonials';
import WhatToDo from '../organisms/WhatToDo';

const HomePage = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      boxSizing: 'border-box',
      '@media (max-width: 600px)': {
        padding: '0 16px'
      }
    }}>
      <Header />
      <Box component="main" sx={{ 
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: {
          xs: '16px',
          sm: '24px',
          md: '32px'
        }
      }}>
        <BullyingInfo />
        <WhatToDo />
        <Testimonials />
        <ReportInfo />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage; 
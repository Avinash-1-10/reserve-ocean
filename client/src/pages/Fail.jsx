import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Failure = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Box 
        sx={{ 
          mt: 8, 
          mb: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 60, color: 'red' }} />
        <Typography component="h1" variant="h4" sx={{ mt: 2, color: 'red' }}>
          Failure
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          We encountered an error processing your order. Please try again.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 3, mb: 2 }}
          href="/" // Assuming you want to redirect to the homepage
        >
          Return to Homepage
        </Button>
      </Box>
    </Container>
  );
}

export default Failure;

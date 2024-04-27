import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Success = () => {
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
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'green' }} />
        <Typography component="h1" variant="h4" sx={{ mt: 2 }}>
          Success!
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Your order has been successfully created.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 3, mb: 2 }}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
}

export default Success;
 
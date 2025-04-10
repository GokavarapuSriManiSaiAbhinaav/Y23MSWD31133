import React, { useContext } from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import AuthContext from "../context/AuthContext"; // ✅ import context
import { useNavigate } from 'react-router-dom'; // ✅ for redirecting

function Home() {
  const { user, logout } = useContext(AuthContext); // ✅ use correct function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();         // ✅ call correct logout function
    navigate('/');    // ✅ redirect to home
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            textAlign: 'center',
            borderRadius: 4,
            backgroundColor: '#ffffff',
          }}
        >
          <Typography variant="h4" component="h1" sx={{ color: '#1f2937' }}>
            Welcome to{' '}
            <Box component="span" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              DOORSTEP
            </Box>
          </Typography>

          {user && (
            <>
              <Typography variant="h6" sx={{ color: '#4caf50', mt: 2 }}>
                Hello, {user.name} 👋
              </Typography>

              <Button
                variant="outlined"
                color="error"
                sx={{
                  mt: 2,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none',
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}

          <Typography variant="h6" sx={{ color: '#6b7280', mt: 2 }}>
            Your one-stop destination for all your needs, delivered right to your doorstep!
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Explore Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;

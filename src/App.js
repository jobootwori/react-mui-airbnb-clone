import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';
import React from 'react';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>
        <Box>
          <Header />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;

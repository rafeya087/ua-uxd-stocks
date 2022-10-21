import React, { Suspense } from 'react';
import { theme } from './utils/theme';
import './App.css';
import FallbackLoader from './components/loader/fallBackLoader';
import AppRoutes from './routes/MainRouter';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Suspense fallback={<FallbackLoader />}>
            <AppRoutes />
          </Suspense>
        </ThemeProvider>
    </div>
  );
}

export default App;

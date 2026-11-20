import React from 'react';
import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { TetrisGameWrapper } from '@/app/TetrisGameWrapper';

function App() {
  return (
    <ThemeProvider>
      <TetrisGameWrapper />
    </ThemeProvider>
  );
}

export default App;
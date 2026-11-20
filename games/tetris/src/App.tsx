import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { TetrisGameWrapper } from './TetrisGameWrapper';

function App() {
  return (
    <ThemeProvider>
      <TetrisGameWrapper />
    </ThemeProvider>
  );
}

export default App;
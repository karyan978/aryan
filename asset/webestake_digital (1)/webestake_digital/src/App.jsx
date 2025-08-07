import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Routes from './Routes';
import AIChatbot from './components/AIChatbot';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes />
        
        {/* Global Components */}
        <AIChatbot />
        <FloatingWhatsApp />
        
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: 'dark:bg-gray-800 dark:text-white',
            style: {
              background: 'var(--color-card)',
              color: 'var(--color-card-foreground)',
              border: '1px solid var(--color-border)',
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
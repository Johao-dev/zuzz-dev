import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { useTheme } from './hooks/useTheme.jsx'

const ThemeWrapper = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { preloadCriticalResources, registerServiceWorker } from './hooks/usePerformance';

// Preload critical resources
preloadCriticalResources();

// Register service worker for caching
registerServiceWorker();

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use concurrent features for better performance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enhanced performance monitoring
reportWebVitals((metric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Replace with your analytics endpoint
    // analytics.send(metric);
  }
});

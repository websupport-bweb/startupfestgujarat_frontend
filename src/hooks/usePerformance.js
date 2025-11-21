import { useEffect } from 'react';

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) return;

    // Simple performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
        }
        if (entry.entryType === 'paint') {
          console.log(`${entry.name}:`, entry.startTime, 'ms');
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'paint'] });

    return () => observer.disconnect();
  }, []);
};

// Image lazy loading optimization
export const useImageLazyLoading = () => {
  useEffect(() => {
    if ('loading' in HTMLImageElement.prototype) return;

    // Fallback for browsers that don't support native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/assets/img/logo.png',
    '/assets/img/hero-bg.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};
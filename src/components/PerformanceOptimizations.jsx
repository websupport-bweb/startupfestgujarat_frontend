import React, { memo, useMemo, useCallback } from 'react';
import { usePerformanceMonitoring, useImageLazyLoading } from '../hooks/usePerformance';

// Higher-order component for performance optimization
export const withPerformance = (Component) => {
  return memo((props) => {
    usePerformanceMonitoring();
    useImageLazyLoading();
    
    return <Component {...props} />;
  });
};

// Memoized section component to prevent unnecessary re-renders
export const OptimizedSection = memo(({ children, className = '', ...props }) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
});

// Debounced search component
export const DebouncedSearch = memo(({ onSearch, delay = 300, placeholder = "Search..." }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, delay),
    [onSearch, delay]
  );
  
  React.useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);
  
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003777] focus:border-transparent"
    />
  );
});

// Virtual scrolling for large lists
export const VirtualizedList = memo(({ items, renderItem, itemHeight = 100 }) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(10);
  const containerRef = React.useRef(null);
  
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const scrollTop = containerRef.current.scrollTop;
    const containerHeight = containerRef.current.clientHeight;
    
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = Math.min(
      newStartIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );
    
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [itemHeight, items.length]);
  
  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);
  
  return (
    <div
      ref={containerRef}
      className="overflow-auto h-96"
      onScroll={handleScroll}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${startIndex * itemHeight}px)` }}>
          {visibleItems.map((item, index) => (
            <div key={startIndex + index} style={{ height: itemHeight }}>
              {renderItem(item, startIndex + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

// Utility function for debouncing
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
}

// Intersection Observer Hook for animations
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const elementRef = React.useRef(null);
  
  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);
  
  return [elementRef, isIntersecting];
};

export default {
  withPerformance,
  OptimizedSection,
  DebouncedSearch,
  VirtualizedList,
  useIntersectionObserver
};
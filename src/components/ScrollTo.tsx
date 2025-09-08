import { useRef, useEffect } from 'react';

// Hook to create a ref and scroll to it
export const useScrollToElement = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const scrollToElement = (options?: ScrollIntoViewOptions) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        ...options
      });
    }
  };
  
  return { elementRef, scrollToElement };
};

// Hook to handle scroll to element with ID from URL hash
export const useScrollToHash = () => {
  useEffect(() => {
    // When the component mounts, check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);
};

// Hook to create scroll-to links and handle URL hash updates
export const useScrollLinks = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      // Update URL with hash without page reload
      window.history.pushState({}, '', `#${id}`);
      
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return { scrollToId };
};
import { useEffect } from "react";

export const useScrollToHash = () => {
  useEffect(() => {
    // Function to handle hash link clicks
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // 80px offset for header
            behavior: 'smooth'
          });
          
          // Update URL hash without scrolling
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    // Handle initial hash on page load
    const handleInitialHash = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const targetElement = document.querySelector(window.location.hash);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Add event listener
    document.addEventListener('click', handleHashLinkClick);
    handleInitialHash();

    // Clean up
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);
};

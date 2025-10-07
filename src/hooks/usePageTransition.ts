import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithLoading = (href: string) => {
    setIsLoading(true);
    setTargetPath(href);
    router.push(href);
  };

  // Hide loading when we reach the target path and page is ready
  useEffect(() => {
    if (isLoading && targetPath && pathname === targetPath) {
      // Wait for page to be fully loaded
      const handlePageReady = () => {
        setIsLoading(false);
        setTargetPath(null);
      };

      // Check if page is already loaded
      if (document.readyState === 'complete') {
        // Wait a bit more for images and animations to load
        setTimeout(handlePageReady, 500);
      } else {
        // Wait for page to be fully loaded
        window.addEventListener('load', () => {
          setTimeout(handlePageReady, 500);
        });
      }

      // Fallback: hide loading after maximum time
      const fallbackTimer = setTimeout(() => {
        setIsLoading(false);
        setTargetPath(null);
      }, 3000);

      return () => {
        clearTimeout(fallbackTimer);
        window.removeEventListener('load', handlePageReady);
      };
    }
  }, [isLoading, targetPath, pathname]);

  // Hide loading when component unmounts (fallback)
  useEffect(() => {
    return () => {
      setIsLoading(false);
      setTargetPath(null);
    };
  }, []);

  return { isLoading, navigateWithLoading };
};

export const usePageReady = (initialLoading = true) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (!initialLoading) return;

    // Hide loading when page is fully loaded and all images are loaded
    const handlePageReady = () => {
      setIsLoading(false);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      // Wait a bit more for images and animations to load
      setTimeout(handlePageReady, 500);
    } else {
      // Wait for page to be fully loaded
      window.addEventListener('load', () => {
        setTimeout(handlePageReady, 500);
      });
    }

    // Fallback: hide loading after maximum time
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', handlePageReady);
    };
  }, [initialLoading]);

  return { isLoading, setIsLoading };
};

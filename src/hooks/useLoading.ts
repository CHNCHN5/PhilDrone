import { useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const withLoading = async (asyncFunction: () => Promise<void>) => {
    setIsLoading(true);
    try {
      await asyncFunction();
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, withLoading };
};

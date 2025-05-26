import { useState, useEffect } from 'react';

const useIsSmallScreen = (breakpoint = 640): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isSmallScreen;
};

export default useIsSmallScreen;

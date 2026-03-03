import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { OnboardingContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const OnboardingContext = createContext<OnboardingContextType | null>(
  null,
);

export const OnboardingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingDone, setIsOnboardingDone] = useState(false);

  useEffect(() => {
    const init = async () => {
      const savedOnboarding = await getItemFromStorage<boolean>(
        'is_onboarding_completed',
      );

      if (savedOnboarding !== null) {
        setIsOnboardingDone(savedOnboarding);
      }

      setIsLoading(false);
    };

    init();
  }, []);

  const setIsContextOnboardingDone = useCallback((value: boolean) => {
    setIsOnboardingDone(value);
    setItemInStorage('is_onboarding_completed', value);
  }, []);

  const value = useMemo(
    () => ({
      isContextLoading: isLoading,
      isContextOnboardingDone: isOnboardingDone,
      setIsContextOnboardingDone,
    }),
    [isLoading, isOnboardingDone, setIsContextOnboardingDone],
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

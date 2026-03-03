import type { ReactNode } from 'react';

import { OnboardingContextProvider } from './OnboardingContextProvider';
import { PersistContextProvider } from './PersistContextProvider';

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <OnboardingContextProvider>
      <PersistContextProvider>{children}</PersistContextProvider>
    </OnboardingContextProvider>
  );
};

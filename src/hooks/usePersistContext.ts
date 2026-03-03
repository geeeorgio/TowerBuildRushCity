import { useContext } from 'react';

import { PersistContext } from 'src/context/PersistContextProvider';

export const usePersistContext = () => {
  const context = useContext(PersistContext);

  if (!context) {
    throw new Error(
      'usePersistContext must be used within a PersistContextProvider',
    );
  }

  return context;
};

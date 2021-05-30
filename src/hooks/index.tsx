import React from 'react';

import { StepContextProvider } from './StepsContext';

const AppHooks: React.FC = ({ children }) => {
  return (
      <StepContextProvider>{children}</StepContextProvider>
  );
};

export default AppHooks;

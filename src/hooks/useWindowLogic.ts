import { useState } from 'react';

type ExitMethod = 'morph' | 'fade';

export const useWindowLogic = <T>(initialState: T) => {
  const [expandedValue, setExpandedValue] = useState<T>(initialState);
  const [exitMethod, setExitMethod] = useState<ExitMethod>('morph');

  const handleOpen = (value: T) => {
    setExitMethod('morph');
    setExpandedValue(value);
  };

  const handleClose = (resetValue: T) => {
    setExitMethod('morph');
    setExpandedValue(resetValue);
  };

  const handleRestore = (resetValue: T) => {
    setExitMethod('morph');
    setExpandedValue(resetValue);
  };

  const handleMinimize = (resetValue: T) => {
    setExitMethod('fade');
    setExpandedValue(resetValue);
  };

  return {
    expandedValue,
    exitMethod,
    handleOpen,
    handleClose,
    handleRestore,
    handleMinimize
  };
};

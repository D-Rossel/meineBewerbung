// src/context/OverlayContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OverlayContextType {
  isOverlayVisible: boolean;
  toggleOverlay: () => void;
  closeOverlay: () => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (context === undefined) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};

interface OverlayProviderProps {
  children: ReactNode;
}

export const OverlayProvider: React.FC<OverlayProviderProps> = ({ children }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(prev => !prev);
  };

   function closeOverlay() {
    setIsOverlayVisible(false);
  };
  

  return (
    <OverlayContext.Provider value={{ isOverlayVisible, toggleOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// App State Interface
interface AppState {
  // UI State
  mobileMenuOpen: boolean;
  
  // Content State
  selectedCategory: string;
}

// Action Types
type AppAction =
  | { type: 'SET_MOBILE_MENU'; payload: boolean }
  | { type: 'SET_SELECTED_CATEGORY'; payload: string };

// Initial State
const initialState: AppState = {
  mobileMenuOpen: false,
  selectedCategory: 'All',
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_MOBILE_MENU':
      return { ...state, mobileMenuOpen: action.payload };
    
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    
    default:
      return state;
  }
};

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

// Provider Component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Action Creators
export const appActions = {
  setMobileMenu: (isOpen: boolean): AppAction => ({
    type: 'SET_MOBILE_MENU',
    payload: isOpen,
  }),
  
  setSelectedCategory: (category: string): AppAction => ({
    type: 'SET_SELECTED_CATEGORY',
    payload: category,
  }),
};

// CVContext.tsx
"use client";
import React, { createContext, useReducer, ReactNode, useContext, useEffect } from 'react';
import { CVContextType, CVState } from './types';
import { initialState } from './initialState';
import { reducer } from './reducer';

const loadState = (): CVState => {
  const state = localStorage.getItem('cvState');
  return state ? JSON.parse(state) : initialState;
};

const CVContext = createContext<CVContextType | undefined>(undefined);

type CVProviderProps = {
  children: ReactNode;
  skillsLevels?: string[];
  languageLevels?: string[];
};

export const CVProvider = ({ children, skillsLevels = [], languageLevels = [] }: CVProviderProps) => {
  const [state, dispatch] = useReducer(reducer, loadState());

  useEffect(() => {
    localStorage.setItem('cvState', JSON.stringify(state));
  }, [state]);

  return (
    <CVContext.Provider value={{ state, dispatch, skillsLevels, languageLevels }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCVContext = (): CVContextType => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCVContext must be used within a CVProvider');
  }
  return context;
};

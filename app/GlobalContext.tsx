'use client';
import React from 'react';

import { CardProps } from './components/Card';

interface ContextValue {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = React.createContext<ContextValue>({
  name: '',
  setName: () => console.warn(`setName is not ready`),
});

interface GlobalStorageProps {
  children: React.ReactNode;
}

export const GlobalStorage = ({ children }: GlobalStorageProps) => {
  const [name, setName] = React.useState('');

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

interface FavoriteProps {
  unAndFavorite: CardProps[];
  setUnAndFavorite: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

const INITAL_FAVORITES_VALUE: CardProps[] = [];

export const FavoriteContext = React.createContext<FavoriteProps>({
  unAndFavorite: INITAL_FAVORITES_VALUE,
  setUnAndFavorite: () => console.warn(`setFavorites is not ready`),
});

export const FavoriteStorage = ({ children }: GlobalStorageProps) => {
  const [unAndFavorite, setUnAndFavorite] = React.useState<CardProps[]>(
    INITAL_FAVORITES_VALUE
  );

  return (
    <FavoriteContext.Provider value={{ unAndFavorite, setUnAndFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

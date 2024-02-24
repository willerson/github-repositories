import React from 'react';
import Search from '../Search';
import Favorites from '../Favorites';
import { tv } from 'tailwind-variants';

const styles = tv({
  base: 'flex justify-between items-center w-full border-b border-border-b space-x-3 pl-3 lg:pl-6',
});

export const Header = () => {
  return (
    <header className={styles()}>
      <Search />
      <Favorites />
    </header>
  );
};

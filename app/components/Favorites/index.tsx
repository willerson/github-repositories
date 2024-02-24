import React from 'react';
import { Heart } from '../icons/heart';
import { tv } from 'tailwind-variants';

const styles = tv({
  base: 'bg-primary text-sm text-white font-medium px-4 lg:px-6 py-7 flex space-x-2',
});

interface FavoritesProps {
  onClick?: () => void;
  className?: string;
}

const Favorites = ({ onClick, className }: FavoritesProps) => {
  return (
    <button onClick={onClick} className={styles({ class: className })}>
      <Heart fill="#fff" />
      <p>Favoritos</p>
    </button>
  );
};

export default Favorites;

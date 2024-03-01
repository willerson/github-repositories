import React from 'react';
import { Heart } from '../icons/heart';
import { tv } from 'tailwind-variants';
import { useRouter } from 'next/navigation';

const styles = tv({
  base: 'bg-primary text-sm text-white font-medium px-4 lg:px-6 py-7 flex space-x-2',
});

interface FavoritesProps {
  className?: string;
}

const Favorites = ({ className }: FavoritesProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/favoritos')}
      className={styles({ class: className })}
    >
      <Heart fill="#fff" />
      <p>Favoritos</p>
    </button>
  );
};

export default Favorites;

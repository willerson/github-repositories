'use client';
import React from 'react';
import { FavoriteContext } from '../GlobalContext';
import Card, { CardProps } from '../components/Card';
import useFavorite from '../hooks/useFavorite';
import { tv } from 'tailwind-variants';
import NoFavorites from '../components/NoFavorites';

const styles = tv({
  slots: {
    wrapper: 'max-w-4xl flex flex-col space-y-4 p-6 mx-auto',
    title: 'text-xl text-primary text-center font-semibold',
  },
});

const { wrapper, title } = styles();

const FavoritosPage = () => {
  const { unAndFavorite, setUnAndFavorite } = React.useContext(FavoriteContext);

  const { isFavorite } = useFavorite();

  const handleRemoveFavorite = (item: CardProps) => {
    setUnAndFavorite((prevFavorites) => {
      return prevFavorites.filter((fav) => {
        return !(
          fav.title === item.title && fav.description === item.description
        );
      });
    });
  };

  return (
    <div className={`${wrapper()}`}>
      {unAndFavorite.length > 0 ? (
        <h2 className={`${title()}`}>Meus favoritos</h2>
      ) : (
        <NoFavorites />
      )}{' '}
      {unAndFavorite &&
        unAndFavorite.map((item) => {
          return (
            <>
              <Card
                title={item.title}
                key={`${item.title}`}
                description={item.description}
                technology={item.technology}
                date={item.date}
                dotColor={item.dotColor}
                favorite={isFavorite(item, true)}
                onClick={() => handleRemoveFavorite(item)}
              />
            </>
          );
        })}
    </div>
  );
};

export default FavoritosPage;

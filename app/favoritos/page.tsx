'use client';
import React from 'react';
import { FavoriteContext } from '../GlobalContext';
import Card from '../components/Card';
import useFavorite from '../hooks/useFavorite';

const FavoritosPage = () => {
  const { unAndFavorite, setUnAndFavorite } = React.useContext(FavoriteContext);

  const { isFavorite } = useFavorite();

  const handleRemoveFavorite = (item) => {
    setUnAndFavorite((prevFavorites) => {
      return prevFavorites.filter((fav) => {
        return !(
          fav.title === item.title && fav.description === item.description
        );
      });
    });
  };

  return (
    <div className="flex flex-col space-y-4 p-6">
      {unAndFavorite.length > 0 ? (
        <h2 className="text-xl text-primary text-center font-semibold">
          Meus favoritos
        </h2>
      ) : (
        <p>Sem favoritos</p>
      )}{' '}
      {unAndFavorite &&
        unAndFavorite.map((item) => (
          <Card
            title={item.title}
            key={item.title}
            description={item.description}
            technology={item.technology}
            date={item.date}
            dotColor={item.dotColor}
            favorite={isFavorite(item, true)}
            onClick={() => handleRemoveFavorite(item)}
          />
        ))}
    </div>
  );
};

export default FavoritosPage;

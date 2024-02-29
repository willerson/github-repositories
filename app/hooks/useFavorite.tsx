import React from 'react';
import { FavoriteContext } from '../GlobalContext';
import { CardProps } from '../components/Card/index';

const useFavorite = () => {
  const { unAndFavorite, setUnAndFavorite } = React.useContext(FavoriteContext);

  const handleAddFavorite = (item: {
    name: string;
    description: string;
    language: string;
    pushed_at: string;
    dotColor: string;
  }) => {
    console.log(item);
    const isAlreadyFavorite = unAndFavorite.some((fav) => {
      return fav.title === item.name && fav.description === item.description;
    });

    if (isAlreadyFavorite) {
      setUnAndFavorite((prevFavorites) => {
        return prevFavorites.filter((fav) => {
          return !(
            fav.title === item.name && fav.description === item.description
          );
        });
      });
    } else {
      const newFavorite = {
        title: item.name,
        description: item.description,
        technology: item.language,
        date: item.pushed_at,
        dotColor: item.dotColor,
        favorite: true,
      };

      setUnAndFavorite([...unAndFavorite, newFavorite]);
    }
  };

  const isFavorite = (
    item: {
      name: string;
      description: string;
      language: string;
      pushed_at: string;
      dotColor: string;
    },
    verify: boolean
  ) => {
    const checkItem = unAndFavorite.some(
      (element) =>
        element.title === item.name && element.description === item.description
    );
    return verify !== checkItem;
  };

  return {
    handleAddFavorite,
    isFavorite,
  };
};

export default useFavorite;

import React, { useEffect } from 'react';
import { USER_REPOS_GET } from '../services/api';
import { FavoriteContext, GlobalContext } from '../GlobalContext';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'next/navigation';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { useRouter } from 'next/navigation';

import useFavorite from '../hooks/useFavorite';

const CardWrapper = () => {
  const { data, error, loading, request } = useFetch();
  const global = React.useContext(GlobalContext);
  const searchParams = useSearchParams();
  const user = searchParams.get('user');
  const router = useRouter();

  const { handleAddFavorite, isFavorite } = useFavorite();

  React.useEffect(() => {
    if (global?.name || user) {
      const { url, options } = USER_REPOS_GET(global?.name || user);
      request(url, options);
    } else {
      router.push(`/`);
    }
  }, [global?.name]);

  return (
    <div className="flex flex-col space-y-4">
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {data && (
        <h2 className="text-xl text-primary font-semibold">Repositórios</h2>
      )}

      {data &&
        data.map((item) => (
          <>
            <Card
              title={item.name}
              key={item.name}
              description={item.description}
              technology={item.language}
              date={item.pushed_at}
              dotColor={item.language}
              favorite={isFavorite(item, false)}
              onClick={() => handleAddFavorite(item)}
            />
          </>
        ))}
    </div>
  );
};

export default CardWrapper;

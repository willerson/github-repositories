'use client';
import React from 'react';
import CardWrapper from './card-wrapper';
import { GlobalContext } from '../GlobalContext';
import { useSearchParams } from 'next/navigation';
import NotFound from '../components/NotFound';
import useFetch from '../hooks/useFetch';
import { USER_GET } from '../services/api';
import Loading from '../components/Loading';
import UserCard from '../components/UserCard';
import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    main: 'min-h-main-height p-6 flex justify-center',
    wrapperCards: 'w-full lg:grid lg:grid-cols-1  lg:space-x-12',
    userCard: 'mb-6',
  },
});

const { main, wrapperCards, userCard } = styles();

const User = () => {
  const { data, error, loading, request } = useFetch();
  const global = React.useContext(GlobalContext);
  const searchParams = useSearchParams();
  const user = searchParams.get('user');

  React.useEffect(() => {
    if (global?.name || user) {
      const { url, options } = USER_GET(global?.name || user);
      request(url, options);
    }
  }, [global?.name]);

  return (
    <main className={`${main()}`}>
      <div
        className={`${wrapperCards()} ${
          data !== null && 'lg:grid-cols-[448px_1fr]'
        }`}
      >
        {error && (
          <NotFound
            searchName={`${user}`}
            titleIntro="Nenhum usuário encontrado"
            messageIntro="Verifique se a escrita está correta ou tente novamente"
          />
        )}
        {loading && <Loading />}
        {data && (
          <>
            <div className={`${userCard()}`}>
              <UserCard
                name={data.name}
                image={data.avatar_url}
                atSign={data.twitter_username}
                description={data.bio}
              />
            </div>
            <CardWrapper />
          </>
        )}
      </div>
    </main>
  );
};

export default User;

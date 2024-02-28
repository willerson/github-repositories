import React from 'react';
import UserCard from '../components/UserCard';
import useFetch from '../hooks/useFetch';
import { GlobalContext } from '../GlobalContext';
import { useSearchParams } from 'next/navigation';
import { USER_GET } from '../services/api';
import Loading from '../components/Loading';

const UserCardWrapper = () => {
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
    <div className="mb-6">
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {data && (
        <UserCard
          name={data.name}
          image={data.avatar_url}
          atSign={data.twitter_username}
          description={data.bio}
        />
      )}
    </div>
  );
};

export default UserCardWrapper;

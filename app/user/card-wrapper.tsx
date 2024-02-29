import React from 'react';
import { USER_REPOS_GET } from '../services/api';
import { GlobalContext } from '../GlobalContext';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'next/navigation';
import Card from '../components/Card';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import useFavorite from '../hooks/useFavorite';
import { tv } from 'tailwind-variants';

interface DataProps {
  name: string;
  description: string;
  language: string;
  pushed_at: string;
  dotColor?: string;
}

const styles = tv({
  slots: {
    wrapperCard: 'flex flex-col space-y-4',
    title: 'text-xl text-primary font-semibold',
  },
});

const { wrapperCard, title } = styles();

const CardWrapper = () => {
  const { data, request } = useFetch();
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

  console.log(data);

  return (
    <div className={`${wrapperCard()}`}>
      {data && data.length > 0 && (
        <h2 className={`${title()}`}>Repositórios</h2>
      )}

      {data && data.length > 0 ? (
        data.map((item: DataProps) => (
          <>
            <Card
              title={item.name}
              key={item.name}
              description={item.description}
              technology={item.language}
              date={`Atualizado em ${moment(item.pushed_at).format(
                'D MMM YYYY'
              )}`}
              dotColor={item.language}
              favorite={isFavorite(item, false)}
              onClick={() => handleAddFavorite(item)}
            />
          </>
        ))
      ) : (
        <h2 className={`${title()}`}>Sem repositórios</h2>
      )}
    </div>
  );
};

export default CardWrapper;

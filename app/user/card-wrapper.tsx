/* eslint-disable react-hooks/exhaustive-deps */
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
import Loading from '../components/Loading';

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
  const { data, request, loading } = useFetch();
  const global = React.useContext(GlobalContext);
  const searchParams = useSearchParams();
  const user = searchParams.get('user');
  const router = useRouter();
  const { handleAddFavorite, isFavorite } = useFavorite();
  const [currentPage, setCurrentPage] = React.useState(1);

  const [repos, setRepos] = React.useState<DataProps[]>([]);

  const config = `?per_page=10&page=${currentPage}&order=DESC`;

  React.useEffect(() => {
    if (global?.name || user) {
      const { url, options } = USER_REPOS_GET(global?.name || user);
      request(url + config, options);
    } else {
      router.push(`/`);
    }
  }, [global?.name, currentPage]);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });

    intersectionObserver.observe(document.querySelector('#observer-element'));

    return () => intersectionObserver.disconnect();
  }, []);

  React.useEffect(() => {
    if (data && data.length > 0) {
      setRepos((prevRepos) => [...prevRepos, ...data]);
    }
  }, [data]);

  return (
    <div className={`${wrapperCard()}`}>
      {repos && repos.length > 0 ? (
        <h2 className={`${title()}`}>Repositórios</h2>
      ) : (
        <h2 className={`${title()}`}>Sem repositórios</h2>
      )}

      {repos && repos.length > 0
        ? repos.map((item, index) => (
            <Card
              title={item.name}
              key={`${index}`}
              description={item.description}
              technology={item.language}
              date={`Atualizado em ${moment(item.pushed_at).format(
                'D MMM YYYY'
              )}`}
              favorite={isFavorite(item, false)}
              onClick={() => handleAddFavorite(item)}
            />
          ))
        : loading && <Loading />}

      <div id="observer-element" className="w-full h-1"></div>
    </div>
  );
};

export default CardWrapper;

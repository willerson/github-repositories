import Image from 'next/image';
import Card from './components/Card';
import Search from './components/Search';
import UserCard from './components/UserCard';
import Favorites from './components/Favorites';
import Intro from './components/Intro';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro
        titleIntro="Procure pelo Nome ou Nome de Usuário"
        messageIntro="Encontre os repositórios de algum usuário digitando no campo acima"
      />
    </main>
  );
}

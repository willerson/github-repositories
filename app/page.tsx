import Image from 'next/image';
import Card from './components/Card';
import Search from './components/Search';
import UserCard from './components/UserCard';
import Favorites from './components/Favorites';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Favorites />
      <UserCard
        image="/avatar.png"
        alt="Elliot"
        name="Elliot Alderson"
        atSign="@mr_robot"
        description="Trabalha com segurança cibernética, experiencia em empresas multinacionais."
      />
      <Search />
      <Card />
    </main>
  );
}

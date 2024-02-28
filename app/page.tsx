import Intro from './components/Intro';
import { Header } from './components/Header';

export default function Home() {
  return (
    <main className="min-h-main-height p-6 flex justify-center items-center">
      <Intro
        titleIntro="Procure pelo Nome ou Nome de Usuário"
        messageIntro="Encontre os repositórios de algum usuário digitando no campo acimadddd"
      />
    </main>
  );
}

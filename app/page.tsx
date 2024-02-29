import { tv } from 'tailwind-variants';
import Intro from './components/Intro';

const styles = tv({
  slots: {
    page: 'min-h-main-height p-6 flex justify-center items-center',
  },
});

const { page } = styles();

export default function Home() {
  return (
    <main className={`${page()}`}>
      <Intro
        titleIntro="Procure pelo Nome ou Nome de Usuário"
        messageIntro="Encontre os repositórios de algum usuário digitando no campo acima"
      />
    </main>
  );
}

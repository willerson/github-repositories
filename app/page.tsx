import Image from 'next/image';
import Card from './components/Card/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card />
      <Card />
    </main>
  );
}

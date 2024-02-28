'use client';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Search from '../Search';
import Favorites from '../Favorites';
import { tv } from 'tailwind-variants';
import { GlobalContext } from '@/app/GlobalContext';
import { useRouter } from 'next/navigation';

const styles = tv({
  base: 'flex justify-between items-center w-full border-b border-border-b space-x-3 pl-3 lg:pl-6',
});

export const Header = () => {
  const [content, setContent] = useState('');
  const global = React.useContext(GlobalContext);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    global?.setName(content);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
    router.push(`/user?user=${content}`);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <header className={styles()}>
      <Search
        onChange={handleChange}
        onSubmit={handleSearch}
        inputRef={inputRef}
      />
      <Favorites />
    </header>
  );
};

import React from 'react';
import { SearchIcon } from '../icons/search';
import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    wrapper:
      'border border-border-line rounded py-2 px-4 flex justify-between items-center lg:w-[668px]',
    input: 'text-sm text-placeholder focus:outline-none',
  },
});

const { wrapper, input } = styles();

interface SearchProps {
  onClick?: () => void;
}

const Search = ({ onClick }: SearchProps) => {
  return (
    <div className={`${wrapper()}`}>
      <input
        className={`${input()}`}
        type="text"
        placeholder="Buscar usuário"
      />
      <button onClick={onClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;

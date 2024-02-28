import React from 'react';
import { SearchIcon } from '../icons/search';
import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    wrapper:
      'border border-border-line rounded py-2 px-4 flex justify-between items-center lg:w-[668px]',
    input: 'w-full text-sm text-placeholder focus:outline-none',
  },
});

const { wrapper, input } = styles();

interface SearchProps {
  onClick?: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Search = ({
  onClick,
  onSubmit,
  value,
  onChange,
  inputRef,
}: SearchProps) => {
  return (
    <form className={`${wrapper()}`} onSubmit={onSubmit}>
      <input
        className={`${input()}`}
        type="text"
        placeholder="Buscar usuário"
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      <button type="submit" onClick={onClick}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;

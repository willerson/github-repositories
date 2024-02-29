import React from 'react';
import Image from 'next/image';
import { tv } from 'tailwind-variants';
const styles = tv({
  slots: {
    section: 'text-center',
    title: 'text-xl text-primary font-semibold',
    messageSection: 'text-base text-grey-neutral mb-12',
    figure: 'flex justify-center',
  },
});

const { section, title, messageSection, figure } = styles();

const NoFavorites = () => {
  return (
    <section className={`${section()}`}>
      <h2 className={`${title()}`}>Sem repositórios Favoritos</h2>
      <p className={`${messageSection()}`}>Busque a adicione aos favoritos</p>
      <figure className={`${figure()}`}>
        <Image
          src={'/undraw_no_data_re_kwbl.svg'}
          alt="No favorites"
          width={230}
          height={257}
          priority={true}
        />
      </figure>
    </section>
  );
};

export default NoFavorites;

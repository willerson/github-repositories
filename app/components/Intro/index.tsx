import React from 'react';
import Image from 'next/image';
import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    section: 'text-center',
    notFoundName: 'text-xl text-primary font-semibold',
    titleSection: 'text-xl font-semibold text-grey-neutral',
    messageSection: 'text-base text-grey-neutral mb-12',
    figure: 'flex justify-center',
  },
});

const { section, notFoundName, titleSection, messageSection, figure } =
  styles();

interface IntroProps {
  searchName?: string;
  titleIntro?: string;
  messageIntro?: string;
}

const Intro = ({ searchName, titleIntro, messageIntro }: IntroProps) => {
  const peopleSearchImage = '/undraw_people_search.svg';
  const notFound = '/undraw_404.svg';

  return (
    <section className={`${section()}`}>
      <h2 className={`${notFoundName()}`}>{searchName && `“${searchName}”`}</h2>
      <h2 className={`${titleSection()}`}>{titleIntro}</h2>
      <p className={`${messageSection()}`}>{messageIntro}</p>
      <figure className={`${figure()}`}>
        <Image
          src={`${searchName ? notFound : peopleSearchImage}`}
          alt="Search"
          width={230}
          height={257}
          priority={true}
        />
      </figure>
    </section>
  );
};

export default Intro;

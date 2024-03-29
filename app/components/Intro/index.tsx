import React from 'react';
import Image from 'next/image';
import { tv } from 'tailwind-variants';
const styles = tv({
  slots: {
    section: 'text-center',
    titleSection: 'text-xl font-semibold text-grey-neutral',
    messageSection: 'text-base text-grey-neutral mb-12',
    figure: 'flex justify-center',
  },
});

const { section, titleSection, messageSection, figure } = styles();

interface IntroProps {
  titleIntro?: string;
  messageIntro?: string;
}

const Intro = ({ titleIntro, messageIntro }: IntroProps) => {
  return (
    <section className={`${section()}`}>
      <h2 className={`${titleSection()}`}>{titleIntro}</h2>
      <p className={`${messageSection()}`}>{messageIntro}</p>
      <figure className={`${figure()}`}>
        <Image
          src={`/undraw_people_search.svg`}
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

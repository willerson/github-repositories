'use client';
import React from 'react';
import { HeartFilled } from '../icons/heart-filled';
import { Heart } from '../icons/heart';
import Favorite from './favorite';
import { useState } from 'react';
import { tv } from 'tailwind-variants';

const styles = tv({
  slots: {
    card: 'border border-border-line rounded p-4 flex space-x-2',
    wrapperText: 'mb-4',
    header: 'text-lg text-grey-neutral font-semibold mb-1.5',
    paragraph: 'text-sm text-placeholder',
    footer: 'w-64 flex justify-between items-center',
    technologyType: 'flex items-center text-xs text-grey-neutral space-x-2',
    technologyDot: 'inline-block h-4 w-4 rounded-full',
    dateElement: 'text-xs text-grey-neutral',
  },
});

const {
  card,
  wrapperText,
  header,
  paragraph,
  footer,
  technologyType,
  technologyDot,
  dateElement,
} = styles();

interface CardProps {
  title?: string;
  description?: string;
  technology?: string;
  date?: string;
  dotColor?: string;
}

const Card = ({
  title,
  description,
  technology,
  date,
  dotColor,
}: CardProps) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className={`${card()}`}>
      <div>
        <header className={`${wrapperText()}`}>
          <h2 className={`${header()}`}>{title}</h2>
          <p className={`${paragraph()}`}>{description}</p>
        </header>
        <footer className={`${footer()}`}>
          <p className={`${technologyType()}`}>
            <span className={`${technologyDot()} ${dotColor}`}></span>
            <span>{technology}</span>
          </p>
          <span className={`${dateElement()}`}>{date}</span>
        </footer>
      </div>
      <div>
        <Favorite onClick={handleFavorite} state={favorite}>
          {favorite ? <Heart /> : <HeartFilled />}
        </Favorite>
      </div>
    </div>
  );
};

export default Card;

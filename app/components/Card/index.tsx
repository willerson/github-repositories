'use client';
import React from 'react';
import { HeartFilled } from '../icons/heart-filled';
import { Heart } from '../icons/heart';
import Favorite from './favorite';
import { tv } from 'tailwind-variants';
import technologyColors from './technology.module.css';

const styles = tv({
  slots: {
    card: 'border border-border-line rounded p-4 flex justify-between space-x-2',
    wrapperText: 'mb-4',
    header: 'text-lg text-grey-neutral font-semibold mb-1.5',
    paragraph: 'text-sm text-placeholder',
    footer: 'w-72 flex justify-between items-center',
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

export interface CardProps {
  name?: string | undefined;
  title?: string;
  description?: string;
  technology?: string;
  date?: string;
  dotColor?: string;
  checked?: boolean;
  favorite?: boolean | undefined;
  onClick?: () => void;
}

const Card = ({
  title,
  description,
  technology,
  date,
  favorite,
  onClick,
}: CardProps) => {
  return (
    <div className={`${card()}`}>
      <div>
        <header className={`${wrapperText()}`}>
          <h2 className={`${header()}`}>{title}</h2>
          <p className={`${paragraph()}`}>{description}</p>
        </header>
        <footer className={`${footer()}`}>
          {technology && (
            <p className={`${technologyType()}`}>
              <span
                className={`${technologyDot()} ${
                  technologyColors[technology.toLocaleLowerCase()] || 'language'
                }`}
              ></span>
              <span>{technology}</span>
            </p>
          )}
          <span className={`${dateElement()}`}>{date}</span>
        </footer>
      </div>
      <div>
        <Favorite onClick={onClick} state={favorite}>
          {favorite ? <HeartFilled /> : <Heart />}
        </Favorite>
      </div>
    </div>
  );
};

export default Card;

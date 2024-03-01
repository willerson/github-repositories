import Image from 'next/image';
import React from 'react';
import { tv } from 'tailwind-variants';

export interface UserCardProps {
  image?: string;
  alt?: string;
  name?: string;
  atSign?: string;
  description?: string;
  className?: string;
}

const styles = tv({
  slots: {
    userCard: 'border border-border-line rounded py-10 px-6 text-center',
    figure: 'w-[200px] h-[200px] rounded-full overflow-hidden mx-auto mb-6',
    userName: 'text-xl text-grey-neutral font-semibold',
    atSignName: 'text-sm text-gray-dark mb-6',
    userDescription: 'text-sm text-gray-dark',
  },
});

const { userCard, figure, userName, atSignName, userDescription } = styles();

const UserCard = ({
  image,
  alt,
  name,
  atSign,
  description,
  className,
}: UserCardProps) => {
  return (
    <div className={`${userCard()} ${className}`}>
      <figure className={`${figure()}`}>
        <Image
          src={`${image}`}
          alt={`${alt}`}
          width={200}
          height={200}
          priority={true}
        />
      </figure>
      <h3 className={`${userName()}`}>{name}</h3>
      <p className={`${atSignName()}`}>{atSign}</p>
      <p className={`${userDescription()}`}>{description}</p>
    </div>
  );
};

export default UserCard;

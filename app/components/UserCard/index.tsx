// @ts-nocheck
import Image from 'next/image';
import React from 'react';
import { tv } from 'tailwind-variants';

export interface UserData {
  data: {
    id: string | undefined;
    avatar_url?: string | undefined;
    name?: string | undefined;
    twitter_username?: string | undefined;
    bio?: string | undefined;
  }[];
}

export interface UserCardProps {
  data?: UserData[];
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

const UserCard = ({ data }: UserData) => {
  return (
    <div className={`${userCard()} `}>
      {
        <div key={data.id}>
          <figure className={`${figure()}`}>
            <Image
              src={`${data.avatar_url}`}
              alt={`${data.name}`}
              width={200}
              height={200}
              priority={true}
            />
          </figure>
          <h3 className={`${userName()}`}>{data.name}</h3>
          <p className={`${atSignName()}`}>{data.twitter_username}</p>
          <p className={`${userDescription()}`}>{data.bio}</p>
        </div>
      }
    </div>
  );
};

export default UserCard;

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import UserCard from '@/app/components/UserCard';

const userInfos = {
  alt: 'willerson',
  name: 'Willerson',
  atSign: '@willerson',
  description: 'Dev Front-end',
  key: 1,
  image: 'https://avatars.githubusercontent.com/u/22488088?v=4',
};

describe('UserCard', () => {
  it('Renderizar o UserCard', () => {
    const { getByText, getByAltText, getByRole } = render(
      <UserCard
        alt={userInfos.alt}
        name={userInfos.name}
        atSign={userInfos.atSign}
        description={userInfos.description}
        key={userInfos.key}
        image={userInfos.image}
      />
    );

    const figureElement = getByRole('figure');
    const nameElement = getByText('Willerson');
    const altElement = getByAltText('willerson');

    expect(figureElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(altElement).toBeInTheDocument();
  });
});

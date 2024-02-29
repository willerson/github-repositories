import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '@/app/components/Card';

describe('Card repositorios', () => {
  it('Renderizar o Card de repositórios com título e tecnologia', () => {
    const repositories = {
      title: 'Next test',
      description: 'Next test repository',
      technology: 'Typescript',
      date: new Date(),
    };

    render(
      <Card
        title={repositories.title}
        description={repositories.description}
        technology={repositories.technology}
        date={String(repositories.date)}
      />
    );

    const titleElement = screen.getByText('Next test');
    const technologyElement = screen.getByText('Typescript');

    expect(titleElement).toBeInTheDocument();
    expect(technologyElement).toBeInTheDocument();
  });

  it('Renderizar o Card de repositórios com description e date', () => {
    const repositories = {
      title: 'Next test',
      description: 'Next test repository',
      technology: 'Typescript',
      date: new Date(),
    };

    const { queryByText } = render(
      <Card
        title={repositories.title}
        description={repositories.description}
        technology={repositories.technology}
        date={String(repositories.date)}
      />
    );

    const descriptionElement = screen.getByText('Next test repository');
    const dateElement = queryByText(String(new Date()));

    expect(descriptionElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});

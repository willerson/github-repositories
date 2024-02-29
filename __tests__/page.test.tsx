import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Page', () => {
  it('renders a heading and text', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 2 });
    const text = screen.findAllByText;

    expect(heading).toBeInTheDocument();
    expect(text).toContainElement;
  });
});

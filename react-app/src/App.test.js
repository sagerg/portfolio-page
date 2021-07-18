import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about section', () => {
  render(<App />);
  const linkElement = screen.getByText(
    "an aspiring developer"
    );
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nav bar', () => {
  const nav = ['ABOUT', 'PROJECTS', 'SOCIALS'];
  render(<App />);
  nav.map((item) => {
    const linkElement = screen.getByText(item);
    expect(linkElement).toBeInTheDocument();
  });
});

test('renders resume button', () => {
  render(<App />);
  const linkElement = screen.getByText("Resume PDF");
  expect(linkElement).toBeInTheDocument();
});

test('renders author image', () => {
  render(<App />);
  const linkElement = screen.getByAltText('author');
  expect(linkElement).toBeInTheDocument();
});
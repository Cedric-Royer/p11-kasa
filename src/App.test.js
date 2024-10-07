import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home page', () => {
  render(<App />);
  const homeElement = screen.getByText(/Accueil/);
  expect(homeElement).toBeInTheDocument();
  expect(homeElement).toHaveClass("active");
});


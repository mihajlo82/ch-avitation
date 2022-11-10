import { render, screen } from '@testing-library/react';
import App from './App';

test('render initial header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nothing checked!/i);
  expect(linkElement).toBeInTheDocument();
});

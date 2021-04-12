import { render, screen } from '@testing-library/react';
import App from '../src/App';

test(`renders 'Scrawler' title`, () => {
  render(<App />);
  const mainTitle = screen.getByText(/Scrawler/i);
  expect(mainTitle).toBeInTheDocument();
});

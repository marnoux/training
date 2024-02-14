import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders Pokemon header', () => {
	render(<App />);

	const linkElement = screen.getByText(/Pokémon/i);

	expect(linkElement).toBeInTheDocument();
});

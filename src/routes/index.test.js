import { it, expect } from 'vitest';
import Index from './index.svelte';
import { render, screen } from '@testing-library/svelte';

it('should the given main layout', () => {
	beforeEach(() => {
		render(Index, { props: {} });
	});

	afterEach(() => {});

	it('that the Todo is rendered', () => {
		expect(screen.getByLabelText('Dummy Sveltkit App with initial settings')).toBeInTheDocument();
	});
});

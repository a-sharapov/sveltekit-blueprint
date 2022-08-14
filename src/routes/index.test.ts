import { it, expect, beforeEach, afterEach, describe } from 'vitest';
import Index from './index.svelte';
import { cleanup, render, screen } from '@testing-library/svelte';

describe('Test main page', () => {
	it('should the given main layout', () => {
		beforeEach(() => {
			cleanup();
			render(Index, { props: {} });
		});

		afterEach(() => {});

		it('that the dummy content is rendered', () => {
			expect(screen.getByLabelText('Dummy Sveltkit App with initial settings')).toBeInTheDocument();
		});
	});
});

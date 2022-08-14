import { VALIDATE_PATTERNS as patterns } from '$lib/constants';

export const validateValue = (value: string, name: string): boolean => {
	if (!!value && name in patterns && !patterns[name].test(value)) {
		return false;
	}
	return true;
};

export const stringToHash = (string: string): number => {
	let hash = 0;
	let i: number;
	let chr: number;

	if (string.length === 0) return hash;

	for (i = 0; i < string.length; i++) {
		chr = string.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0;
	}

	return Math.abs(hash);
};

export const togglePlaceholder = (
	action: string,
	target: HTMLInputElement | HTMLTextAreaElement
): void => {
	switch (action) {
		case 'show':
			[target, target.parentElement as HTMLElement].map((element: HTMLElement) => {
				element?.setAttribute('data-placeholder', target.placeholder as string);
			});
			target.placeholder = '';
			break;
		case 'hide':
			target.placeholder = target.getAttribute('data-placeholder') as string;
			[target, target.parentElement as HTMLElement].map((element: HTMLElement) => {
				element?.removeAttribute('data-placeholder');
			});
			break;
	}
};

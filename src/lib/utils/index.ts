import { VALIDATE_PATTERNS as patterns } from '$lib/constants';

export const partial =
	(fn, ...args) =>
	(..._arg) =>
		fn(...args, ..._arg);

export const compose = (...fns) =>
	fns.reduceRight(
		(prevFn, nextFn) =>
			(...args) =>
				nextFn(prevFn(...args)),
		(value) => value
	);

export const memoize = (fn) => {
	const cache = {};
	return (...args) => {
		const n = args[0];
		if (n in cache) {
			return cache[n];
		} else {
			const result = fn(n);
			cache[n] = result;
			return result;
		}
	};
};

export const debounce = (fn, wait, immediate) => {
	let timeout;

	return function executedFunction() {
		const context = this;
		const args = arguments;

		const later = function () {
			timeout = null;
			if (!immediate) fn.apply(context, args);
		};

		const callNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) fn.apply(context, args);
	};
};

export const throttle = (fn, wait, options) => {
	let context, args, result;
	let timeout = null;
	let previous = 0;
	if (!options) options = {};
	const later = function () {
		previous = options.leading === false ? 0 : Date.now();
		timeout = null;
		result = fn.apply(context, args);
		if (!timeout) context = args = null;
	};
	return function () {
		const now = Date.now();
		if (!previous && options.leading === false) previous = now;
		const remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = fn.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
};

export const validate = (value, name) => {
	value && name in patterns && !patterns[name].test(value) ? true : false;
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
): never => {
	switch (action) {
		case 'show':
			[target, target.parentElement].map((element: HTMLInputElement | HTMLTextAreaElement) => {
				element?.setAttribute('data-placeholder', target.placeholder);
			});
			target.placeholder = '';
			break;
		case 'hide':
			target.placeholder = target.getAttribute('data-placeholder');
			[target, target.parentElement].map((element: HTMLInputElement | HTMLTextAreaElement) => {
				element?.removeAttribute('data-placeholder');
			});
			break;
	}
};

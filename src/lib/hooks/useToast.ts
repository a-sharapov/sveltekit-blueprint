import { appToast } from '$lib/stores';
import { stringToHash } from '$lib/utils';

const useToast = () => {
	const hideToast = (): void => {
		appToast.update((previous) => {
			return {
				...previous,
				stamp: 0,
				visible: false
			};
		});
	};
	const showToast = (content: string, type: 'success' | 'error' | 'warning' | 'info'): void => {
		appToast.set({
			type,
			content,
			stamp: stringToHash(Date.now().toString()),
			visible: true
		});
	};

	return {
		hideToast,
		showToast
	};
};

export default useToast;

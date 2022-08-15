import { writable } from 'svelte/store';

export interface IAuth {
	user: Array<any>;
}
export const Auth = writable<IAuth | null>(null);

export interface IAppToast {
	type: 'success' | 'error' | 'warning' | 'info';
	content: string | null;
	stamp: number;
	visible: boolean;
}
export const appToast = writable<IAppToast>({
	type: 'info',
	content: null,
	stamp: 0,
	visible: false
});

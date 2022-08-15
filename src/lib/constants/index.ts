interface IConstant {
	[key: string]: string | number | boolean;
}

export const ROBOTS_VARIANTS: IConstant = {
	INDEX_FOLLOW: 'index, follow',
	INDEX_NOFOLLOW: 'index, nofollow',
	NOINDEX_FOLLOW: 'noindex, follow',
	NOINDEX_NOFOLLOW: 'noindex, nofollow'
};

interface IValidatePattern {
	[key: string]: RegExp;
}

/* eslint-disable */
export const VALIDATE_PATTERNS: IValidatePattern = {
	username: /^[a-z0-9_-]{3,16}$/,
	password:
		/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
	time: /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/,
	phone:
		/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/,
	email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
};
/* eslint-enable */

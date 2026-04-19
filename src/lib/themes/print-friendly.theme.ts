import type { CardTheme } from './card-theme.interface';

export const printFriendly: CardTheme = {
	name: 'Print Friendly',
	surface: {
		background: '#ffffff',
		border: '#222222',
		shadow: 'rgba(0, 0, 0, 0.08)'
	},
	text: {
		primary: '#000000',
		accent: '#d9d9d9'
	},
	palette: {
		primary: '#000000',
		accent: '#222222',
		accentSoft: '#d9d9d9'
	}
};

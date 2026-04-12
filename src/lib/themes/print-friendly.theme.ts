import type { CardTheme } from './card-theme.interface';

export const printFriendly: CardTheme = {
	name: 'Print Friendly',
	surface: {
		background: '#ffffff',
		border: '#cfcfcf',
		shadow: 'rgba(0, 0, 0, 0.08)'
	},
	text: {
		primary: '#000000',
		muted: '#5f5f5f'
	},
	palette: {
		primary: '#000000',
		secondary: '#f2f2f2',
		accent: '#222222',
		accentSoft: '#d9d9d9'
	}
};

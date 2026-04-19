import type { CardTheme } from './card-theme.interface';

export const darkForest: CardTheme = {
	name: 'Dark Forest',
	surface: {
		background: 'linear-gradient(180deg, #18251f 0%, #09100c 100%)',
		border: ' #0a120a',
		shadow: 'rgba(0, 0, 0, 0.35)'
	},
	text: {
		primary: '#f5efe4',
		accent: 'rgba(245, 239, 228, 0.72)'
	},
	palette: {
		primary: '#a7df7f',
		accent: '#192412',
		accentSoft: 'rgba(167, 223, 127, 0.18)'
	}
};

import type { CardTheme } from './card-theme.interface';

export const darkForest: CardTheme = {
	surface: {
		background: 'linear-gradient(180deg, #18251f 0%, #09100c 100%)',
		border: 'rgba(255, 255, 255, 0.14)',
		shadow: 'rgba(0, 0, 0, 0.35)'
	},
	text: {
		primary: '#f5efe4',
		muted: 'rgba(245, 239, 228, 0.72)'
	},
	palette: {
		primary: '#a7df7f',
		secondary: 'rgba(167, 223, 127, 0.14)',
		accent: '#a7df7f',
		accentSoft: 'rgba(167, 223, 127, 0.18)'
	}
};

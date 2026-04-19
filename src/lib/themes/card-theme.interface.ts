export interface CardTheme {
	name: string;
	surface: {
		background: string;
		border: string;
		shadow: string;
	};
	text: {
		primary: string;
		accent: string;
	};
	palette: {
		primary: string;
		accent: string;
		accentSoft: string;
	};
	effects?: {
		chromeBackground?: string;
	};
}

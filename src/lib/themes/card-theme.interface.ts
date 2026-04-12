export interface CardTheme {
	name: string;
	surface: {
		background: string;
		border: string;
		shadow: string;
	};
	text: {
		primary: string;
		muted: string;
	};
	palette: {
		primary: string;
		secondary: string;
		accent: string;
		accentSoft: string;
	};
	effects?: {
		chromeBackground?: string;
	};
}

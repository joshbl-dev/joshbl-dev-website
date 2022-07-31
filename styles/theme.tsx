import {Theme} from "@mui/system";
import {createTheme} from "@mui/material/styles";

export const theme: Theme = createTheme({
	typography: {
		fontFamily: ["League Spartan"].join(","),

	},
	palette: {
		mode: "dark",
		primary: {
			main: "#7ee6f2",
		},
		secondary: {
			main: "#00616c",
		},
	},

});

export function mobile_show(type: string) {
	return {
		display: {
			xs: type,
			sm: "none",
		},
	};
}

export function mobile_hide(type: string) {
	return {
		display: {
			xs: "none",
			sm: type,
		},
	};
}

export function tablet_show(type: string) {
	return {
		display: {
			xs: "none",
			sm: type,
		},
	};
}

export function tablet_hide(type: string) {
	return {
		display: {
			xs: type,
			sm: "none",
		},
	};
}

export function desktop_show(type: string) {
	return {
		display: {
			xs: "none",
			md: type,
		},
	};
}

export function desktop_hide(type: string) {
	return {
		display: {
			xs: type,
			md: "none",
		},
	};
}
import { Theme } from "@mui/system";
import { createTheme } from "@mui/material/styles";

export const theme: Theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#7ee6f2"
		},
		secondary: {
			main: "#00a4b4"
		}
		// background: {
		// 	default: "#777777"
		// }
	}
});

export function mobile_show(type) {
	return {
		display: {
			xs: type,
			sm: "none"
		}
	};
}

export function mobile_hide(type) {
	return {
		display: {
			xs: "none",
			sm: type
		}
	};
}

export function tablet_show(type) {
	return {
		display: {
			xs: "none",
			sm: type
		}
	};
}

export function tablet_hide(type) {
	return {
		display: {
			xs: type,
			sm: "none"
		}
	};
}

export function desktop_show(type) {
	return {
		display: {
			xs: "none",
			md: type
		}
	};
}

export function desktop_hide(type) {
	return {
		display: {
			xs: type,
			md: "none"
		}
	};
}
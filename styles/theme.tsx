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
import { Theme } from "@mui/system";
import { createTheme } from "@mui/material/styles";

export const theme: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#00a4b4"
		},
		secondary: {
			main: "#7ee6f2"
		}
	}
});
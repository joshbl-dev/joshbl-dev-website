import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import { CssBaseline } from "@mui/material";
import { NavBar } from "./NavBar";
import { pages } from "../types/constants";
import { ComingSoon } from "./ComingSoon";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import React from "react";

export default function PageTemplate(props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={styles.main}>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/icons/icon.ico" />
				</Head>
				<main className={styles.container}>
					<NavBar pages={pages.filter(p => props.page != p)} />
					<ComingSoon />
				</main>
			</div>
		</ThemeProvider>
	);
};
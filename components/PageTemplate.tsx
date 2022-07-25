import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import { CssBaseline } from "@mui/material";
import { NavBar } from "./NavBar";
import { pages } from "../types/constants";
import { ComingSoon } from "./ComingSoon";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import React from "react";
import { PageInfo } from "../types/PageInfo";

export default function PageTemplate(props) {
	const page: PageInfo = props.page;
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={styles.main}>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/icons/icon.ico" />
				</Head>
				<main className={styles.container}>
					<NavBar pages={pages} />
					{page.active ? props.components : <ComingSoon />}
				</main>
				<footer className={styles.footer}>
					&copy; {new Date().getFullYear()} Josh Landsman. All rights
					reserved.
				</footer>
			</div>
		</ThemeProvider>
	);
};
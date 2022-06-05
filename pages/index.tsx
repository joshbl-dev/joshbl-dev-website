import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { NavBar } from "../components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import { Grid, Typography } from "@mui/material";

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<div className={styles.container}>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/icons/icon.ico" />
				</Head>

				<main className={styles.main}>
					<NavBar pages={["Projects", "Bio", "???"]} />
					<Grid container
						  justifyContent={"center"}>

						<Typography className={styles.pfp}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam id.
						</Typography>

						<img src={"/images/pfp.jpeg"} alt={"pfp"}
							 className={styles.pfp} />
					</Grid>
				</main>

				<footer className={styles.footer}>
					&copy; {new Date().getFullYear()} Josh Landsman. All rights
					reserved.
				</footer>
			</div>
		</ThemeProvider>
	);
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { NavBar } from "../components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import {
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	Typography
} from "@mui/material";
import Ticker from "react-ticker";
import { PictureAsPdf } from "@mui/icons-material";

const skills = ["Java",
	"JavaScript",
	"NestJS",
	"TypeScript", "Python", "PostgreSQL", "Firebase",
	"Google Cloud", "Azure", "Git", "Lua",
	"React/React Native", "HTML",
	"CSS"];

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={styles.main}>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/icons/icon.ico" />
				</Head>

				<main className={styles.container}>
					<NavBar
						pages={["Projects", "Bio", "???"]} />
					<Grid
						container
						direction="row"
						justifyContent="center"
						alignItems="center"
						xs={"auto"}
						padding={2}
					>
						{/* Welcome text */}
						<Grid item md>
							<Container maxWidth={"md"}
							>
								<Typography variant={"h3"} align={"center"}>
									Creating positive change in the world
									through
									computer science.
								</Typography>
							</Container>
						</Grid>

						{/* Profile Image */}
						<Grid item xs={"auto"}>
							<Box
								sx={{
									display: {
										xs: "flex",
										md: "none"
									}
								}}
								component={"img"}
								display={"flex"}
								className={styles.pfp_mobile}
								src="/images/pfp.jpeg"
								alt="Joshbl"
							/>
							<Box
								sx={{
									display: {
										xs: "none",
										md: "flex"
									}
								}}
								component={"img"}
								display={"flex"}
								className={styles.pfp}
								src="/images/pfp.jpeg"
								alt="Joshbl"
							/>
						</Grid>

					</Grid>
					<Box maxWidth={"sm"} padding={2}>
						<Typography variant={"h4"}
									padding={1}
									justifyContent={"center"} align={"center"}>Skills
							&
							Technologies</Typography>
						<Ticker speed={2}
						>{() => (<>
							<Typography
								variant={"body1"}
								whiteSpace={"nowrap"}>{skills.map(skill => skill + " | ")}</Typography>
						</>)}</Ticker>
					</Box>

					<Box padding={2}>
						<Button focusRipple={true} variant={"outlined"}
								size={"large"}
								onClick={() => window.open("/pdfs/Resume.pdf", "_blank")}
								endIcon={<PictureAsPdf />}
						>
							<Typography
								variant={"button"}>Resume</Typography>
						</Button>
					</Box>


				</main>

				<footer className={styles.footer}>
					&copy; {new Date().getFullYear()} Josh Landsman. All rights
					reserved.
				</footer>
			</div>
		</ThemeProvider>
	);
}

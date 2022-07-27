import styles from "../styles/Home.module.css";
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Ticker from "react-ticker";
import { PictureAsPdf } from "@mui/icons-material";
import { pages } from "../types/constants";
import PageTemplate from "../components/PageTemplate";
import {
	desktop_hide,
	desktop_show,
	mobile_hide,
	mobile_show
} from "../styles/theme";
import ProfilePicture from "../components/ProfilePicture";

const skills = ["Java",
	"JavaScript",
	"NestJS",
	"TypeScript", "Python", "PostgreSQL", "Firebase",
	"Google Cloud", "Azure", "Git", "Lua",
	"React/React Native", "HTML",
	"CSS"];

const page = pages.filter(p => p.title == "Home")[0];

const quote = "Creating positive change in the world through computer science.";

export default function Home() {
	return (
		<PageTemplate page={page} components={
			<>
				<Typography variant="h4" padding={2}
							textAlign={"center"}
							sx={{ fontWeight: "bold" }}>
					Site Under Construction
				</Typography>
				<Button variant={"contained"}
						href={"https://old.joshbl.dev"}>
					Old Site
				</Button>
				<Grid
					container
					item
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
							<Typography sx={{ ...mobile_hide("flex") }}
										variant={"h3"} align={"center"}>
								{quote}
							</Typography>
							<Typography sx={{ ...mobile_show("flex") }}
										variant={"h5"} align={"center"}>
								{quote}
							</Typography>
						</Container>
					</Grid>

					{/* Profile Image */}
					<Grid item xs={"auto"}>
						<Container
							sx={{
								...desktop_hide("flex")
							}}
							className={styles.pfp_mobile}
						>
							<ProfilePicture />
						</Container>
						<Box
							sx={{
								...desktop_show("flex")
							}}
							className={styles.pfp}>
							<Container>
								<ProfilePicture />
							</Container>
						</Box>
					</Grid>

				</Grid><Box maxWidth={"sm"} padding={2}>
				<Typography variant={"h4"}
							padding={1}
							justifyContent={"center"} align={"center"}>Skills
					&
					Technologies</Typography>
				<Ticker speed={2}
				>{() => (<>
					<Typography
						variant={"body1"}
						whiteSpace={"nowrap"}>{skills.map(skill => " | " + skill)}</Typography>
				</>)}</Ticker>
			</Box><Box padding={2}>
				<Button focusRipple={true} variant={"outlined"}
						size={"large"}
						onClick={() => window.open("/pdfs/Resume.pdf", "_blank")}
						endIcon={<PictureAsPdf />}
				>
					<Typography
						variant={"button"}>Resume</Typography>
				</Button>
			</Box></>
		} />
	);
}

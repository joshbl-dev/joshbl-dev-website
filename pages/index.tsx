import styles from "../styles/Home.module.css";
import React from "react";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Ticker from "react-ticker";
import {PictureAsPdf} from "@mui/icons-material";
import {pages} from "../types/constants";
import PageTemplate from "../components/PageTemplate";
import {
	desktop_hide,
	desktop_show,
	mobile_hide,
	mobile_show,
} from "../styles/theme";
import ProfilePicture from "../components/ProfilePicture";

const skills = [
	"Java",
	"JavaScript",
	"NestJS",
	"Next.js",
	"TypeScript",
	"Node.js",
	"Python",
	"OpenCV",
	"TensorFlow",
	"Sklearn",
	"SciPy",
	"Lua",
	"Bash",
	"React/React Native",
	"Dart",
	"Flutter",
	"Google Cloud",
	"Azure",
	"AWS",
	"SQL",
	"NoSQL",
	"Serverless Functions",
	"Redis",
	"Git",
	"Docker",
	"Jenkins",
	"Vercel",
	"HTML",
	"CSS"];

const page = pages.filter(p => p.title == "Home")[0];

const quote = "Creating positive change in the world through computer science";

export default function Home() {
	return (
		<PageTemplate page={page} components={
			<>
				<Grid
					container
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						margin: "20px",
					}}
				>
					{/* Welcome text */}
					<Grid size={{ md: 6 }}>
						<Container maxWidth={"md"}
						>
							<Typography sx={{...mobile_hide("flex")}}
										variant={"h3"} align={"center"}>
								{quote}
							</Typography>
							<Typography sx={{...mobile_show("flex")}}
										variant={"h4"} align={"center"}>
								{quote}
							</Typography>
						</Container>
					</Grid>

					{/* Profile Image */}
					<Grid size={{ xs: "auto" }}>
						<Container
							sx={{
								...desktop_hide("flex"),
							}}
							className={styles.pfp_mobile}
						>
							<ProfilePicture width={250} height={250} />
						</Container>
						<Container
							sx={{
								...desktop_show("flex"),
							}}
							className={styles.pfp}>
							<ProfilePicture width={350} height={350} />
						</Container>
					</Grid>

				</Grid><Box sx={{ maxWidth: "sm", margin: "20px" }}>
				<Typography variant={"h4"}
							sx={{ margin: "10px", justifyContent: "center", textAlign: "center" }}>Skills
					&
					Technologies</Typography>
				<Ticker speed={2}
				>{() => (<>
					<Typography
						variant={"body1"}
						sx={{ whiteSpace: "nowrap" }}>{skills.map(skill => " | " + skill)}</Typography>
				</>)}</Ticker>
			</Box><Box sx={{ margin: "20px" }}>
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

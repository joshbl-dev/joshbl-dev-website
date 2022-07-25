import * as React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, CardHeader, Typography } from "@mui/material";
import { ProjectInfo } from "../types/ProjectInfo";
import { desktop_hide, desktop_show } from "../styles/theme";

type ProjectCardProps = {
	mediaSide: "left" | "right";
	media: React.ReactNode;
	projectInfo: ProjectInfo
}

export default function ProjectCard(props: ProjectCardProps) {
	const projectInfo = props.projectInfo;
	return (
		<>
			<Card
				raised
				sx={{
					...desktop_show("flex"),
					margin: 3,
					height: "50vh",
					width: "75vw",
					justifyContent: "space-between"
				}}>
				{props.mediaSide == "left" ? (<Box>
					{props.media}
				</Box>) : undefined}

				<Box justifyContent={"center"}
					 maxWidth={"50%"}
					 sx={{ display: "flex", flexDirection: "column" }}>
					<CardHeader title={projectInfo.title} />
					<CardContent sx={{}}>
						<Typography variant="body1">
							{projectInfo.description}
						</Typography>
					</CardContent>
				</Box>
				{props.mediaSide == "right" ? (<Box>
					{props.media}
				</Box>) : undefined}
			</Card>

			<Card
				raised
				sx={{
					...desktop_hide("flex"),
					margin: 3,
					height: "60vh",
					width: "75vw"
				}}>

				<Box
					sx={{ display: "flex", flexDirection: "column" }}>
					<Box maxHeight={"50%"}>
						{props.media}
					</Box>
					<Box textAlign={"center"}>
						<CardHeader title={projectInfo.title} />
						<CardContent>
							<Typography variant="body1">
								{projectInfo.description}
							</Typography>
						</CardContent>
					</Box>

				</Box>

			</Card>

		</>
	);
}
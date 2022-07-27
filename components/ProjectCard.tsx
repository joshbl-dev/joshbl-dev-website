import React from "react";
import Card from "@mui/material/Card";
import {
	Box,
	Button,
	CardContent,
	CardHeader,
	IconButton,
	Typography
} from "@mui/material";
import { ProjectInfo } from "../types/ProjectInfo";
import { desktop_hide, desktop_show } from "../styles/theme";
import LaunchIcon from "@mui/icons-material/Launch";

type ProjectCardProps = {
	mediaSide: "left" | "right";
	media: React.ReactNode;
	projectInfo: ProjectInfo
}

function externalLink(side: string, link: string) {
	if (side != "bottom") {
		const margin = side == "left" ? { marginRight: "10px" } : { marginLeft: "10px" };
		return (<Box {...margin} marginTop={"10px"}><IconButton
			href={link}
			size={"medium"}><LaunchIcon
		/></IconButton></Box>);
	} else {
		return (<Box textAlign={"center"}><Button
			sx={{
				width: "20%",
				padding: "10px"
			}}
			size={"medium"}
			href={link}
			variant={"outlined"}><Typography>Source</Typography></Button></Box>);
	}
}

export default function ProjectCard(props: ProjectCardProps) {
	const projectInfo = props.projectInfo;
	return (
		<>
			{/*Desktop Card*/}
			<Card
				raised
				sx={{
					...desktop_show("flex"),
					margin: 3,
					minHeight: "fit-content",
					height: "450px",
					width: "75vw",
					justifyContent: "space-between",
					borderRadius: "20px"
				}}>
				{props.mediaSide == "left" ? (
						<Box width={"50%"}>
							{props.media}
						</Box>) :
					externalLink(props.mediaSide, projectInfo.url)}

				<Box justifyContent={"center"}
					 width={"50%"}
					 sx={{ display: "flex", flexDirection: "column" }}>

					<CardHeader title={projectInfo.title}
								titleTypographyProps={{
									fontWeight: "bold",
									fontSize: "2rem"
								}} />
					<CardContent>
						<Typography variant="body1"
									fontSize={"1.5rem"}
									fontWeight={"medium"}>
							{projectInfo.description}
						</Typography>
					</CardContent>
				</Box>
				{props.mediaSide == "right" ? (
					<Box width={"50%"}>
						{props.media}
					</Box>) : externalLink(props.mediaSide, projectInfo.url)}
			</Card>

			{/*Mobile Card*/}
			<Card
				raised
				sx={{
					...desktop_hide("flex"),
					margin: 3,
					height: "fit-content",
					width: "75vw",
					borderRadius: "20px"
				}}>

				<Box
					sx={{ display: "flex", flexDirection: "column" }}>
					<Box
						minHeight={"200px"}
						height={"fit-content"}
						alignItems={"center"}
					>
						{props.media}
					</Box>

					<Box paddingTop={"20px"}
						 textAlign={"center"}>
						{externalLink("bottom", projectInfo.url)}


						<CardContent sx={{ height: "fit-content" }}>
							<Typography variant="h5" fontWeight={"bold"}>
								{projectInfo.title}
							</Typography>
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
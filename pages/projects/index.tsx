import React from "react";
import {pages, projects} from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";
import ProjectCard from "../../components/ProjectCard";
import {CardMedia} from "@mui/material";


const page = pages.filter(p => p.title == "Projects")[0];

export default function Projects() {
	return (
		<PageTemplate page={page} components={
			<>{projects.map((project, index) => <ProjectCard
				key={project.title}
				mediaSide={index % 2 == 0 ? "left" : "right"}
				projectInfo={project}
				media={project.mediaType == "image" ?
					<CardMedia component={"img"}
							   width={"100%"}
							   height={"100%"}
							   image={project.mediaContent}
							   alt={project.altText} /> :

					<iframe
						style={{border: "none"}}
						width={"100%"}
						height={"100%"}
						src={project.mediaContent}
					/>

				} />)}
			</>
		}

		/>
	);
}
import axios, { AxiosInstance } from "axios";
import { BaseUrl } from "./BaseUrl";
import { PageInfo } from "./PageInfo";
import { ProjectInfo } from "./ProjectInfo";

export const AXIOS_INSTANCE: AxiosInstance = axios.create({
	baseURL: BaseUrl.JOSHBL_API
});


export const pages: PageInfo[] = [
	{
		title: "Home",
		active: true,
		url: "/"
	},
	{
		title: "Projects",
		active: true,
		url: "/projects"
	},
	{
		title: "Bio",
		active: false,
		url: "/bio"
	},
	{
		title: "???",
		active: false,
		url: "/mystery"
	}
];

export const projects: ProjectInfo[] = [
	{
		title: "Next.js Personal Website",
		description: "A frontend for the joshbl.dev website. Made with React, Next.js in Typescript using the Material UI library.",
		url: "https://github.com/joshbl-dev/joshbl-dev-website",
		mediaType: "image",
		mediaContent: "/images/projects/ghu.png",
		altText: "Global Hackathon Site"
	},
	{
		title: "NestJS Personal API",
		description: "Created a production REST API for NCR’s Global Hackathon to organize international participants, teams, and\n" +
			"conference talks using NestJS, Azure, and PostgreSQL",
		url: "https://hackathon.ncr.com/",
		mediaType: "image",
		mediaContent: "/images/projects/ghu.png",
		altText: "Global Hackathon Site"
	},
	{
		title: "NCR Global Hackathon",
		description: "Created a production REST API for NCR’s Global Hackathon to organize international participants, teams, and\n" +
			"conference talks using NestJS, Azure, and PostgreSQL",
		url: "https://hackathon.ncr.com/",
		mediaType: "image",
		mediaContent: "/images/projects/ghu.png",
		altText: "Global Hackathon Site"
	},
	{
		title: "NCR Global Hackathon",
		description: "Created a production REST API for NCR’s Global Hackathon to organize international participants, teams, and\n" +
			"conference talks using NestJS, Azure, and PostgreSQL",
		url: "https://hackathon.ncr.com/",
		mediaType: "video",
		mediaContent: "https://www.youtube.com/embed/2-aVIdkiwGA",
		altText: "Global Hackathon Site"
	}
];
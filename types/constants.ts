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
		mediaContent: "/images/projects/next.webp",
		altText: "Next.js Logo"
	},
	{
		title: "NestJS Personal API",
		description: "A backend REST API for personal projects run on Raspberry Pi accessible @ api.joshbl.dev with proper authentication. Made with NestJS in Typescript.",
		url: "https://github.com/joshbl-dev/joshbl-dev-api",
		mediaType: "image",
		mediaContent: "/images/projects/nest.webp",
		altText: "NestJS Logo"
	},
	{
		title: "NCR Global Hackathon",
		description: "A production REST API for NCR’s Global Hackathon to organize international participants, teams, and " +
			"conference talks using NestJS, Azure, and PostgreSQL.",
		url: "https://hackathon.ncr.com/",
		mediaType: "image",
		mediaContent: "/images/projects/ghu.webp",
		altText: "Global Hackathon Site"
	},
	{
		title: "PokéWars - Minecraft Server",
		description: "Attack and Defend mini-game played by thousands where the players become a Pokémon with custom abilities. Developed in Java using Minecraft API.",
		url: "https://www.pokefind.co/",
		mediaType: "video",
		mediaContent: "https://www.youtube.com/embed/3bjznlsCYQ8",
		altText: "PokeWars Video Demo"
	},
	{
		title: "PKNK - Food Social Media",
		description: "An Android application, in Java, for the QuackHacks hackathon to " +
			"exchange cooking recipes in a social media style using a Google Firebase real-time database.",
		url: "https://github.com/joshbl-dev/PKNK",
		mediaType: "video",
		mediaContent: "https://www.youtube.com/embed/h2Yw2n202WM",
		altText: "PKNK Video Demo"
	},
	{
		title: "Project Gamma Alpha",
		description: "Mini games programmed in Lua including idle simulator, blind maze, and flappy bird.",
		url: "https://github.com/joshbl-dev/Project-Gamma",
		mediaType: "video",
		mediaContent: "https://www.youtube.com/embed/2-aVIdkiwGA",
		altText: "Project Gamma Alpha Demo"
	}
];
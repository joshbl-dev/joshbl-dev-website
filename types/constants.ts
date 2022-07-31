import axios, { AxiosInstance } from "axios";
import { BaseUrl } from "./BaseUrl";
import { PageInfo } from "./PageInfo";
import { ProjectInfo } from "./ProjectInfo";
import { JobInfo } from "./JobInfo";
import { InterestInfo } from "./InterestInfo";
import gaming from "../public/images/interests/gaming.webp";
import skiing from "../public/images/interests/skiing.webp";
import sushi from "../public/images/interests/sushi.webp";
import star_wars from "../public/images/interests/star_wars.webp";
import hiking from "../public/images/interests/hiking.webp";
import ice_cream from "../public/images/interests/ice_cream.webp";


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
		active: true,
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

export const jobs: JobInfo[] = [
	{
		name: "NCR",
		year: 2022,
		position: "Software Engineer Intern",
		projectType: "Computer Vision",
		techStack: ["Python", "OpenCV", "Sklearn", "SciPy", "Google Cloud Functions", "Google Cloud Scheduler", "Slack API"]

	},
	{
		name: "NCR",
		year: 2021,
		position: "Software Engineer Intern",
		projectType: "Backend REST API",
		techStack: ["Typescript", "NestJS", "Azure", "PostgreSQL"]

	},
	{
		name: "PokéFind",
		year: 2020,
		position: "Software Developer",
		projectType: "Game Development",
		techStack: ["Java", "Minecraft API"]
	},
	{
		name: "XLink",
		year: 2020,
		position: "Software Intern",
		projectType: "Computer Vision & Web Scraper",
		techStack: ["Python", "OpenCV", "BeautifulSoup"]
	}
];

export const interests: InterestInfo[] = [
	{
		name: "Skiing",
		image: skiing
	},
	{
		name: "Sushi",
		image: sushi
	},
	{
		name: "Star Wars",
		image: star_wars
	},
	{
		name: "Hiking",
		image: hiking
	},
	{
		name: "Gaming",
		image: gaming
	},
	{
		name: "Ice Cream",
		image: ice_cream
	}
];
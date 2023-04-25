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
	}
];

export const projects: ProjectInfo[] = [
	{
		title: "Team Dinner",
		description: "An all-in-one mobile solution for organizing team dinners through team organization, meal polls, and payment tracking. Made with Flutter, NestJS, and Firestore.",
		url: "https://github.com/joshbl-dev/TeamDinner-JIB-2341",
		mediaType: "video",
		mediaContent: "https://www.youtube.com/embed/BHT6qq0Yg5g",
		altText: "Team Dinner Video Demo"
	},
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
	},
	{
		title: "Old joshbl.dev Website",
		description: "Original digital portfolio website. Made with HTML, CSS, and JavaScript using Jekyll template.",
		url: "https://old.joshbl.dev",
		mediaType: "image",
		mediaContent: "/images/projects/old.webp",
		altText: "Old joshbl.dev Website"
	}
];

export const jobs: JobInfo[] = [
	{
		name: "Capital One",
		year: 2023,
		position: "Software Engineer Intern",
		projectType: "TBD",
		techStack: ["Technology Internship Program"]
	},
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

export const chipLinks: Map<string, string> = new Map<string, string>([
	["Computer Science", "https://www.cc.gatech.edu/degree-programs/bachelor-science-computer-science"],
	["Intelligence", "https://www.cc.gatech.edu/academics/threads/intelligence"],
	["Information Internetworks", "https://www.cc.gatech.edu/academics/threads/information-internetworks"],
	["Object-Oriented Programming", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=for%20CS%201322.-,CS%C2%A01331,-.%20Introduction%20to%20Object"],
	["Data Structures & Algorithms", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=CS%C2%A01331.-,CS%C2%A01332,-.%20Data%20Structures%20and"],
	["Computer Organization and Programming", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=CS%C2%A02050.-,CS%C2%A02110,-.%20Computer%20Organization%20and"],
	["Systems and Networks", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=and%20C%20programming.-,CS%C2%A02200,-.%20Computer%20Systems%20and"],
	["Intro to AI", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=CS%C2%A03510.-,CS%C2%A03600,-.%20Introduction%20to%20Artificial"],
	["Applied Combinatorics", "https://math.gatech.edu/courses/math/3012"],
	["Linear Algebra", "https://math.gatech.edu/courses/math/1554"],
	["Discrete Mathematics", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=21%20Credit%20Hours.-,CS%C2%A02050,-.%20Introduction%20to%20Discrete"],
	["Python", "https://www.python.org/"],
	["OpenCV", "https://opencv.org/"],
	["Sklearn", "https://scikit-learn.org/stable/"],
	["SciPy", "https://scipy.org/"],
	["Google Cloud Functions", "https://cloud.google.com/functions"],
	["Google Cloud Scheduler", "https://cloud.google.com/scheduler"],
	["Slack API", "https://api.slack.com/"],
	["Typescript", "https://www.typescriptlang.org/"],
	["NestJS", "https://nestjs.com/"],
	["Azure", "https://azure.microsoft.com/en-us/"],
	["PostgreSQL", "https://www.postgresql.org/"],
	["Java", "https://www.java.com/en/"],
	["Minecraft API", "https://hub.spigotmc.org/javadocs/bukkit/"],
	["BeautifulSoup", "https://pypi.org/project/beautifulsoup4/"],
	["Design & Analysis of Algorithms", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=design%20and%20animation.-,CS%C2%A03510,-.%20Design%20and%20Analysis"],
	["Intro to Database Systems", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=verifying%20program%20specifications.-,CS%C2%A04400,-.%20Introduction%20to%20Database"],
	["Intro to Perception & Robotics", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=and%20reinforced%20learning.-,CS%C2%A03630,-.%20Introduction%20to%20Perception"],
	["Computer Networking I", "https://catalog.gatech.edu/courses-undergrad/cs/#:~:text=between%20these%20models.-,CS%C2%A03251,-.%20Computer%20Networking%20I"],
	["Probability and Statistics", "https://math.gatech.edu/courses/math/3670"],
	["Technology Internship Program", "https://www.capitalonecareers.com/internship-programs"]
]);

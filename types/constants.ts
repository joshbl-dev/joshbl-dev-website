import axios, { AxiosInstance } from "axios";
import { BaseUrl } from "./BaseUrl";
import { PageInfo } from "./page";

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
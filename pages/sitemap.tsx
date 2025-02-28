import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://joshbl.dev.com";
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: baseUrl + "/projects",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.6,
		},
		{
			url: baseUrl + "/bio",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
	];
}
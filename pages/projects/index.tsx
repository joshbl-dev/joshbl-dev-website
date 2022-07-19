import React from "react";
import { pages } from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";

const page = pages.filter(p => p.title == "Projects")[0];


export default function Projects() {
	return (
		<PageTemplate page={page} />
	);
}
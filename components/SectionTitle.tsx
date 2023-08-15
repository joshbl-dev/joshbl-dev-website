import { Typography } from "@mui/material";

type sectionTitleProps = {
	title: string;
}
export const SectionTitle = (props: sectionTitleProps) => {
	return (<Typography variant={"h3"}>{props.title}</Typography>);
};
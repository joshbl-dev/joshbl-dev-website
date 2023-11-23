import { Chip, Typography } from "@mui/material";
import { chipLinks } from "../types/constants";

type topicChipProps = {
	text: string;
	chipMap?: Map<string, string>;
}

export default function TopicChip(props: topicChipProps) {
	const text = props.text;

	return (
		<Chip color={"secondary"} label={
			<Typography
				fontWeight={"bold"}
				fontSize={"1rem"}
				style={{
					whiteSpace: "normal",
					overflow: "visible",
					textAlign: "center"
				}}
			>{text}</Typography>
		}
			// Todo: Redirect to external link
			  clickable={props.chipMap ? props.chipMap.has(text) : chipLinks.has(text)}
			  component={"a"}
			  href={props.chipMap ? props.chipMap.get(text) : chipLinks.get(text)}
			  sx={{
				  padding: .5,
				  height: "auto",
				  flexWrap: "wrap",
				  marginRight: .5,
				  marginLeft: .5,
				  marginBottom: 1,
				  marginTop: 1

			  }} />
	);

}
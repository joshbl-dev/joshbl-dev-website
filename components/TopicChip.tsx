import { Chip, Typography } from "@mui/material";

type topicChipProps = {
	text: string;
}

export default function TopicChip(props: topicChipProps) {
	const text = props.text;

	return (
		<Chip color={"secondary"} label={
			<Typography
				fontWeight={"bold"}
				fontSize={"1rem"}
				style={{ whiteSpace: "pre-line" }}>{text}</Typography>
		}
			// Todo: Redirect to external link
			// clickable={true}
			  sx={{
				  // height: "fit-content",
				  padding: .5,
				  minHeight: "fit-content",
				  minWidth: "fit-content",
				  maxWidth: "fit-content",
				  // textAlign: "center",
				  marginRight: .5,
				  marginLeft: .5,
				  marginBottom: 1,
				  marginTop: 1

			  }} />
	);

}
import { Chip } from "@mui/material";

type topicChipProps = {
	text: string;
}

export default function TopicChip(props: topicChipProps) {
	const text = props.text;

	return (
		<Chip color={"secondary"} label={text}
			// Todo: Redirect to external link
			// clickable={true}
			  sx={{
				  marginRight: .5,
				  marginLeft: .5,
				  marginBottom: 1,
				  marginTop: 1,
				  fontWeight: "bold",
				  fontSize: "1rem"
			  }} />
	);

}
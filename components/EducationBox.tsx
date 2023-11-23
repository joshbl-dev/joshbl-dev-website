import { Box, Typography } from "@mui/material";
import {
	desktop_hide,
	desktop_show,
	tablet_hide,
	tablet_show
} from "../styles/theme";
import { SectionTitle } from "./SectionTitle";

type educationBoxProps = {
	boxTitle: string;
	schoolFullName: string;
	schoolShortName: string;
	years: string;
	facts: JSX.Element;
}
export const EducationBox = (props: educationBoxProps) => {
	return <>
		<SectionTitle title={props.boxTitle} />
		<Box border={"solid"} borderRadius={"20px"} minWidth={"lg"}
			 maxWidth={"80%"} margin={"20px"}>

			<Box justifyContent={"space-between"}
				 {...desktop_show("flex")}>
				<Typography
					margin={"20px"} variant={"h4"}
					whiteSpace={"nowrap"}>
					{props.schoolFullName}
				</Typography>

				<Typography margin={"20px"}
							whiteSpace={"nowrap"}
							variant={"h4"}>
					{props.years}
				</Typography>
			</Box>

			<Box
				height={"fit-content"}
				justifyContent={"center"}
				{...desktop_hide("block")}>
				<Typography
					{...tablet_hide("block")}
					margin={"20px"}
					variant={"h4"}
					text-align={"center"}
					whiteSpace={"nowrap"}>
					{props.schoolShortName}
				</Typography>
				<Typography
					{...tablet_show("block")}
					margin={"20px"}
					variant={"h4"}
					text-align={"center"}
					whiteSpace={"nowrap"}>
					{props.schoolFullName}
				</Typography>

				<Typography margin={"20px"}
							whiteSpace={"nowrap"}
							variant={"h5"}>
					{props.years}
				</Typography>
			</Box>


			<Box padding={"10px"}>
				{props.facts}
			</Box>
		</Box>
	</>;
};
import { pages } from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";
import { Box, Divider, Typography } from "@mui/material";
import Timeline from "../../components/Timeline";
import {
	desktop_hide,
	desktop_show,
	tablet_hide,
	tablet_show
} from "../../styles/theme";
import TopicChip from "../../components/TopicChip";
import ImageCarousel from "../../components/ImageCarousel";

const page = pages.filter(p => p.title == "Bio")[0];

function facts(subject: string, facts: string[]) {
	return (
		<Box>
			<Typography margin={"10px"}
						textAlign={"left"}
						width={"fit-content"}
						variant={"h5"}>{subject}:
				<Box display="block">

					{facts.map(fact => <TopicChip key={fact + Math.random()}
												  text={fact} />)}
				</Box>
			</Typography>
		</Box>);
}

function divider() {
	return (
		<Box display={"flex"}
			 margin={"20px"}
			 justifyContent={"center"}>
			<Divider orientation={"horizontal"}
					 sx={{
						 // padding: "1px",
						 width: "75%",
						 borderWidth: "5px",
						 borderRadius: "20px"
					 }} />
		</Box>);
}

function sectionTitle(title: string) {
	return (<Typography variant={"h3"}>{title}</Typography>);
}

const csCourses: string[] = ["Object-Oriented Programming", "Data Structures & Algorithms", "Computer Organization and Programming",
	"Systems and Networks", "Intro to AI"];
const mathCourses: string[] = ["Applied Combinatorics", "Linear Algebra", "Discrete Mathematics"];


function content() {
	return (
		<>
			{sectionTitle("College Education")}
			<Box border={"solid"} borderRadius={"20px"} minWidth={"lg"}
				 maxWidth={"100%"} margin={"20px"}>

				<Box justifyContent={"space-between"}
					 {...desktop_show("flex")}>
					<Typography
						margin={"20px"} variant={"h4"}
						whiteSpace={"nowrap"}>
						Georgia Institute of Technology
					</Typography>

					<Typography margin={"20px"}
								whiteSpace={"nowrap"}
								variant={"h4"}>
						2020-2024
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
						Georgia Tech
					</Typography>
					<Typography
						{...tablet_show("block")}
						margin={"20px"}
						variant={"h4"}
						text-align={"center"}
						whiteSpace={"nowrap"}>
						Georgia Institute of Technology
					</Typography>

					<Typography margin={"20px"}
								whiteSpace={"nowrap"}
								variant={"h5"}>
						2020-2024
					</Typography>
				</Box>


				<Box padding={"10px"}>
					{facts("Major", ["Computer Science"])}
					{facts("Concentrations", ["Intelligence", "Information Internetworks"])}
					{facts("CS Courses", csCourses)}
					{facts("Math Courses", mathCourses)}
				</Box>
			</Box>
			{divider()}
			{sectionTitle("Professional Work Experience")}
			{Timeline()}

			{divider()}
			{sectionTitle("Interests")}
			{ImageCarousel()}
		</>
	);
}

export default function Bio() {
	return (
		<PageTemplate page={page} components={
			<>
				<Box maxWidth="100vw" margin={"20px"}
					 justifyContent={"center"}
					 textAlign={"center"}>
					{content()}
				</Box>
			</>} />
	);
};



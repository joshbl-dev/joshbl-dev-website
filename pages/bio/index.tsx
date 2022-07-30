import {pages} from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";
import {Box, Divider, Grid, Typography} from "@mui/material";
import Timeline from "../../components/Timeline";
import ImageCarousel from "../../components/ImageCarousel";

const page = pages.filter(p => p.title == "Bio")[0];

function factsText(subject: string, text: string) {
	return (<Box width={"100%"}><Typography margin={"20px"}
											textAlign={"left"}
											variant={"h5"}>{subject}: <Typography
		padding={"10px"}
		variant={"body1"}>{text}</Typography></Typography></Box>);
}

function divider() {
	return (
		<Box display={"flex"}
			 margin={"20px"}
			 justifyContent={"center"}>
			<Divider orientation={"horizontal"}
					 sx={{
						 padding: "1px",
						 width: "75%",
						 borderWidth: "5px",
						 borderRadius: "20px",
					 }} />
		</Box>);
}

function sectionTitle(title: string) {
	return (<Typography variant={"h3"}>{title}</Typography>);
}

const csCourses: string[] = ["Object-Oriented Programming", "Data Structures & Algorithms", "Computer Organization and Programming",
	"Systems and Networks", "Intro to AI"];
const mathCourses: string[] = ["Applied Combinatorics", "Linear Algebra", "Discrete Mathematics"];

export default function Bio() {
	return (
		<PageTemplate page={page} components={<>
			<Box margin={3} justifyContent={"center"}
				 textAlign={"center"}>
				{sectionTitle("College Education")}
				<Grid container
					  width={"fit-content"}
					  maxWidth={"lg"}
					  margin={"20px"}
					  direction={"row"}
					  justifyContent={"space-between"}
					  alignItems={"stretch"}
					  padding={"20px"}
					  border={"solid"}
					  borderRadius={"20px"}
					  textAlign={"center"}
				>
					<Grid item textAlign={"left"}
						  width={"fit-content"}
					>
						<Typography margin={"20px"} variant={"h4"}
									whiteSpace={"nowrap"}
						>Georgia Institute of Technology </Typography>

					</Grid>
					<Grid item
						  width={"fit-content"}
						  textAlign={"right"}
						  justifyContent={"flex-end"}>
						<Typography margin={"20px"}
									whiteSpace={"nowrap"}
									width={"fit-content"}
									variant={"h4"}>2020-2024</Typography>
					</Grid>
					{factsText("Major", "Computer Science")}
					{factsText("Concentrations", "Intelligence and Information Internetworks")}
					{factsText("CS Courses", csCourses.join(", "))}
					{factsText("Math Courses", mathCourses.join(", "))}
				</Grid>
				{divider()}
				{sectionTitle("Professional Work Experience")}
				{Timeline()}
				{divider()}
				{sectionTitle("Hobbies")}
				{ImageCarousel()}
			</Box>
		</>} />
	);
};



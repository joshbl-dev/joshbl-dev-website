import {
	gradCsCourses,
	pages,
	undergradCsCourses,
	undergradMathCourses
} from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";
import { Box, Container, Typography } from "@mui/material";
import Timeline from "../../components/Timeline";
import TopicChip from "../../components/TopicChip";
import ImageCarousel from "../../components/ImageCarousel";
import { EducationBox } from "../../components/EducationBox";
import { DividerLine } from "../../components/DividerLine";
import { SectionTitle } from "../../components/SectionTitle";

const page = pages.filter(p => p.title == "Bio")[0];

function facts(subject: string, facts: string[], chipMap?: Map<string, string>) {
	return (
		<Box>
			<Typography margin={"10px"}
						textAlign={"left"}
						width={"fit-content"}
						variant={"h5"}>{subject}:
				<Box display="block">

					{facts.map(fact => <TopicChip key={fact + Math.random()}
												  text={fact}
												  chipMap={chipMap}
					/>)}
				</Box>
			</Typography>
		</Box>);
}

function content() {
	return (
		<>
			<Container style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}>
				<EducationBox
					boxTitle={"Graduate Education"}
					schoolFullName={
						"Georgia Institute of Technology"
					}
					schoolShortName={
						"Georgia Tech"
					}
					years={
						"2024-2025"
					}
					facts={
						<>
							{facts("Master's Degree", ["Computer Science"],
								new Map([
									["Computer Science", "https://www.cc.gatech.edu/degree-programs/bsms-program-computer-science"]
								])
							)}
							{facts("Concentration", ["Machine Learning"],
								new Map([
									["Machine Learning", "https://www.cc.gatech.edu/ms-computer-science-specializations"]
								])
							)}
							{facts("CS Courses", gradCsCourses)}
						</>
					}

				/>
				<DividerLine />
				<EducationBox
					boxTitle={"Undergraduate Education"}
					schoolFullName={
						"Georgia Institute of Technology"
					}
					schoolShortName={
						"Georgia Tech"
					}
					years={
						"2020-2024"
					}
					facts={
						<>
							{facts("Bachelor's Degree", ["Computer Science"])}
							{facts("Concentrations", ["Intelligence", "Information Internetworks"])}
							{facts("CS Courses", undergradCsCourses)}
							{facts("Math Courses", undergradMathCourses)}
						</>
					}
				/>
				<DividerLine />
				<SectionTitle title={"Professional Work Experience"} />
				<Timeline />

				<DividerLine />
				<SectionTitle title={"Interests"} />
				<ImageCarousel />
			</Container>
		</>
	)
		;
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



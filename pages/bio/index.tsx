import {pages} from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";
import {Box, Container} from "@mui/material";
import ImageCarousel from "../../components/ImageCarousel";
import {EducationBox} from "../../components/EducationBox";
import {DividerLine} from "../../components/DividerLine";
import {SectionTitle} from "../../components/SectionTitle";
import * as fs from "fs";
import {EducationInfo} from "../../types/EducationInfo";
import path from "node:path";
import Timeline from "../../components/Timeline";

const page = pages.filter(p => p.title == "Bio")[0];

function content(props: EducationInfo) {
	const educations = Object.entries(props).map(([key, data]) => data);
	return (
		<>
			<Container sx={{
				marginBottom: "20px",
			}}>
				<SectionTitle title={"Education"} />
			</Container>
			<Container sx={{
				width: "100vw",
			}}>
				<EducationBox data={educations} />
			</Container>
			<DividerLine />
			<Container style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
				<SectionTitle title={"Professional Work Experience"} />
				<Timeline />
			</Container>
			<DividerLine />
			<SectionTitle title={"Interests"} />
			<ImageCarousel />
		</>
	)
		;
}

export default function Bio(props: EducationInfo) {
	return (
		<PageTemplate page={page} components={
			<>
				<Box maxWidth="100vw" margin={"20px"}
					 justifyContent={"center"}
					 textAlign={"center"}>
					{content(props)}
				</Box>
			</>} />
	);
};

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "public", "data", "educationInfo.json");
	const fileContents = fs.readFileSync(filePath, "utf8");
	const data = JSON.parse(fileContents);

	return {
		"props": data,
	};
}



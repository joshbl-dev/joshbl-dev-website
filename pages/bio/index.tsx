import {pages} from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";
import {Box, Container, Typography} from "@mui/material";
import TopicChip from "../../components/TopicChip";
import ImageCarousel from "../../components/ImageCarousel";
import {EducationBoxNew} from "../../components/EducationBox";
import {DividerLine} from "../../components/DividerLine";
import {SectionTitle} from "../../components/SectionTitle";
import * as fs from "fs";
import {EducationInfo} from "../../types/EducationInfo";
import path from "node:path";
import Timeline from "../../components/Timeline";

const page = pages.filter(p => p.title == "Bio")[0];

function facts(subject: string, facts: string[], chipMap?: Map<string, string>) {
	return (
		<Box>
			<Typography margin={"10px"}
						textAlign={"left"}
						width={"fit-content"}
						maxWidth={"100%"}
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

function content(props: EducationInfo) {
	const educationBoxes = Object.entries(props).map(([key, data]) => {
		return <Container disableGutters={true}>
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<EducationBoxNew
					key={key}
					{...data} />

			</Container>
			<DividerLine />
		</Container>;
	});
	return (
		<>

			{educationBoxes}
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



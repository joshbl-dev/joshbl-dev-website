import {
	Box,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography
} from "@mui/material";
import { jobs } from "../types/constants";
import TopicChip from "./TopicChip";

export default function Timeline() {
	return (
		<Box justifyContent={"center"}
			// border={"solid"}
			// borderRadius={"20px"}
			 textAlign={"left"} width={"fit-content"}>
			<Stepper orientation="vertical">
				{jobs.map((job, index) => {
					return (<Step key={job.name + job.year} completed={true}
								  expanded>
							<StepLabel
								StepIconComponent={() => <Typography
									variant={"h4"}
									fontWeight={"bold"}
								>{job.year}</Typography>}>
								<Box height={"fit-content"} margin={"10px"}>
									<Typography
										variant={"h5"}>{job.name} - {job.projectType}</Typography>
									<Typography
										variant={"subtitle1"}
										sx={{ fontStyle: "italics" }}>
										{job.position}</Typography>
								</Box>
							</StepLabel>
							<StepContent>
								{job.techStack.map(tech => <TopicChip
									key={tech + Math.random()}
									text={tech} />)}
							</StepContent>
						</Step>
					);
				})}
				<Step />

			</Stepper>
		</Box>
	);
}
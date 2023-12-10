import {
	Box,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import {jobs} from "../types/constants";
import TopicChip from "./TopicChip";
import {v4 as uuidv4} from "uuid";

export default function Timeline() {
	return (
		<Box justifyContent={"center"}
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
										sx={{fontStyle: "italics"}}>
										{job.position}</Typography>
								</Box>
							</StepLabel>
							<StepContent>
								{job.techStack.map(tech => <TopicChip
									key={uuidv4()}
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
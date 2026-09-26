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
		<Box sx={{ justifyContent: "center", textAlign: "left", width: "fit-content" }}>
			<Stepper orientation="vertical">
				{jobs.map((job) => {
					return (
						<Step key={job.name + job.year} completed expanded>
							<StepLabel
								sx={{
									"& .MuiStepLabel-iconContainer": { display: "none" },
									"& .MuiStepLabel-labelContainer": { width: "100%" },
								}}>
								<Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, width: "100%" }}>
									<Typography variant="h4" sx={{ fontWeight: "bold", minWidth: "80px", flexShrink: 0 }}>
										{job.year}
									</Typography>
									<Box sx={{ marginTop: "2px" }}>
									<Typography
										variant={"h5"}>{job.name} - {job.projectType}</Typography>
									<Typography
										variant={"subtitle1"}
										sx={{fontStyle: "italics"}}>
										{job.position}</Typography>
									</Box>
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
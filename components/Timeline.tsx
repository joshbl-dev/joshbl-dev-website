import {
	Box,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import {jobs} from "../types/constants";

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
									variant={"h4"}>{job.year}</Typography>}

							>
								<Box display={"flex"}
									 alignItems={"center"}
								>
									<Typography padding={"1rem"}
												variant={"h5"}>{job.name}</Typography>
									<Typography padding={"1rem"}
												variant={"subtitle1"}>
										[{job.position}]</Typography>
								</Box>
							</StepLabel>
							<StepContent>
								<Typography>{job.TechStack.join(", ")}</Typography>
							</StepContent>
						</Step>
					);
				})}
				<Step />

			</Stepper>
		</Box>
	);
}
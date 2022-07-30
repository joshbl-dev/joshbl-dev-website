import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {Box, Button, MobileStepper, Paper, Typography} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";
import React from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function ImageCarousel() {
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = 2;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{maxWidth: 400, flexGrow: 1}}>
			<Paper
				square
				elevation={0}
				sx={{
					display: "flex",
					alignItems: "center",
					height: 50,
					pl: 2,
					bgcolor: "background.default",
				}}
			>
				<Typography>label</Typography>
			</Paper>
			<AutoPlaySwipeableViews
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{[1, 2].map((step, index) => (
					<div key={step}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								component="img"
								sx={{
									height: 255,
									display: "block",
									maxWidth: 400,
									overflow: "hidden",
									width: "100%",
								}}
								src={"/images/projects/nest.webp"}
								alt={"step"}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button
						size="small"
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Next
						{(
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack}
							disabled={activeStep === 0}>
						{(
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</Box>
	);
}
import {Box, Button, MobileStepper, Typography} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";
import React from "react";
import {interests} from "../types/constants";
import {desktop_hide, desktop_show} from "../styles/theme";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import Image from "next/image";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export default function ImageCarousel() {
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = interests.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	function carousel(size: number) {

		return (<>
			<AutoPlaySwipeableViews
				height={"fit-content"}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{interests.map((interest, index) => (
						<Box
							display={"block"} justifyContent={"center"}

							key={interest.name}>
							{Math.abs(activeStep - index) <= 2 ? (
								<>
									<Typography
										variant={"h5"}>{interest.name}</Typography>

									<Image
										height={size + "px"}
										width={"500px"}
										objectFit={"contain"}
										src={interest.image}
										alt={interest.name} />

								</>
							) : undefined}</Box>

					),
				)}
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
		</>);
	}

	return (
		<Box margin={"20px"} display={"flex"}
			 justifyContent={"center"} maxWidth={"100%"}>
			<Box
				{...desktop_show("block")}
				maxWidth={"md"}
			>
				{carousel(400)}
			</Box>
			<Box
				{...desktop_hide("block")}
				maxWidth={"sm"}
			>
				{carousel(250)}
			</Box>
		</Box>
	);
}
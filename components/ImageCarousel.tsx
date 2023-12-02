import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Box, Button, MobileStepper, Typography} from "@mui/material";
import React from "react";
import {interests} from "../types/constants";
import {desktop_hide, desktop_show} from "../styles/theme";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import Image from "next/image";

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

	function carousel(width: number, height: number) {
		return (
			<>
				<Carousel
					showStatus={false}
					showThumbs={false}
					showArrows={false}
					showIndicators={false}
					selectedItem={activeStep}
					onChange={handleStepChange}
					swipeable={true}
				>
					{interests.map((interest, index) => (
						<Box
							display={"block"} justifyContent={"center"}
							key={interest.name}
						>
							<Typography
								variant={"h5"}>{interest.name}</Typography>
							<Box sx={{position: "relative"}}
								 height={height + "px"}
								 width={width + "px"}
								 margin={"auto"}>
								<Image
									src={interest.image}
									alt={interest.name}
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
									}}
								/>
							</Box>
						</Box>
					))}
				</Carousel>
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
			</>
		);
	}

	return (
		<Box margin={"20px"} display={"flex"}
			 justifyContent={"center"} maxWidth={"100%"}>
			<Box
				{...desktop_show("block")}
				maxWidth={"md"}
			>
				{carousel(450, 300)}
			</Box>
			<Box
				{...desktop_hide("block")}
				width={"315px"}
			>
				{carousel(300, 200)}
			</Box>
		</Box>
	);
}
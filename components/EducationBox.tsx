import {
	Box,
	CardActions,
	CardContent,
	CardHeader,
	Chip,
	IconButton,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import {useTheme} from "@mui/styles";
import {Theme} from "@mui/system";
import {
	Concentration,
	Course,
	Education,
	Semester,
} from "../types/EducationInfo";
import Card from "@mui/material/Card";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import {theme} from "../styles/theme";
import {v4 as uuidv4} from "uuid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {ChevronRight} from "@mui/icons-material";

import useMediaQuery from "@mui/material/useMediaQuery";

function Timeline({semesters}: {semesters: Semester[]}) {
	const [activeStep, setActiveStep] = React.useState<number>(-1);
	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
	const handleExpand = (step: number) => {
		setActiveStep(activeStep === step ? -1 : step);
	};
	return (
		<Box justifyContent={"center"}
			 marginLeft={"10px"}
			 textAlign={"left"} width={"fit-content"}>
			<Stepper activeStep={activeStep}
					 orientation="vertical">
				{semesters.reverse().map((semester, index) => {
					return (<Step key={uuidv4()}
								  completed={true}
								  expanded={mobile ? activeStep === index : true}
								  onClick={() => handleExpand(index)}>
							<StepLabel
								StepIconComponent={() => <><Typography
									variant={"h4"}
									fontWeight={"bold"}>
									{semester.year + " " + semester.term}
								</Typography>
									{mobile ? <IconButton>
										{activeStep === index ?
											<ExpandMoreIcon /> :
											<ChevronRight />}
									</IconButton> : <></>}
								</>}>
							</StepLabel>
							<StepContent>
								<Box sx={
									{
										display: "flex",
										flexWrap: "wrap",
										flexDirection: "row",
										gap: "10px",
									}
								}>
									{semester.courses.map(course =>

										<CourseCard
											key={uuidv4()}
											{...course} />,
									)}
								</Box>
							</StepContent>
						</Step>
					);
				})}
				<Step />
			</Stepper>
		</Box>
	);
}


function CourseCard(props: Course) {
	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

	return <Card
		variant="outlined"
		sx={{
			borderRadius: "15px",
			display: "flex",
			width: mobile ? "100%" : "fit-content",
			flexDirection: "row",
			backgroundColor: theme.palette.background.default,
		}}
		onMouseOver={(event) => event.currentTarget.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)"}
		onMouseOut={(event) => event.currentTarget.style.boxShadow = "none"}
	>
		<CardHeader
			sx={{
				width: mobile ? "100%" : "fit-content",
			}}
			title={props.name}
			subheader={props.course}>
		</CardHeader>
		<CardActions>
			<IconButton href={props.url} target="_blank" color="secondary">
				<InfoOutlinedIcon />
			</IconButton>
		</CardActions>
	</Card>;

}

function ConcentrationChip(props: Concentration) {
	return <Chip
		label={<Typography
			fontWeight={"bold"}
			style={{
				whiteSpace: "normal",
				overflow: "visible",
				textAlign: "center",
			}}
		>{props.name}</Typography>}
		variant="outlined"
		color="primary"
		clickable={props.url != ""}
		component={"a"}
		href={props.url ? props.url : ""}
	/>;
}

type educationBoxProps = {
	data: Education[]
}

export function EducationBox(props: educationBoxProps) {
	const theme = useTheme();

	const [education, setEducation] = React.useState<Education>(props.data[0]);
	return <>
		<Box
			sx={{
				borderRadius: "15px",
				border: `2px solid #ddd`,
				boxShadow: "0 3px 5px 2px rgba(125, 125, 125, .3)",
			}}
		>
			<Card sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				borderRadius: "15px",
			}}>
				<ToggleButtonGroup
					// color={"primary"}
					fullWidth={true}
					value={education.abbreviation}
					onChange={(event, value) => {
						if (value != null && value != education.abbreviation) {
							setEducation(props.data.filter((educationNew) => educationNew.abbreviation == value)[0]);
						}
					}}
					exclusive
					aria-label="text alignment"
				>
					{props.data.map((education) => (
						<ToggleButton
							size={"large"}
							key={uuidv4()}
							value={education.abbreviation}
						>
							<Typography>{education.abbreviation}</Typography>
						</ToggleButton>
					))}
				</ToggleButtonGroup>
				<CardHeader
					title={<Typography fontWeight={"bold"}
									   variant={"h5"}
					>
						{education.school}
					</Typography>}
					subheader={<>
						<Typography>{education.degree + " in " + education.major + "\n" + education.start_year + " - " + education.end_year}</Typography>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
								gap: "10px",
								marginTop: "10px",
							}}
						>
							{education.concentrations.map((data) => (
								<ConcentrationChip {...data} />
							))}
						</Box>
					</>}
					subheaderTypographyProps={{
						style: {
							whiteSpace: "pre-line",
						},
					}}
				/>
				<CardContent sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}>
					<Timeline semesters={education.semesters} />
				</CardContent>
			</Card>
		</Box>
	</>;
}